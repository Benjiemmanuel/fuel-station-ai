import API from "./api";

export async function getTanks() {
  const response = await fetch(`${API}/tanks`);

  return await response.json();
}