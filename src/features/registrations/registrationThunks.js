import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/registrations";

export const fetchRegistrations = createAsyncThunk(
  "registrations/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (err) {
      return rejectWithValue("Server not reachable");
    }
  }
);

export const addRegistration = createAsyncThunk(
  "registrations/add",
  async (data) => {
    const res = await axios.post(API_URL, data);
    return res.data;
  }
);

export const deleteRegistration = createAsyncThunk(
  "registrations/delete",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);
