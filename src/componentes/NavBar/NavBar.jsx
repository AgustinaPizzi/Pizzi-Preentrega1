import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <a href="">
        <img
          src="../media/img/logo.png"
          alt="Icono Ec"
          width="100px"
          height="100px"
        />
      </a>
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li class="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#">
                Envio Express
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#">
                Costos Despacho
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#">
                ¿Querés vender tus libros?
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
