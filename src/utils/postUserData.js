export async function postUserData(setResult) {
  const url =
    "http://localhost:8000/getData";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(await response.json())
}
