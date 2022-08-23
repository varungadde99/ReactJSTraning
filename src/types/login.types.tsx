// all the types which will be used later - for Login
export interface PostLoginPayload {
  email: string;
  password: string;
}

export interface PostLoginResponse {
  token: string;
}
