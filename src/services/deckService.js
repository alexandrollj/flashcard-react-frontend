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
  const response = await axios.get(`${API_BASE_URL}/decks/${deckId}`);
  return response.data;
}

export async function createDeck(deckData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/decks`, deckData);
    return response.data;
  } catch (error) {
    console.error("Error creating deck:", error);
    throw error;
  }
}

export async function deleteDeck(deckId) {
  try {
    const deletedDeck = await axios.delete(`${API_BASE_URL}/decks/${deckId}`);
  } catch (error) {
    console.error("Failed to delete deck: ", error);
    throw error;
  }
}
