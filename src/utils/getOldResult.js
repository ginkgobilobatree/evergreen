export async function getOldResult(uniqueURL, setResult) {
    const url = `http://localhost:8000/getOldResult/${uniqueURL}`
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
    })
    const result = await response.json();
    console.log(result)
    setResult(result);
    return result;
}