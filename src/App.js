import { useState } from "react";
import { LyricsContext } from "./contexts/LyricsContext";
import Form from "./components/Form/Form";
import Lyrics from "./components/Lyrics/Lyrics";
import "./index.css";

function App() {
  const [lyrics, setLyrics] = useState("");
  return (
    <LyricsContext.Provider value={{ lyrics }}>
      <Form setLyrics={setLyrics} />
      {lyrics.length > 5 && <Lyrics />}
    </LyricsContext.Provider>
  );
}

export default App;
