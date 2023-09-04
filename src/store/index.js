import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slices/PokemonTrainer.slice";

export default configureStore({
    reducer: {
        trainer: trainerSlice
    }
})