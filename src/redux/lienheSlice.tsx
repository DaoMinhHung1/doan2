import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../Firebase/firebase";

export interface Contact {
  hoTen: string;
  email: string;
  soDienThoai: string;
  diaChi:string;
  loiNhan:string;
}

export interface ContactState {
  data: Contact | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  data: null,
  isLoading: false,
  error: null,
};

// Async thunk to add ticket data to Firebase
export const addContact = createAsyncThunk(
  "ticket/addTicket",
  async (contactData: Contact, { rejectWithValue }) => {
    try {
      // Add the data to the "datve" collection in Firestore
      const docRef = await db.collection("lienhe").add(contactData);

      // Return the data with the generated ID to save in the state
      return { ...contactData, id: docRef.id };
      
    } catch (error) {
      // Handle errors and reject with the error message
      console.error("Error adding ticket data:", error);
      return rejectWithValue("Failed to add ticket data");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // Add other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default contactSlice.reducer;
