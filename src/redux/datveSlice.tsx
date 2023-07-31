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
  ticket: Ticket[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TicketState = {
  ticket: [],
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

// Async thunk to load ticket data from Firebase
export const fetchTicket = createAsyncThunk(
  "ticket/fetchTicket",
  async (_, { rejectWithValue }) => {
    try {
      // Truy vấn Firestore để lấy dữ liệu vé
      const querySnapshot = await db.collection("datve").get();
      const tickets: Ticket[] = [];

      // Lặp qua các tài liệu và chuyển dữ liệu về đúng cấu trúc Ticket
      querySnapshot.forEach((doc) => {
        const ticket: Ticket = {
          hoTen: doc.data().hoTen,
          soDienThoai: doc.data().soDienThoai,
          email: doc.data().email,
          goiVe: doc.data().goiVe,
          soLuongVe: doc.data().soLuongVe,
          ngaySuDung: doc.data().ngaySuDung,
        };
        tickets.push(ticket);
      });

      // Trả về danh sách vé
      return tickets;
    } catch (error) {
      // Xử lý lỗi và reject với thông báo lỗi
      console.error("Error fetching ticket data:", error);
      return rejectWithValue("Failed to fetch ticket data");
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
        state.ticket = [...state.ticket, action.payload]; // Add the new ticket to the data array
        state.isLoading = false;
      })
      .addCase(addTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchTicket.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTicket.fulfilled, (state, action) => {
        state.ticket = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default ticketSlice.reducer;
