export function handleChange(e, setUserData, userData) {
  const value = e.target.value.split(",")[0];
  setUserData({
    ...userData,
    [e.target.name]: value,
  });
}
