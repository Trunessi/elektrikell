import {
  createAction,
  createReducer,
  configureStore,
  createSlice
} from "@reduxjs/toolkit";
import { DEFAULT_ACTIVE_BUTTONS } from "../Head/constants";
import { getDefaultFrom, getDefaultUntil } from "../utils/dates";

const initialState = {
  activePrice: DEFAULT_ACTIVE_BUTTONS,
  activeHour: 1,
  errorMessage: null,
};

const initialDateState = {
  from: getDefaultFrom(),
  until: getDefaultUntil(),
};

export const setActivePrice = createAction("setActivePrice");
export const setActiveHour = createAction("setActiveHour");
export const setErrorMessage = createAction("setErrorMessage");

const main = createReducer(initialState, (builder) => {
  builder
    .addCase(setActivePrice, (state, action) => {
      state.activePrice = action.payload;
    })
    .addCase(setActiveHour, (state, action) => {
      state.activeHour = action.payload;
    })
    .addCase(setErrorMessage, (state, action) => {
      state.errorMessage = action.payload;
    });

});

const dateSlice = createSlice({
  name: "date",
  initialState: initialDateState,
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setUntil: (state, action) => {
      state.until = action.payload;
    },
  },
});

export const { setFrom, setUntil } = dateSlice.actions;

export const store = configureStore({
  reducer: { main, date: dateSlice.reducer },
});
