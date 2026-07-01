import API from "./api";

export async function getSales() {
  const response = await fetch(`${API}/sales`);

  return await response.json();
}

export async function createSale(sale) {
  const response = await fetch(`${API}/sales`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sale),
  });

  return await response.json();
}