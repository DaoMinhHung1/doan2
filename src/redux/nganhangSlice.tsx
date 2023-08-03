import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../Firebase/firebase";

// Interface cho đối tượng ngân hàng
interface Nganhang {
  soThe: string;
  hoTen: string;
  ngayHetHan: string;
  CVV: string;
}

// Interface cho state của slice
export interface SukienState {
  nganhang: Nganhang[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SukienState = {
  nganhang: [],
  isLoading: false,
  error: null,
};

// Tạo async thunk để load dữ liệu từ collection 'nganhang'
export const fetchNganhang = createAsyncThunk(
  "nganhang/fetchNganhang",
  async (_, { rejectWithValue }) => {
    try {
      // Truy vấn Firestore để lấy dữ liệu ngân hàng
      const querySnapshot = await db.collection("nganhang").get();
      const nganhang: Nganhang[] = [];

      // Lặp qua các tài liệu và chuyển dữ liệu về đúng cấu trúc Nganhang
      querySnapshot.forEach((doc) => {
        const nganhangItem: Nganhang = {
          soThe: doc.data().soThe,
          hoTen: doc.data().hoTen,
          ngayHetHan: doc.data().ngayHetHan,
          CVV: doc.data().CVV
        };
        nganhang.push(nganhangItem);
      });

      // Trả về danh sách ngân hàng
      return nganhang;
    } catch (error) {
      // Xử lý lỗi và reject với thông báo lỗi
      return rejectWithValue("Failed to fetch nganhang");
    }
  }
);

const nganhangSlice = createSlice({
  name: "sukien",
  initialState,
  reducers: {
    // Các reducers khác nếu cần thiết
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNganhang.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNganhang.fulfilled, (state, action) => {
        state.nganhang = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNganhang.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default nganhangSlice.reducer;
