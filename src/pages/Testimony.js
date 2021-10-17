import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/Testimony.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <h1>Tu testimonio ha sido enviado correctamente</h1>
              <Link className="btn btn-primary" to="/testimony/new">
                Enviar más
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
