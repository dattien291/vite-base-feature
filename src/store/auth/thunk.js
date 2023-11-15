import { authServices } from "@/assets/fake-data/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import to from "await-to-js";
import { isEmpty } from "lodash";
import { loadUser } from "./authSlice";

export const loginThunk = createAsyncThunk("auth/login", async (data, { rejectWithValue, dispatch }) => {
  const [err, response] = await to(authServices.clientLogin({ username: data?.username, password: data?.password }));

  if (!isEmpty(err)) {
    return rejectWithValue(err);
  }

  dispatch(loadUser(response?.data));

  // await dispatch(getTokenThunk({ getMe: true }));
});
