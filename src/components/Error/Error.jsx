import './Error.sass';

function Error() {
  return (
    <div className="main">
      <div className="errorMessage">
        <h2>404</h2>
        <h3>Oups! La pagina que estás queriendo ver no existe.</h3>
        <a href="/">Volver al inicio</a>
      </div>
    </div>
  );
}

export default Error;
