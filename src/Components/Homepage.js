import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border" >
              <img
                className="profile-img"
                src="images/sujayDP.jpg"
                alt="Ismail"
              />
            </div>
            <div className="banner-text" >
            <h1>Sujay S. Jirapure </h1>
            <h3>Full Stack Devloper (MERN)</h3>
              <p>
                HTML | CSS | BOOTSTRAP | JAVASCRIPT | REACTJS | NODE | REST API | EXPRESS | MONGODB
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
