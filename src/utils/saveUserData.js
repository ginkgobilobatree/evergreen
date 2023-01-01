export async function saveUserData(userData) {
  const url = "http://localhost:8000/storeUserData";
  const data = { userData };
  console.log(userData);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result.timestamp)
  result.saved
    ? alert(`Gespeichert.\nDeine Speichernummer lautet:\n${result.timestamp}`)
    : alert("irgendwas lief schief, sorry.");
  return result;
}
