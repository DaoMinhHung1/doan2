import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../Firebase/firebase";

// Interface cho đối tượng sự kiện
interface Event {
  id: string;
  tenSK: string;
  tenDiaDiem: string;
  ngayBatDau: string;
  ngayKetThuc: string;
  giaVe: string;
  imgAnhMot: string;
  imgAnhHai: string;
}

// Interface cho state của slice
export interface SukienState {
  events: Event[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SukienState = {
  events: [],
  isLoading: false,
  error: null,
};

// Tạo async thunk để load dữ liệu sự kiện từ Firestore
export const fetchEvents = createAsyncThunk(
  "sukien/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      // Truy vấn Firestore để lấy dữ liệu sự kiện
      const querySnapshot = await db.collection("sukien").get();
      const events: Event[] = [];

      // Lặp qua các tài liệu và chuyển dữ liệu về đúng cấu trúc Event
      querySnapshot.forEach((doc) => {
        const event: Event = {
          id: doc.data().id,
          tenSK: doc.data().tenSK,
          tenDiaDiem: doc.data().tenDiaDiem,
          ngayBatDau: doc.data().ngayBatDau,
          ngayKetThuc: doc.data().ngayKetThuc,
          giaVe: doc.data().giaVe,
          imgAnhMot: doc.data().imgAnhMot,
          imgAnhHai: doc.data().imgAnhHai,
        };
        events.push(event);
      });

      events.sort((a, b) => a.id.localeCompare(b.id));

      // Trả về danh sách sự kiện
      return events;
    } catch (error) {
      // Xử lý lỗi và reject với thông báo lỗi
      return rejectWithValue("Failed to fetch events");
    }
  }
);

const sukienSlice = createSlice({
  name: "sukien",
  initialState,
  reducers: {
    // Các reducers khác nếu cần thiết
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default sukienSlice.reducer;
