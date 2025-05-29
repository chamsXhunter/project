import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getparticipation = createAsyncThunk("participation/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/participation/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const addparticipation = createAsyncThunk("participation/add", async (newparticipation) => {
  try {
    let result = await axios.post("http://localhost:5000/participation/add", newparticipation);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const deleteparticipation = createAsyncThunk("participation/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/participation/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editparticipation = createAsyncThunk(
  "participation/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/participation/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  participationlist: null,
  status: null,
};

export const participationSlice = createSlice({
  name: "participation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getparticipation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getparticipation.fulfilled, (state, action) => {
        state.status = "success";
        state.participationlist = action.payload.data.participations;
      })
      .addCase(getparticipation.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addparticipation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addparticipation.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addparticipation.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deleteparticipation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteparticipation.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteparticipation.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(editparticipation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editparticipation.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editparticipation.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function

export default participationSlice.reducer;