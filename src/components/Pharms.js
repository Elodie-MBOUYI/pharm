import React, { Component } from "react";
import Slider from "react-slick";
import './Pharms.css'


export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div className="pharms">
          <h2>VOS PHARMACIES</h2>
          <span className="liner"></span>
          <p>Avec Médic'App, s'approvisionner en produits et services pharmaceutiques n'a jamais été aussi simple dans votre ville !</p>
          <Slider {...settings}>
            <div className="step">
              <button href='./' >Pharmacie Centrale</button>
            </div>
            <div className="stepy" >
            <button href='./' >Pharmacie Andréa</button>
            </div>
            <div className="step">
            <button href='./' >Pharmacie Banco</button>
            </div>
            <div className="stepy">
            <button href='./' >Pharmacie RADOCA</button>
            </div>
            <div className="step">
            <button href='./' >Pharmacie Von OKWA</button>
            </div>
            <div className="stepy">
            <button href='./' >Pharmacie Grand Village</button>
            </div>
          </Slider>
        </div>
      );
    }
  }