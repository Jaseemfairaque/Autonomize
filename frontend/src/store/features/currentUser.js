import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  username: "",
  user: null,
  followers: [],
  repos: [],
  currentRepo: null,
  isLoading: false,
  error: null,
};

// Thunks
export const getUserDataAPI = createAsyncThunk(
  "userData/getUserDataAPI",
  async (username, { rejectWithValue }) => {
    try {
      const [user, repos, followers] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`).then((response) => {
          if (!response.ok) {
            if (response.status === 404) throw new Error("User not found");
            throw new Error(`Error fetching user data: ${response.statusText}`);
          }
          return response.json();
        }),
        fetch(`https://api.github.com/users/${username}/repos`).then(
          (response) => {
            if (!response.ok) {
              if (response.status === 404) throw new Error("User not found");
              throw new Error(`Error fetching repos: ${response.statusText}`);
            }
            return response.json();
          }
        ),
        fetch(`https://api.github.com/users/${username}/followers`).then(
          (response) => {
            if (!response.ok) {
              if (response.status === 404) throw new Error("User not found");
              throw new Error(
                `Error fetching followers: ${response.statusText}`
              );
            }
            return response.json();
          }
        ),
      ]);

      return { user, repos, followers };
    } catch (error) {
      console.error("Error in getUserDataAPI:", error);
      return rejectWithValue(error);
    }
  }
);

// Slice
const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetStore: (state, action) => {
      state = initialState;
    },
    setCurrentRepo: (state, action) => {
      state.isLoading = true;
      state.currentRepo = state.repos.find(
        (repo) => repo.name === action.payload
      );
      state.isLoading = false;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    resetUsername: (state) => {
      state.username = "";
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDataAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDataAPI.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.followers = action.payload.followers;
        state.repos = action.payload.repos;
        state.isLoading = false;
      })
      .addCase(getUserDataAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const selectUserData = (state) => state.userData.user;
export const selectUserLoading = (state) => state.userData.isLoading;
export const selectRepos = (state) => state.userData.repos;
export const selectFollowers = (state) => state.userData.followers;
export const selectCurrentRepo = (state) => state.userData.currentRepo;
export const selectUsername = (state) => state.userData.username;
export const selectError = (state) => state.userData.error;

export const {
  resetStore,
  setCurrentRepo,
  setUsername,
  resetUsername,
  resetError,
} = userData.actions;

export default userData.reducer;
