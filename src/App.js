import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// @ts-ignore
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";
import Typed from "typed.js";
import "./App.css";
import { Modal, Button, Carousel } from "react-bootstrap";
//images import
import logo from "./assets/images/logo2.png";
import pic from "./assets/images/keith.jpg";
import p1Main from "./assets/images/main.PNG";
import p1Cart from "./assets/images/cart.PNG";
import p1SignIn from "./assets/images/signin.PNG";
import p1SignUp from "./assets/images/signup.PNG";
import p1Profile from "./assets/images/profile.PNG";
import p1Checkout from "./assets/images/checkout.PNG";
import project2 from "./assets/images/pf.PNG";
import task from "./assets/images/task.png";
import experience from "./assets/images/experience.png";
import clients from "./assets/images/clients.png";
import popularity from "./assets/images/pop.png";
import olj from "./assets/images/olj.png";

const App = () => {
  useEffect(() => {
    // Create a new Typed instance
    const options = {
      strings: ["Full Stack Web Developer", "Graphics Artist", "Freelancer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };
    const typed = new Typed(".typer", options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  //function to toggle the mobile menu
  const toggleMobileMenu = () => {
    $("#navbarNav").toggleClass("show");
  };
  const closeMobileMenu = () => {
    $("#navbarNav").removeClass("show");
  };

  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleFirstModalClose = () => setShowFirstModal(false);
  const handleFirstModalShow = () => setShowFirstModal(true);

  const handleSecondModalClose = () => setShowSecondModal(false);
  const handleSecondModalShow = () => setShowSecondModal(true);

  //downloadResume
  const downloadResume = () => {
    const pdfFilePath =
      "https://drive.google.com/u/0/uc?id=1cmrsBF7KYSx0T9fu2zaxro3Wz9jp75Cq&export=download";

    const link = document.createElement("a");
    link.href = pdfFilePath;

    link.click();
  };
  //downloadCertificate
  const downloadCert = () => {
    const pdfFilePath =
      "https://drive.google.com/u/0/uc?id=138NVmL7R4GLbashSJrgkYWvuzAYsuCeO&export=download";

    const link = document.createElement("a");
    link.href = pdfFilePath;

    link.click();
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    //scroll event listener
    window.addEventListener('scroll', handleScroll);

    //Clear the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check the scroll position and update the state to show/hide the button
    if (window.scrollY > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container-fluid bg-body-secondary p-0">
        <img
          src="https://img.icons8.com/cute-clipart/64/circled-up.png"
          alt="circled-up"
          width={50}
          height={50}
          className={`rounded-5 ${showButton ? 'show' : 'blocked'}`}
          id="top"
          onClick={scrollToTop}
        />
      {/* Nav */}
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
        id="navBar"
      >
        <a className="navbar-brand" href="#top">
          <img src={logo} alt="Logo" height="50" />
        </a>
        <button
          className="navbar-toggler me-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu} // onClick handler
        >
          <i className="bi bi-list fs-1 fw-bold"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
            <li className="nav-item" onClick={closeMobileMenu}>
              <a className="nav-link px-3 mx-1" href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <a className="nav-link px-3 mx-1" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item " onClick={closeMobileMenu}>
              <a className="nav-link px-3 mx-1" href="#portfolio">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <a className="nav-link px-3 mx-1" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* navEnd */}
      <div
        className="row"
        data-bs-spy="scroll"
        data-bs-target="#navBar"
        data-bs-offset="1"
      >
        {/* home */}
        <section id="home">
          <div className="home-text d-flex justify-content-center">
            <div>
              <h1 className="mt-5 name fw-bolder">I am Keith Banaybanay</h1>
              <h1 className="mb-5 profiles fw-bolder">
                <span className="typer text-primary"></span>
              </h1>
            </div>
          </div>
          <div className="container-fluid main-home"></div>
        </section>
        {/* homeEnd */}
        {/* about */}
        <section id="about" className="mt-5 pt-5">
          <div className="container rounded mt-5 mb-5 container-about bg-white">
            <div className="row">
              <div className="col-xl-6 col-md-12 p-5">
                <div className="row">
                  <div className="col-5 text-center">
                    <img
                      src={pic}
                      alt="ID"
                      className="id rounded w-100 h-auto"
                    />
                  </div>
                  <div className="col-md-7 col-sm-12  fs-5 p-3">
                    <div className="row">
                      <div className="col-3">
                        <p className="fw-bold">Name:</p>
                        <p className="fw-bold">Profile:</p>
                        <p className="fw-bold">Email:</p>
                        <p className="fw-bold">Phone:</p>
                      </div>
                      <div className="col-9">
                        <p>Keith Banaybanay</p>
                        <p>Full Stack Developer</p>
                        <p>Keithbanaybanay@gmail.com</p>
                        <p>09068386313</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <p className="fw-bold fs-5 my-2">SKILLS</p>
                  <p className="fw-bold fs-5 my-2">HTML</p>
                  <div
                    className="progress my-2"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: `${90}%` }}>
                      <b>90%</b>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 my-2">CSS (Bootstrap)</p>
                  <div
                    className="progress my-2"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: `${90}%` }}>
                      <b>90%</b>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 my-2">JAVASCRIPT</p>
                  <div
                    className="progress my-2"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: `${85}%` }}>
                      <b>85%</b>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 my-2">React</p>
                  <div
                    className="progress my-2"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: `${80}%` }}>
                      <b>80%</b>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 my-2">
                    API (Express, Axios, Multer)
                  </p>
                  <div
                    className="progress my-2"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: `${80}%` }}>
                      <b>80%</b>
                    </div>
                  </div>
                  <p className="fw-bold fs-5 my-2">
                    Database (MySQL, Sequelized)
                  </p>
                  <div
                    className="progress my-2"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: `${80}%` }}>
                      <b>80%</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 p-5">
                <p className="border-color fs-2 fw-bold">About me</p>
                <p className="pt-1 fs-5 detail">
                  Enthusiastic and skilled Full Stack Web Developer with a solid
                  foundation in modern web technologies acquired from a 4-month
                  intensive course. Proficient in HTML, CSS, Bootstrap,
                  JavaScript, and React, with hands-on experience in building
                  interactive and responsive web applications. Knowledgeable in
                  integrating APIs with the use of Express, Axios and Sequelized
                  as ORM and utilizing MySQL for efficient database management.
                  Also capable of using collaborative tools such as GitHub.
                  Proven ability to deploy and host web projects using Vercel. I
                  am eager to leverage my education and passion for coding to
                  contribute to dynamic development teams and create exceptional
                  user experiences.
                </p>
                <div className="text-center pt-5 mt-5">
                  <button
                    type="button"
                    className="btn btn-outline-primary mt-5 p-2 fw-bold"
                    onClick={downloadResume}
                  >
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* aboutEnd */}
        {/* portfolio */}
        <section id="portfolio" className="mt-5 pt-5">
          <div className="d-flex justify-content-center align-items-center m-3">
            <div className="flex-column border-color">
              <p className="fs-1 fw-bold text-center">PORTFOLIO</p>
              <p className="fs-4 fw-bold text-center">-- MY PROJECTS --</p>
            </div>
          </div>
          <div className="container-fluid portfolio mt-3 p-0">
            <div className="container-fluid portfolio2">
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="d-flex justify-content-center py-2 image-container">
                      <img
                        src={p1Main}
                        className="w-75 h-100 rounded work-img"
                        alt="Project1"
                        onClick={handleFirstModalShow}
                      />
                      <i
                        className="zoom-icon bi bi-patch-plus"
                        onClick={handleFirstModalShow}
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="d-flex justify-content-center py-2 image-container">
                      <img
                        src={project2}
                        className="w-75 h-100 rounded work-img"
                        alt="Project2"
                        onClick={handleSecondModalShow}
                      />
                      <i
                        className="zoom-icon bi bi-patch-plus"
                        onClick={handleSecondModalShow}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal
            show={showFirstModal}
            onHide={handleFirstModalClose}
            className="modal-lg fade"
          >
            <Modal.Header>
              <Modal.Title className="border-color fw-bolder">
                <a
                  href="https://digital-doers.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click here to view the site"
                  className="text-decoration-none"
                >
                  NCMH Pharmacy
                </a>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel interval={null}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={p1Main}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={p1Cart}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={p1SignIn}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={p1SignUp}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={p1Profile}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={p1Checkout}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <p className="fs-5 p-3 detail">
                This was the website we made for our capstone project during the
                Kodego Full stack web development course. It was made from
                scratch, using React, CSS, Bootstrap as our front-end, and API,
                express, sequelize and multer in the back-end, MySQL in managing
                database.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleFirstModalClose}
                className="bg-primary"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* secondModal */}
          <Modal
            show={showSecondModal}
            onHide={handleSecondModalClose}
            className="modal-lg fade"
          >
            <Modal.Header>
              <Modal.Title className="border-color">PortFolio Site</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel interval={null}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={project2}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={project2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={project2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <p className="fs-5 p-3 detail">
                This is my PortFolio, I made this in compliance with the Mini
                Project 1 in the Kodego Full stack web development course
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleSecondModalClose}
                className="bg-primary"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="container-fluid bg-white p-5">
            <div className="row">
              <div className="col-lg-6 col-md-12 p-2 text-center">
                <div className="d-flex justify-content-evenly align-items-center ">
                  <div className="flex-column p-2 text-center">
                    <img
                      className="border p-2 rounded-5 border-5 border-primary"
                      src={task}
                      alt="taskDone"
                    />
                    <p className="fs-4 fw-bold">95</p>
                    <p className="fs-6 fw-bold">TASKS COMPLETED</p>
                  </div>
                  <div className="flex-column p-2 text-center">
                    <img
                      className="border p-2 rounded-5 border-5 border-primary"
                      src={experience}
                      alt="yrsOfExperience"
                    />
                    <p className="fs-4 fw-bold">0.7</p>
                    <p className="fs-6 fw-bold">YEARS OF EXPERIENCE</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 p-2 text-center">
                <div className="d-flex justify-content-evenly align-items-center ">
                  <div className="flex-column p-2 text-center">
                    <img
                      className="border p-2 rounded-5 border-5 border-primary"
                      src={clients}
                      alt="totalClients"
                    />
                    <p className="fs-4 fw-bold">1</p>
                    <p className="fs-6 fw-bold">TOTAL CLIENTS</p>
                  </div>
                  <div className="flex-column p-2 text-center">
                    <img
                      className="border p-2 rounded-5 border-5 border-primary"
                      src={popularity}
                      alt="popularity"
                    />
                    <p className="fs-4 fw-bold">N/A</p>
                    <p className="fs-6 fw-bold">POPULARITY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="flex-column border-color">
              <p className="fs-4 fw-bold text-center mt-3">
                --MY CERTIFICATES --
              </p>
            </div>
          </div>
          <div className="container-fluid cert mt-3 p-0">
            <div className="container-fluid portfolio2">
              <div className="container py-4">
                <div className="row">
                  <div className="d-flex justify-content-center py-2">
                    <img
                      src="https://drive.google.com/uc?export=view&id=1AjWHdy8HK5zf_wvIqIwDKWZRzZcw8wg7"
                      className="h-100 rounded work-img"
                      width={400}
                      alt="certificate"
                      onClick={downloadCert}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* portfolioEnd */}
        {/* contact */}
        <section id="contact" className="my-5 pt-5">
          <div class="container contact rounded bg-white p-5">
            <div class="row">
              <div class="col-xl-6 col-md-12 pb-5">
                <p class="border-color fs-2 fw-bold mb-4">Contact Me</p>
                <input
                  type="text"
                  placeholder="Name"
                  class="w-100 p-2 mb-4 form-control"
                />
                <input
                  type="email"
                  placeholder="Email"
                  class="w-100 p-2 mb-4 form-control"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  class="w-100 p-2 mb-4 form-control"
                />
                <textarea
                  placeholder="Message"
                  class="w-100 p-2 mb-4 h-25 form-control"
                ></textarea>
                <div class="row">
                  <div class="col text-center">
                    <button
                      type="button"
                      className="btn btn-outline-primary mt-3 fw-bold w-25 p-1 fs-5 fw-bold"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-md-12">
                <p class="border-color fs-2 fw-bold mb-4">Get in Touch</p>
                <p class="fs-5 detail">
                  Thank you for taking the time to explore my portfolio. I'm
                  excited to connect and collaborate with fellow enthusiasts,
                  potential clients, and industry professionals. Whether you
                  have a project in mind, a question about my work, or just want
                  to say hello, I'd love to hear from you. Feel free to reach
                  out via the contact form below or drop me an email. You can
                  also find me on LinkedIn and GitHub for more insights into my
                  projects and coding journey. I usually respond within 3hrs, so
                  you can expect to hear back from me soon. Let's work together
                  to turn ideas into remarkable digital experiences!
                </p>
                <div class="d-flex flex-column pb-3">
                  <div class="my-1">
                    <i class="bi bi-geo-alt fs-6">
                      6200 Dumaguete City, Philippines
                    </i>
                  </div>
                  <div class="my-1">
                    <i class="bi bi-telephone fs-6"> +639068386313</i>
                  </div>
                  <div class="my-1">
                    <i class="bi bi-envelope fs-6">
                      {" "}
                      keithbanaybanay@gmail.com
                    </i>
                  </div>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/Kisu100394/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go to my Facebook profile"
                  >
                    <i class="i bi bi-facebook fs-2 px-2"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/keith-banaybanay-4580a327a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go to my LinkedIn profile"
                  >
                    <i class="i bi bi-linkedin fs-2 px-2"></i>
                  </a>
                  <a
                    href="https://github.com/Keith0309"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go to my GitHub profile"
                  >
                    <i class="bi bi-github fs-2 px-2"></i>
                  </a>
                  <a
                    href="https://github.com/Keith0309"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go to my GitHub profile"
                  >
                    <img
                      className="mx-2 olj"
                      src={olj}
                      alt="olj icon"
                      width={32}
                      height={32}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contactEnd */}
          <div className="container-fluid footer mt-3 p-0">
            <div className="container-fluid portfolio2">
              <div className="container">
                <div className="row">
                  <div className="d-flex justify-content-center align-items-center py-3">
                    <h6 className="m-0 fw-bolder text-white">@2023 | Keith Banaybanay | All Rights Reserved</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;
