export function handleChange(e, setUserData, userData) {
  const value = e.target.value;
  setUserData({
    ...userData,
    [e.target.name]: value,
  });
}
