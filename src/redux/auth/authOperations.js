import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export const authRegister = createAsyncThunk(
  "auth/register",
  async (credential, thunkAPI) => {
    try {
      console.log(credential);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
