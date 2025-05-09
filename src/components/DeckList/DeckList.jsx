import { useEffect, useState } from "react";
import { getAllDecks } from "../../services/deckService.js";
import "./DeckList.css";

export default function DeckList() {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllDecks()
      .then((data) => setDecks(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="deck-container">
      {decks.map((deck) => (
        <div key={deck.id} className="deck-card">
          <h3>{deck.name}</h3>
          <p>
            {deck.cards.length} card{deck.cards.length !== 1 ? "s" : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
