# Autonomize Frontend Machine Test

## Stack
- ReactJs
- Redux
- CSS

## Features
- Inputs in the searchbar is validated in frontend with proper regex and error message will be shown for invalid username.
- Implemented custom hook for username validation before sending request to API.
- Error boundary set for unexpected error handling.
- No same data is fetched twice. All data is stored and fetched from Redux store.
- Error from GitHub API is handled and displayed to users (Eg: For non-existing GitHub username).
- Use of mulitple routes using react-router-dom for seperate pages.
- Async thunks employed for fetching data from the API.

### Base URL
```sh
http://localhost:5173
```
