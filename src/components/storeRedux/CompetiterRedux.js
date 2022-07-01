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
      // Eğer findIndex -1'den büyük bir sayı dönmez ise böyle bir eleman yok demektir. Yoksa işlem yapmadan devam ederiz.
      // Aksi halde o index deki data nın vote'unu 1 arttırırız.
      if (competiterIndex > -1) {
        let array = [...state.competiters];
        array[competiterIndex].vote += 1;
        state.competiters = array.sort(
          (firstCompetiter, secondCompetiter) =>
            secondCompetiter.vote - firstCompetiter.vote
        );
      }
    },
  },
});

export const { setCompetiters, setVote } = competitersRedux.actions;

export default competitersRedux.reducer;
