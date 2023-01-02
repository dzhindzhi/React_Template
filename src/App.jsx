import React, { useState, useEffect } from "react";
import { getResource, addResource, editResource } from "./services/gotService";
import "./App.css";
import Header from "./components/header";
import MovieList from "./components/movie-list";
import AboutMovie from "./components/about-movie";

const App = () => {
  const [data, addData] = useState([]);
  const [aboutMovieData, setAboutMovieData] = useState();
  const [isForm, setIsForm] = useState(false);
  const [formData, setFormData] = useState();
  const [editId, setEditId] = useState();
  const [addElement, setAddElement] = useState(false);
  useEffect(() => {
    getResource().then((data) => addData(data));
  }, []);
  useEffect(() => {
    if (formData) {
      if (!addElement) {
        formData.id = editId;
        editResource(formData, editId).then(getResource).then((data) => {
            addData(data);
            setIsForm(false);
        })
      } else {
        formData.id = data.length + 1;
        addResource(formData).then(getResource).then((data) => {
            console.log(data);
            addData(data);
            setIsForm(false);
            setAddElement(false);
        })
      }
    }
  }, [formData]);
  if (typeof data !== "undefined") {
    return (
      <>
        <Header></Header>
        <div className="films-wrapper">
          <MovieList
            data={data}
            setAboutMovieData={setAboutMovieData}
            setIsForm={setIsForm}
            setAddElement={setAddElement}
            addElement={addElement}
          ></MovieList>
          <AboutMovie
            data={aboutMovieData}
            isForm={isForm}
            setIsForm={setIsForm}
            setFormData={setFormData}
            setEditId={setEditId}
            addElement ={addElement}
          ></AboutMovie>
          ;
        </div>
      </>
    );
  } else return null;
};

export default App;
