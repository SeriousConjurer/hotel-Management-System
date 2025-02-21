import React from "react";
import { NavBar } from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/carousel1.jpg";
import image2 from "../images/carousel2.jpg";
import image3 from "../images/carousel3.jpg";
import image4 from "../images/royal.jpg";
import image5 from "../images/premium-plus.jpg";
import image6 from "../images/premium.jpg";
import image7 from "../images/single-ac.jpg";
import image9 from "../images/double-non-ac.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    
      <NavBar />
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide carousel-fade "
        data-bs-touch="false"
        data-bs-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* *************************************************************************************** */}
      {/* *************************************************************************************** */}
      {/* *************************************************************************************** */}
      <div>
        <h1 className="text-warning pt-5 mt-5 px-5 py-2 text-center">
          Our Heritage
        </h1>
        <hr width="100px" className="mx-auto" />
        <div className="py-1"></div>
        <p className="text-center col-md-8 m-auto  lead">
          India is a delightful destination to visit, offering a plethora of
          travel experiences. Stretching from the mighty peaks of the Himalayas
          in the north to the tropical beaches in the south, India’s expansive
          borders encompass an incredible range of contrasts, landscapes,
          cultures, and religions. The country is home to many UNESCO World
          Heritage sites, from the 7th wonder of the world Taj Mahal to majestic
          palaces and forts that were built hundreds of years ago, still
          standing upright to narrate the testimony of time of India’s rich
          culture and history. The nation also features vast wilderness areas,
          national parks and nature sanctuaries that are home to exciting
          wildlife, such as elephants, lions, and tigers. Here’s my roundup of
          the 10 most amazing hotels in India, where you can stay in lavish
          luxury.
        </p>
        <div className="py-5"></div>
      </div>
      {/* ****************************************** */}
      {/* ****************************************** */}
      <h1 className="text-center my-5 text-warning"> ACCOMMODATIONS </h1>
      <Slider {...settings} className=" mx-5">
        <div className="card p-3" style={{ width: "18rem" }}>
          <img src={image4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">Royal Suite</h5>
            <p className="lead-md">
              Provides an ingenious blend of luxury and private living, whilst
              featuring the full range of first-class hotel services
            </p>
          </div>
        </div>
        <div className="card p-3" style={{ width: "18rem" }}>
          <img src={image5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">Luxury Suite</h5>
            <p className="lead-md">
              Offers an elegant, stylish and super luxurious interior in the
              best location of the hotel related to view and privacy together.
            </p>
          </div>
        </div>
        <div className="card p-3" style={{ width: "18rem" }}>
          <img src={image6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">Super Delux Suite</h5>
            <p className="lead-md">
              Super Deluxe suite is the first “true suite” in the suite types
              list, because it offers separated living area and sleeping area.
            </p>
          </div>
        </div>
        <div className="card p-3" style={{ width: "18rem" }}>
          <img src={image7} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title ">Delux Suite</h5>
            <p className="lead-md">
              Offers an elegant, stylish and super luxurious interior in the
              best location of the hotel related to view and privacy together.
            </p>
          </div>
        </div>

        <div className="card p-3" style={{ width: "18rem" }}>
          <img src={image9} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">Premier Suite</h5>
            <p className="lead-md">
              Provides an ingenious blend of luxury and private living, whilst
              featuring the full range of first-class hotel services
            </p>
          </div>
        </div>
      </Slider>
      <footer class="pt-5 mt-5">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <Link to="/home" class="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/dashboard" class="nav-link px-2 text-muted">
              DashBoard
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/booking" class="nav-link px-2 text-muted">
              Booking
            </Link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">© Made By - Himanshu Yadav</p>
      </footer>
    </>
  );
};
