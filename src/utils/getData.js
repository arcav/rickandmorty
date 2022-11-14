export async function getData() {
  const response = await fetch(URI);
  const json = await response.json();
}
