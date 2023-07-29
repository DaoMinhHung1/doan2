import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../Firebase/firebase";
import { Dayjs } from "dayjs";

export interface Ticket {
  hoTen: string;
  soDienThoai: string;
  email: string;
  goiVe: string;
  soLuongVe: string;
  ngaySuDung: Dayjs | null;
}

export interface TicketState {
  data: Ticket | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: TicketState = {
  data: null,
  isLoading: false,
  error: null,
};

// Async thunk to add ticket data to Firebase
export const addTicket = createAsyncThunk(
  "ticket/addTicket",
  async (ticketData: Ticket, { rejectWithValue }) => {
    try {
      // Add the data to the "datve" collection in Firestore
      const docRef = await db.collection("datve").add(ticketData);

      // Return the data with the generated ID to save in the state
      return { ...ticketData, id: docRef.id };
      
    } catch (error) {
      // Handle errors and reject with the error message
      console.error("Error adding ticket data:", error);
      return rejectWithValue("Failed to add ticket data");
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    // Add other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTicket.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTicket.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(addTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default ticketSlice.reducer;
