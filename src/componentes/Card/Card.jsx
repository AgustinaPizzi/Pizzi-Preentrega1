const Card = () => {
  return (
    <div className="card">
      <img src="../media/img/hp.jpg" class="card-img-top" alt="hp" />
      <div class="card-body">
        <h1 className="card-title">Colección Deluxe Harry Potter</h1>
        <p className="card-text">
          Tamaño: Bolsillo. Hazte con la colección completa de los libros de
          Harry Potter, la saga más mágica de todos los tiempos. Salamandra
          presenta la saga de «Harry Potter» en una edición renovada y única en
          un estuche con las siete novelas. Contando con el rediseño de cubierta
          a cargo del galardonado ilustrador Jonny Duddle, estos libros son una
          nueva propuesta, muy atractiva, para acercar Harry Potter a todos los
          públicos: desde coleccionistas hasta los lectores más jóvenes.
        </p>
        <p className="precio">$20.000</p>
        <button type="button" className="btncomprar">
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default Card;
