import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRegistrations,
  addRegistration,
  deleteRegistration
} from "./registrationThunks";

const registrationSlice = createSlice({
  name: "registrations",
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      /* FETCH */
      .addCase(fetchRegistrations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRegistrations.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchRegistrations.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || action.error?.message || "Fetch failed";
      })

      /* ADD */
      .addCase(addRegistration.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      /* DELETE */
      .addCase(deleteRegistration.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (r) => r.id !== action.payload
        );
      });
  }
});

export default registrationSlice.reducer;
