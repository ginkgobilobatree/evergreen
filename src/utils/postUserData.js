export async function postUserData(userData, setResult) {
  const url = "http://localhost:8000/getRiskValues";
  const data = {
    goal: userData.goal.split(",")[0],
    age: userData.age.split(",")[0],
    duration: userData.duration.split(",")[0],
    behaviour: userData.behaviour.split(",")[0],
    selfTest: Number(userData.selfTest),
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  setResult(result);
  return result;
}
