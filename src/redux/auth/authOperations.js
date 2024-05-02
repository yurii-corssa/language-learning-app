import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUser } from "../../firebase";

export const authRegister = createAsyncThunk(
  "auth/register",
  async (credential, thunkAPI) => {
    try {
      const { displayName, email } = await createUser(credential);
      return { displayName, email };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
