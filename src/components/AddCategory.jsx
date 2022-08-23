import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //en la forma 1 iría {setCategories}
  //desestructuracion del props
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    // forma 1 -setCategories((categories) => [inputValue, ...categories]); //desestructura el categories y agrega el inputValue

    setInputValue(""); //limpio el input
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
