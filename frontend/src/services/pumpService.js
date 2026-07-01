import API from "./api";

export async function getPumps() {
  const response = await fetch(`${API}/pumps`);

  return await response.json();
}

export async function createPump(pump) {
  const response = await fetch(`${API}/pumps`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pump),
  });

  return await response.json();
}