import { createSlice } from "@reduxjs/toolkit";

export const competitersRedux = createSlice({
  name: "competiter",
  initialState: {
    competiters: [],
  },

  reducers: {
    setCompetiters: (state, action) => {
      state.competiters = action.payload;
    },

    setVote: (state, action) => {
      let competiterIndex = state.competiters.findIndex(
        (data) => data.id === action.payload
      );
      let array = [...state.competiters];
      array[competiterIndex].vote += 1;
      state.competiters = array.sort(
        (firstCompetiter, secondCompetiter) =>
          secondCompetiter.vote - firstCompetiter.vote
      );
    },
  },
});

export const { setCompetiters, setVote } = competitersRedux.actions;

export default competitersRedux.reducer;
