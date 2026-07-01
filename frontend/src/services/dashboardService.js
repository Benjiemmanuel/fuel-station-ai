import API from "./api";

export async function getDashboardStats() {
  const response = await fetch(`${API}/dashboard/stats`);

  return await response.json();
}