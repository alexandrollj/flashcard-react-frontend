import React, { useEffect, useState } from "react";
import DeckList from "./components/DeckList/DeckList";
import { getAllDecks } from "./services/deckService";

function App() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    getAllDecks()
      .then((data) => setDecks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-800">
        Flashcard Decks
      </h1>
      {/* <DeckList decks={decks} /> */}
    </div>
  );
}

export default App;
