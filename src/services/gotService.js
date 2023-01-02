const getResource = async () => {
  try {
    const res = await fetch("http://localhost:5000/movies");
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
const addResource = async (data) => {
  try {
    const res = await fetch("http://localhost:5000/movies", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
const editResource = async (data, id) => {
  try {
    const res = await fetch(`http://localhost:5000/movies/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
export { getResource, addResource, editResource };
