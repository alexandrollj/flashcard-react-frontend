import React, { useEffect, useState } from "react";
import DeckList from "./components/DeckList/DeckList";
import { getAllDecks, deleteDeck } from "./services/deckService";

function App() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    getAllDecks()
      .then((data) => setDecks(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (deckId) => {
    setDecks((prev) => prev.filter((deck) => deck.id !== deckId));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-grey-800">
        Flashcard Decks
      </h1>
      <DeckList decks={decks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
