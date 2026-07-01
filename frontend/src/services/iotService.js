import API from "./api";

export async function getLivePumpData() {
  const response = await fetch(`${API}/iot/live`);

  return await response.json();
}