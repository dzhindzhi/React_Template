const getResource = async () => {
    const res = await fetch('http://localhost:5000/movies');

    if (!res.ok) {
      throw new Error(`Could not fetchhttp://localhost:5000/movies` +
        `, received ${res.status}`);
    }
    return await res.json();
}
const addResource = async (data) => {
    const res = await fetch('http://localhost:5000/movies',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        //   .then(() => fetchAll()).then(() => {setIsAdd(false)});
        return await res.json();
}
const editResource = async (data, id) => {
    const res = await fetch(`http://localhost:5000/movies/${id}`,{
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        //   .then(() => fetchAll()).then(() => setIsAdd(false)).then(() => setMovieData(formData));
        return await res.json();
}
export {getResource, addResource, editResource};