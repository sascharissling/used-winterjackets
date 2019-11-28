export async function getJackets() {
  const response = await fetch(
    "/Users/sascharissling/neuefische/dbs/winter-jackets.json"
  );
  const jackets = await response.json();
  console.log(jackets);
  return jackets;
}
