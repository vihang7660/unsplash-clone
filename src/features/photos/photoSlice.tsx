import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface InitialState {
  photos: any[];
  isLoading: boolean;
  page: number;
  query: string;
  newPicturesAvailable: boolean;
}

const initialState: InitialState = {
  photos: [],
  isLoading: false,
  page: 1,
  query: "",
  newPicturesAvailable: false,
};

let url = "";

const clientID = "?client_id=jwJyoIQ8mlun1u84G9EV-jMin00keARLfRfYahdAmcY";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

export const fetchPhotos = createAsyncThunk(
  "users/fetchPhotos",
  async (_, { getState }) => {
    const state: any = getState();
    const { page, query, photos } = state.users;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (query && page === 1) {
      return data.results;
    } else if (query) {
      return [...photos, ...data.results];
    } else {
      return [...photos, ...data];
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
    },
    setNewImagesTrue(state) {
      state.newPicturesAvailable = true;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newPicturesAvailable = false;
        state.photos = action.payload;
      });
  },
});

export const { incrementPage, setNewImagesTrue, setQuery, resetPage } =
  userSlice.actions;
export default userSlice.reducer;
