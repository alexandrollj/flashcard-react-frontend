const API_URL = "http://localhost:5130";

export async function getAllDecks() {
  const response = await fetch(`${API_URL}/decks`);

  if (!response.ok) throw new Error("Failed to fetch decks");
  return response.json();
}

export async function getDeckById(deckId) {
  const response = await fetch(`${API_URL}/decks/${deckId}`);

  if (!response.ok) throw new Error("Failed to fetch the requested deck");

  return response.json();
}

export async function createDeck(deckData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deckData),
    });
    if (!response.ok) throw new Error("Failed to create deck");

    const newDeck = await response.json();
    return newDeck;
  } catch (error) {
    console.error("Error creating deck:", error);
    throw error;
  }
}
