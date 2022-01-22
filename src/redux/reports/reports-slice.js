import { createSlice } from '@reduxjs/toolkit';
import reportsOperations from './reports-operations';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reportsSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [reportsOperations.getCategoryReports.fulfilled]: (
      state,
      { payload },
    ) => {},
    [reportsOperations.getCategoryReports.pending]: ({ isLoading }, _) => {
      isLoading = true;
    },
    [reportsOperations.getCategoryReports.rejected]: (
      { isLoading, error },
      _,
    ) => {
      isLoading = false;
      error = 'error';
    },

    [reportsOperations.getSubcategoryReports.fulfilled]: (
      state,
      { payload },
    ) => {},
    [reportsOperations.getSubcategoryReports.pending]: ({ isLoading }, _) => {
      isLoading = true;
    },
    [reportsOperations.getSubcategoryReports.rejected]: (
      { isLoading, error },
      _,
    ) => {
      isLoading = false;
      error = 'error';
    },

    [reportsOperations.getPeriodReports.fulfilled]: (state, { payload }) => {},
    [reportsOperations.getPeriodReports.pending]: ({ isLoading, error }, _) => {
      isLoading = true;
    },
    [reportsOperations.getPeriodReports.rejected]: (
      { isLoading, error },
      _,
    ) => {
      isLoading = false;
      error = 'error';
    },
  },
});

export default reportsSlice.reducer;
