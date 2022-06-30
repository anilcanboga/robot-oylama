import { configureStore } from "@reduxjs/toolkit";
import CompetiterRedux from "./CompetiterRedux";

export const store = configureStore({
  reducer: {
    competiter: CompetiterRedux,
  },
});
