export default async function getPastOrders(page){
  const response = await fetch(`api/past-orders?pages=${page}`);
  const data = response.json();
  return data;
}