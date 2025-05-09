const API_URL = "http://localhost:5130";

export async function getAllDecks() {
  const response = await fetch(`${API_URL}/decks`);

  if (!response.ok) throw new Error("Failed to fetch decks");
  return response.json();
}
