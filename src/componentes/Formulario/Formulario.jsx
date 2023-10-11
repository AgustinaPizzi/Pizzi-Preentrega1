const Formulario = () => {
  return (
    <div>
      <form action="">
        <input type="text" className="formu" placeholder="Ingresa tu nombre" />
        <input type="email" className="formu" placeholder="Ingresa tu email" />
      </form>
      <button type="button" className="btnenviar">
        ENVIAR
      </button>
    </div>
  );
};

export default Formulario;
