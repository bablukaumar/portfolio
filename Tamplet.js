import React from "react";
import { Link } from "react-router-dom";
import bituji from "./bituji.jpg";
import img1 from "./img1.avif";
import kbs from "./kbs.jpg";
import img3 from "./img3.avif";
import img4 from "./img4.avif";

function Tamplet() {
  return (
    <>
      <div id="header" className="fixed-top p-2 mb-2 ">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 float-start">
              <h1 id="logo">ENTIRE-XPERT GROUP</h1>
            </div>
            <div className="col-md-8 sty ">
              <nav
                id="menu"
                className=" col-sm-text-center custome-nav float-end"
              >
                <Link
                  to="/"
                  className="text-light fs-3 p-2 text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-light fs-3 p-2 text-decoration-none"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-light fs-3 p-2 text-decoration-none"
                >
                  Contact
                </Link>
                <Link
                  to="/Login"
                  className="text-light fs-3 p-2 text-decoration-none"
                >
                  Login
                </Link>
                <Link
                  to="/product"
                  className="text-light fs-3 p-2 text-decoration-none"
                >
                  Product
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div id="banner" className="container-fluid py-5 ">
        <div>
          <div className="row">
            <div className="col-md-8 col-lg-6 ">
              <div className="banner-title">
                <h1 className="title">Some Heading Goes Here</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  maxime quibusdam consequuntur tenetur corrupti dicta debitis,
                  delectus voluptatibus nihil rerum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-head text-center">Some Heading Goes Here</h2>
          </div>
          <div className="col-md-4">
            <div className="service-box text-center ">
              <li className="fa fa-anchor"></li>
              <h3 className="fs-5">Some Heading</h3>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Libero, unde!
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-box text-center">
              <li className="fa fa-bar-chart"></li>
              <h3 className="fs-5">Some Heading</h3>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aspernatur, illum.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-box box text-center">
              <li className="fa fa-diamond"></li>
              <h3 className="fs-5">Some Heading</h3>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Sunt, molestias.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="tesimonials" className="section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xm-12">
              <h2 className="section-head">Testimonials</h2>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <div className="testimonial">
                <p className="text-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis asperiores recusandae quod voluptas, earum eius.
                </p>
                <img src={bituji} />
                <div className="Founder fs-5 "> (Bitu Raj )</div>
                <div className="company-author">KBS</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial">
                <p className="text-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis asperiores recusandae quod voluptas, earum eius.
                </p>
                <img src={bituji} />
                <div className="Founder">( Bablu Kumar )</div>
                <div className="company-author">KBS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="news" className="container section">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h2 className="section-head text-center text-success">
              Our Developer (Team-Member)
            </h2>
          </div>
          <div className="col-lg-3 col-md-6 card">
            <img src={kbs} className="card-img-top h-100 w-100 " />
            <div className="card-body">
              <p className="card-text">
                He is WebDeveloper and APP Developer using different language.
                HTML,CSS,BOOTSTRAP,REACT,JAVASCRIPT...
              </p>
              <Link>
                <button className="bg-primary text-light rounded">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 card">
            <img src={img1} className="card-img-top h-100 w-100 " />
            <div className="card-body">
              <p className="card-text">
                He is WebDeveloper and APP Developer using different language.
                HTML,CSS,BOOTSTRAP,REACT,JAVASCRIPT...
              </p>
              <Link>
                <button className="bg-primary text-light rounded">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  card">
            <img src={img3} className="card-img-top h-100 w-100 " />
            <div className="card-body">
              <p className="card-text">
                He is WebDeveloper and APP Developer using different language.
                HTML,CSS,BOOTSTRAP,REACT,JAVASCRIPT...
              </p>
              <Link>
                <button className="bg-primary text-light rounded">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  card">
            <img src={img4} className="card-img-top h-100 w-100" />
            <div className="card-body">
              <p className="card-text">
                He is WebDeveloper and APP Developer using different language.
                HTML,CSS,BOOTSTRAP,REACT,JAVASCRIPT...
              </p>
              <Link>
                <button className="bg-primary text-light rounded">
                  Read More
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>

      <div id="footer-sidebar">
        <div className="container">
          <div className="row">
            <div className=" col col-md-4 col-sm-4">
              <div className="footer-widget">
                <h4>About Company</h4>
                <p className="text-light">
                  &pound;&pound; Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Pariatur, alias. Rerum nobis nesciunt
                  cupiditate distinctio.
                </p>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="col col-md-4 col-sm-4">
              <div className="footer-widget">
                <h4>Latest Information</h4>
                <ul className="latest-information m-0 p-0">
                  <li>
                    <Link to="/" className="text-light text-decoration-none">
                      Lorem ipsum dolor sit amet.
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-light text-decoration-none">
                      Lorem ipsum dolor sit amet .
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-light text-decoration-none">
                      Lorem ipsum dolor sit amet.
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-light text-decoration-none">
                      Lorem ipsum dolor sit amet.
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-light text-decoration-none">
                      Lorem ipsum dolor sit amet.
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-light text-decoration-none">
                      Lorem ipsum dolor sit amet.
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-light text-decoration-none">
                      Lorem ipsum dolor sit amet.
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col  col-md-4 col-sm-4">
              <div className="footer-widget">
                <h4>Company Address</h4>
                <address>
                  <b>ENTIRE-EXPERT OF GROUP</b>
                  <br />
                  (Limited Corporation)
                  <br />
                  Noida ................,Delhi (India) 787923
                  <br />
                  Phone Number:(+91) 629-973-9234
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-text-center">
              copyright@2024 Emtire-xpert-group
            </div>
            <div className="col-md-6 col-text-center">
              <ul id="social-icons" className="float-md-end ">
                <li>
                  <Link
                    to="/"
                    className="fa fa-facebook-square text-light fs-2"
                  ></Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="fa fa-twitter-square text-light fs-2"
                  ></Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="fa fa-linkedin-square text-light fs-2"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tamplet;
