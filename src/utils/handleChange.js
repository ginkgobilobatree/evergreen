export function handleChange(e, setUserData, userData) {
  //derselbe Handler für viele Inputs
  const value = e.target.value;
  setUserData({
    ...userData,
    [e.target.name]: value,
  });
}
