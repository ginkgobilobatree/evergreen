export async function postUserData() {
  const url =
    "https://sandbox.onboarding-api.evergreen.de/api/#/Risk%20Rate/RiskRateController_calcRiskRate";
  const data = {
    goal: "Retirement",
    age: "Below56",
    selfTest: 5,
    duration: "Below5",
    behaviour: "KeepCool",
  };
  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    
  });
  console.log(await response.json());
}
