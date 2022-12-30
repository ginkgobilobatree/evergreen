export async function saveUserData(userData) {
    const url = "http://localhost:8000/storeUserData";
    const data = {userData};
    console.log(userData)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      result.saved ? alert("gespeichert") : alert("irgendwas lief schief, sorry.");
    //   console.log(result) //das gesamte object kommt noch mal zurück
      return result; 
}
