import React, { useCallback } from "react";
import "./about-movie.css";
import MovieForm from "../movie-form";
import Button from "@mui/material/Button";
const AboutMovie = ({
  data,
  isForm,
  setIsForm,
  setFormData,
  setEditId,
  addElement,
}) => {
  const callbackForm = useCallback(() => {
    if (data) {
      setIsForm(true);
      setEditId(data.id);
    }
  }, [setEditId, setIsForm, data]);
  if (isForm) {
    return (
      <MovieForm
        setFormData={setFormData}
        data={data}
        addElement={addElement}
      ></MovieForm>
    );
  }
  if (!data) return;
  const addToClipboard = (e) => {
    const text = e.target.parentElement.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
  };
  return (
    <div className="container">
      <div className="top">
        <div className="copy-id">
          <p>Id: {data.id}</p>
          <div
            className="copy-png"
            style={{ width: "14px", height: "14px" }}
            onClick={(e) => addToClipboard(e)}
          ></div>
        </div>
        <div className="edit-button">
          <Button variant="contained" onClick={callbackForm}>
            Редактировать
          </Button>
        </div>
      </div>
      <div className="info-wrapper">
        <div
          className="image"
          style={{
            backgroundImage: `url(${data.posterUrl}), url("https://www.shutterstock.com/image-vector/no-data-vector-outline-icon-260nw-2082716953.jpg")`,
          }}
        ></div>
        <div className="info">
          <h1 className="title">{data.title}</h1>
          <p className="director">{data.director}</p>
          <div className="genres">
            {data.genres.map((item, index) => {
              return (
                <li key={item} className="genres-item">
                  {item}
                </li>
              );
            })}
          </div>
          <p style={{ marginTop: "80px" }}>Год производства: {data.year}</p>
          <p style={{ fontSize: "18px" }}>
            Описание:
            <br />
            {data.plot}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMovie;
