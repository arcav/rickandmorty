const URI = "https://rickandmortyapi.com/api/character";

export async function getData() {
  const response = await fetch(URI);
  const json = await response.json();
  return json;
}
