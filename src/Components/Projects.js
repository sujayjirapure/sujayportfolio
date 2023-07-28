import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.chatApplication = () => {
      window.location.assign(
        "https://github.com/sujayjirapure/Flipkart-Clone---React-Project---05dkojyayxba"
      );
    };
    this.calculator = () => {
      window.location.assign(
        "https://github.com/ismail5g/Calculator-Using-ReactJS"
      );
    };
    this.portfolio = () => {
      window.location.assign("https://github.com/sujayjirapure/sujayportfolio");
    };
    this.portfoliolive = () => {
      window.location.assign("https://devismail.netlify.app/");
    };
    this.ecommerce = () => {
      window.location.assign("https://github.com/sujayjirapure/passanger-data");
    };
    this.leavemangement = () => {
      window.location.assign("https://github.com/sujayjirapure/weather-app");
    };
    this.crudapplication = () => {
      window.location.assign(
        "https://github.com/ismail5g/BookListCrud_MVC-Asp.Net-Core"
      );
    };
    this.facebook = () => {
      window.location.assign(
        "https://github.com/ismail5g/Facebook-Education-Perpose"
      );
    };
    this.subsapp = () => {
      window.location.assign(
        "https://github.com/sujayjirapure/subscription-App.git"
      );
    };
    this.cardpro = () => {
      window.location.assign(
        "https://github.com/sujayjirapure/card-section.git"
      );
    };
    this.testimonial = () => {
      window.location.assign(
        "https://github.com/sujayjirapure/Testimonials-grid-section.git"
      );
    };
    
    this.toggleCategories = () => {
      if (this.state.activeTab === 2) {
        return (

          <div className="projects-grid">
            {/* Chat-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/flipkart.png) center / cover",
                }}
              >
              
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                <h3>  Flipkart Clone</h3>
                This is a clone of flipkart ecommerce website
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.chatApplication.bind(this)}
                >
                <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <a href="https://loquacious-valkyrie-388288.netlify.app">
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Calculator */}
            {/* <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/calculator.png) center / cover",
                }}
              >
                Standard Calculator
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a first REACT app i developed. The noobie calculator
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.calculator.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card> */}
            {/* Portfolio */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/portfolio2.png) center / cover",
                }}
              >
              
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                <h3>Portfolio</h3>
                This portfolio designed by REACT JS
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.portfolio.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/* Ecom-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/passanger.png) center / cover",
                }}
              >
              
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                <h3>Passanger Data Manager</h3>
                It work on API calls and in this project CURD oprations where used.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.ecommerce.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <a href="https://sujayjirapure.github.io/passanger-data/">
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Leave-management */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/weatherapp.png) center / cover",
                }}
              >
                
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                <h3>Wheather App</h3>
                This is dynamic Leave management system developed for an
                corporate organization.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.leavemangement.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Ecom-Application */}
            {/* <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/crud-app.png) center / cover",
                }}
              >
                CRUD Application
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a CRUD Application developed on a running course from
                UDEMY.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.crudapplication.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card> */}
          </div>
        );
      }
      if (this.state.activeTab === 0) {
        return (
          <div>
            {/* Store-Procedure */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/subsapp.png) center / cover",
                }}
              >
                
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                <h3>Subscription app</h3>
                This is simple component and it is reponsive.
              </CardText>
              <CardActions border>
              <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.subsapp.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <a href="https://sujayjirapure.github.io/subscription-App/">
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* html 2 */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/cardpro.png) center / cover",
                }}
              >
                
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                <h3>Card section</h3>
                This is simple component and it is reponsive.
              </CardText>
              <CardActions border>
              <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.cardpro.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <a href="https://sujayjirapure.github.io/card-section/">
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* html3 */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/testmonial.png) center / cover",
                }}
              >
                
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                <h3>Testimonial card section</h3>
                This is simple component and it is reponsive.
              </CardText>
              <CardActions border>
              <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.testimonial.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <a href="https://sujayjirapure.github.io/Testimonials-grid-section/">
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else {
        return (
          <div>
            {/* facebook */}
            {/* <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/facebook.jpg) center / cover",
                }}
              >
                Facebook
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This facebook developed on a semester for educational purpose
                only.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.facebook.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card> */}
          </div>
        );
      }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          
          <Tab>HTML & CSS</Tab>    
          <Tab>HTML,CSS & JS</Tab>
          <Tab>React JS</Tab>
          <Tab>Full stack</Tab>
          
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;


  