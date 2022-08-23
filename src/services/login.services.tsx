import { PostLoginPayload, PostLoginResponse } from "../types/login.types";

//the postLogin -> returns a promise of type - PostLoginReposne
export const postLogin = (
  payload: PostLoginPayload
): Promise<PostLoginResponse> => {
  return fetch("https://reqres.in/api/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  }).then((res) => res.json() as Promise<PostLoginResponse>);
  // res.json() also returns a promise
};
