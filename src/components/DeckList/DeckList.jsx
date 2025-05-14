export default function DeckList({ decks }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {decks.map((deck) => (
        <div
          key={deck.id}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-700">{deck.name}</h2>
            <p className="text-xs text-gray-400 mt-2">
              Created: {new Date(deck.createdDate).toLocaleDateString()}
            </p>{" "}
            <p className="text-xs text-gray-400 mt-2">
              Last Update: {new Date(deck.lastUpdateDate).toLocaleDateString()}
            </p>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="text sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View
            </button>
            <button className="text sm bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Edit
            </button>
            <button className="text sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
