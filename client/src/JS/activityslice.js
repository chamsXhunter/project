import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getactivite = createAsyncThunk("activite/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/activite/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addactivite = createAsyncThunk("activite/add", async (newactivite) => {
  try {
    let result = await axios.post("http://localhost:5000/activite/add", newactivite);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deleteactivite = createAsyncThunk("activite/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/activite/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editactivite = createAsyncThunk(
  "activite/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/activite/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  activitelist: null,
  status: null,
};

export const activiteSlice = createSlice({
  name: "activite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getactivite.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getactivite.fulfilled, (state, action) => {
        state.status = "success";
        state.activitelist = action.payload.data.activites;
      })
      .addCase(getactivite.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addactivite.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addactivite.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addactivite.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deleteactivite.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteactivite.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteactivite.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editactivite.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editactivite.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editactivite.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default activiteSlice.reducer;