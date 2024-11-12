import { createContext, useContext } from "react";

export const LyricsContext = createContext();

export const useLyricsContext = () => useContext(LyricsContext);
