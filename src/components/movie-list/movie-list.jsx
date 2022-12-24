import React, {useEffect, useState, useCallback} from "react";
import {Button, List} from 'antd';
import TextField from "@mui/material/TextField";
import Movie from "../movie/movie";
import './movie-list.css';

const MovieList =({data, setAboutMovieData, setIsForm, setAddElement}) => {
    const style = {marginTop: '20px', marginLeft: '20px', border: '1px solid rgba(217, 217, 217, 0.52)', backgroundColor: 'rgba(250, 250, 250, 1)', paddingLeft: '8px', paddingRight:'8px'};
    const [inputText, setInputText] = useState("");
    const [movieData, changeMovieData] = useState();
    const onClick = useCallback(() => {
      setAddElement(true)
      setIsForm(true);
    }, [setAddElement, setIsForm])
    useEffect(() => {
      setAboutMovieData(movieData);
    }, [movieData, setAboutMovieData])
    const callbackForm = useCallback(() => setIsForm(false), [setIsForm]);
    const inputHandler = (e) => {
      let lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    }
    return (
      <div style={style}>
         <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={inputHandler}
            fullWidth
            label="Поиск"
          />
      </div>
        <List>
          <Movie data={data} input ={inputText} changeMovieData = {changeMovieData} setIsForm ={callbackForm} setAddElement ={() => setAddElement}></Movie>
          <div className="bottom-part">
              <p style={{fontSize: '16px'}}>Всего :{data.length} фильмов</p> 
              <Button type="primary" onClick={() => {onClick()}} style={{backgroundColor: 'rgba(255, 221, 45, 1)', color: 'black'}}>+Добавить</Button>
          </div>
        </List>
      </div>
    )
}
export default MovieList;