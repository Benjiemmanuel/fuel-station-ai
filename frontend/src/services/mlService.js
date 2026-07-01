import API from "./api";

export async function forecastInventory() {
  const response = await fetch(`${API}/ml/forecast`);

  return await response.json();
}