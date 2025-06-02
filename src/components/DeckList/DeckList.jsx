import { deleteDeck } from "../../services/deckService";

export default function DeckList({ decks, onDelete }) {
  const handleDelete = async (deckId) => {
    if (confirm("Are you sure you want to delete this deck?")) {
      await deleteDeck(deckId);
      onDelete(deckId);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {decks.map((deck) => (
        <div
          key={deck.id}
          className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {deck.name}
              </h2>
              <p className="text-sm text-gray-500">
                Created: {new Date(deck.createdDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                Last Updated:{" "}
                {new Date(deck.lastUpdateDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="mt-4 flex space-x-2">
            <button
              className="text-sm text-red-600 hover:underline"
              onClick={() => handleDelete(deck.id)}
            >
              Delete
            </button>
            <button className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
              Edit
            </button>
            <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
