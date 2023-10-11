import React from "react";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import Card from "./componentes/Card/Card";
import Formulario from "./componentes/Formulario/Formulario";
import Titulo from "./componentes/Titulo/Titulo";
import TituloForm from "./componentes/TituloForm/TituloForm";

function App() {
  return (
    <>
      <NavBar />
      <Titulo titulo="LIBRERIA" 
      subTitulo="Encontra el libro que necesitas" />
      <Titulo titulo="Los elegidos del mes" 
      subTitulo="Categoria:fantasia" />
      <Card />
      <TituloForm />
      <Formulario />
    </>
  );
}

export default App;
