import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>stopka</h2>
      <Route
        path="/"
        exact
        render={(props) => (
          <p>
            Jesteś na <span>stronie głównej</span>
          </p>
        )}
      />
      <Route
        path="/:page"
        exact
        render={(props) => (
          <>
            <p>
              Jesteś na <span>stronie {props.match.params.page}</span>
            </p>
            <p>
              Jesteś na <span>stronie {props.match.url}</span>
            </p>
            <p>
              {" "}
              Jesteś na <span>stronie {props.match.path}</span>
            </p>
          </>
        )}
      />
      <Route
        path="/:page/:idProduct"
        exact
        render={(props) => (
          <>
            <p>
              Jesteś na <span>stronie {props.match.params.idProduct}</span>
            </p>
            <p>
              Jesteś na <span>stronie {props.match.url}</span>
            </p>
            <p>
              {" "}
              Jesteś na <span>stronie {props.match.path}</span>
            </p>
          </>
        )}
      />
    </div>
  );
};

export default Footer;
