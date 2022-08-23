import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components/";
//import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Kimetsu No Yaiba"]);

  const onaddCategory = (value) => {
    if (categories.includes(value)) return; //acá pregunto si existe lo que estoy mandando
    setCategories([value, ...categories]);
  };
  //otra forma
  //setCategories(cat => [...cat, 'Boku no Hero Academia'])

  //}

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory
        //metodo 1 - setCategories={setCategories}
        //metodo 2
        onNewCategory={(value) => onaddCategory(value)} //esto funcionaria igual sin los 2 value
      />

      {/* Listado de Gif */}

      {/* esta resumido ya que este es un único return */}
      {categories.map((category) => (
        <GifGrid key={category} 
        category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
