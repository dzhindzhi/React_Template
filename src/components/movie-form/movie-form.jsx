import React, { useCallback, useEffect, useState } from "react";
import "./movie-form.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const MovieForm = ({ setFormData, data, addElement }) => {
  const [formData, changeFormData] = useState({});
  useEffect(() => {
    if (Object.keys(formData).length !== 0) {
      formData.genres = ["No Data"];
      setFormData(formData);
    }
  }, [formData, setFormData]);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const allValues = e.target.querySelectorAll("input");
    allValues.forEach((item) => {
      let value = item.value;
      const key = item.id;
      if (key === "actors") {
        value = value.split(";").join(",");
      }
      const newObject = {};
      newObject[key] = value;
      changeFormData((formData) => ({ ...formData, ...newObject }));
    });
  }, []);

  return (
    <div className="form-wrapper">
      <h1>Редактирование / Создание</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">
            <h3>Название фильма</h3>
          </Label>
          <Input
            required
            value={!addElement && data.title ? data.title : null}
            type="text"
            name="title"
            id="title"
            placeholder="Введите название фильма"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="year">
            <h3>Год выпуска</h3>
          </Label>
          <Input
            required
            type="text"
            value={!addElement && data.year ? data.year : null}
            name="year"
            id="year"
            placeholder="Введите год выпуска"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="plot">
            <h3>Описание</h3>
          </Label>
          <Input
            required
            type="text"
            name="plot"
            value={!addElement && data.plot ? data.plot : null}
            id="plot"
            placeholder="Введите..."
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="posterUrl">
            <h3>Введите ссылку на обложку</h3>
          </Label>
          <Input
            type="text"
            name="posterUrl"
            id="posterUrl"
            value={!addElement && data.posterUrl ? data.posterUrl : null}
            placeholder="Введите..."
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="actors">
            <h3>Укажите список актеров</h3>
          </Label>
          <Input
            required
            type="actors"
            name="actors"
            value={
              !addElement && data.actors
                ? data.actors.split(",").join(";")
                : null
            }
            id="actors"
            placeholder="Через ;"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="director">
            <h3>Режиссер</h3>
          </Label>
          <Input
            required
            type="director"
            name="director"
            value={!addElement && data.director ? data.director : null}
            id="director"
            placeholder="Введите..."
          ></Input>
        </FormGroup>
        <Button
          style={{
            backgroundColor: "rgba(255, 221, 45, 1)",
            color: "rgba(0, 0, 0, 1)",
            border: "none",
          }}
        >
          Сохранить
        </Button>
      </Form>
    </div>
  );
};

export default MovieForm;
