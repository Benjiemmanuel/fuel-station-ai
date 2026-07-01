import API from "./api";

export async function predictFuel() {
  const response = await fetch(`${API}/ai/predict`);

  return await response.json();
}