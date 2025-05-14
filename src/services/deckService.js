import axios from "axios";
import { API_BASE_URL } from "../constants";

export async function getAllDecks() {
  try {
    const response = await axios.get(`${API_BASE_URL}/decks`);
    return response.data;
  } catch (error) {
    console.log("Error while fetching decks: ", error);
  }
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
