import { IUser } from "../interfaces/user";
import { model, Model, Schema } from "mongoose";

const githubUserSchema = new Schema<IUser>(
  {
    login: String,
    id: Number,
    avatar_url: String,
    gravatar_id: String,
    url: String,
    html_url: String,
    followers_url: String,
    following_url: String,
    gists_url: String,
    starred_url: String,
    subscriptions_url: String,
    organizations_url: String,
    repos_url: String,
    events_url: String,
    received_events_url: String,
    type: String,
    site_admin: Boolean,
    name: String,
    company: String,
    blog: String,
    location: String,
    email: String,
    hireable: Boolean,
    bio: String,
    twitter_username: String,
    public_repos: Number,
    public_gists: Number,
    followers: Number,
    following: Number,
    created_at: String,
    updated_at: String,
    friends: [String],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel: Model<IUser> = model("User", githubUserSchema);

export default UserModel;
