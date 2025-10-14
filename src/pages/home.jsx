import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';


const Home = () => {
  useEffect(() => {
    // FontAwesome
    const fa = document.createElement("script");
    fa.src = "https://use.fontawesome.com/releases/v6.3.0/js/all.js";
    fa.crossOrigin = "anonymous";
    document.body.appendChild(fa);

    // Bootstrap JS
    const bootstrap = document.createElement("script");
    bootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
    bootstrap.async = true;
    document.body.appendChild(bootstrap);

    // StartBootstrap Forms
    const sbForms = document.createElement("script");
    sbForms.src = "https://cdn.startbootstrap.com/sb-forms-latest.js";
    sbForms.async = true;
    document.body.appendChild(sbForms);

    return () => {
      document.body.removeChild(fa);
      document.body.removeChild(bootstrap);
      document.body.removeChild(sbForms);
    };
  }, []);

  return (
    <div id="page-top">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"         rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Solicitar Orden</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">Nosotros</a></li>
              <li className="nav-item"><a className="nav-link" href="#team">Nuestro Equipo</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contáctanos</a></li>
              <li className="nav-item"><a className="nav-link" href="/login">Iniciar Sesión</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Bienvenidos a Dream Cars</div>
          <div className="masthead-heading text-uppercase">Tu taller Mecánico de Confianza</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">Solicita tu servicio</a>
        </div>
      </header>

      {/* Servicios */}
      <section className="page-section bg-light text-dark" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Servicios</h2>
            <h3 className="section-subheading text-muted">Lo que ofrecemos a nuestros clientes</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Mantenimiento Preventivo</h4>
              <p className="text-muted">Revisiones periódicas, cambios de aceite y filtros para alargar la vida de tu auto.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Sistema Electrónico</h4>
              <p className="text-muted">Diagnóstico y reparación de batería, alternador y sistema de luces.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Reparaciones Generales</h4>
              <p className="text-muted">Soluciones rápidas y efectivas para fallas mecánicas y de motor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Trabajos Realizados</h2>
            <h3 className="section-subheading text-muted">Estos son nuestros trabajos realizados</h3>
          </div>
          <div className="row">
            {/* Portfolio Items */}
            {[
              { id: 1, img: "img1.png", title: "Pintura Completa", subtitle: "Pintura 100% de calidad", modal: "portfolioModal1" },
              { id: 2, img: "img2.png", title: "Cambio de motor", subtitle: "Cambio de motor con total seguridad", modal: "portfolioModal2" },
              { id: 3, img: "img3.png", title: "Cambio de neumáticos", subtitle: "Cambios 100% efectivos", modal: "portfolioModal3" },
              { id: 4, img: "img4.png", title: "Cambio de carrocería", subtitle: "Cambios de carrocería 100% efectivos", modal: "portfolioModal4" },
              { id: 5, img: "img5.png", title: "Revisión de un Sistema Eléctrico", subtitle: "Revisiones de Sistema Eléctrico 100% confiables", modal: "portfolioModal5" },
              { id: 6, img: "img6.png", title: "Limpieza de coches", subtitle: "Limpieza de coches 100% efectivas", modal: "portfolioModal6" },
            ].map((item, idx) => (
              <div key={item.id} className={`col-lg-4 col-sm-6 mb-4${idx === 3 ? " mb-lg-0" : ""}${idx === 4 ? " mb-sm-0" : ""}`}>
                <div className="portfolio-item">
                  <a className="portfolio-link" data-bs-toggle="modal" href={`#${item.modal}`}>
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={`/assets/img/portfolio/${item.img}`} alt="..." />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{item.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{item.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section className="page-section bg-light text-dark" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Nosotros</h2>
            <h3 className="section-subheading text-muted">
              Somos el taller mecánico “Dream Cars”, comprometidos con brindar una atención de calidad a nuestros clientes. Nos enfocamos en una recepción cordial, diagnósticos precisos, reparaciones eficientes y procesos de facturación transparentes. Nuestro objetivo es optimizar los tiempos de atención, garantizar la trazabilidad de los repuestos y lograr la total satisfacción del cliente.
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/assets/img/about/1.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2024 – Primeros Usos Académicos</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">El taller se convirtió en la base para otros cursos: desde bases de datos hasta modelamiento y análisis de sistemas. Cada ciclo académico fue aportando nuevas mejoras y funcionalidades al proyecto.</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/assets/img/about/2.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2025 – Evolución en Diseño y Arquitectura</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Con el curso de Diseño y Arquitectura de Software, el proyecto se consolidó con diagramas, modelos, casos de uso y una estructura sólida para un sistema real. En esta etapa, Dream Cars pasó de ser una idea a convertirse en un proyecto integral.</p></div>
              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/assets/img/about/3.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2025 – Etapa de Calidad y Pruebas</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Actualmente, en el curso de Calidad y Pruebas de Software, el taller está evolucionando hacia un software completo, incluyendo frontend, backend y funcionalidades prácticas como órdenes de servicio, inventario y facturación digital.</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/assets/img/about/4.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Futuro – Plataforma Real</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">El objetivo es que Dream Cars se convierta en una solución digital escalable para talleres mecánicos, aplicando la experiencia ganada en cada curso y buscando impactar en la vida real con un sistema confiable y útil.</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Sé parte <br />
                  de nuestra <br />
                  Historia!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Equipo */}
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Nuestro Equipo</h2>
            <h3 className="section-subheading text-muted">Conoce un poco más de nuestro equipo</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/assets/img/team/image1.png" alt="..." />
                <h4>Gabriel Pérez</h4>
                <p className="text-muted">Excelente mecánico con un certificado Instituto Nacional para la Excelencia en el Servicio Automotriz (ASE)</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/assets/img/team/imag2.png" alt="..." />
                <h4>Paola Diaz </h4>
                <p className="text-muted">Una recepcionista con 5 años de experiencia en diversos centros automovilísticos</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="/assets/img/team/iamge3.png" alt="..." />
                <h4>Luis Villanueva </h4>
                <p className="text-muted">Un administrador con experiencia en la Universidad de Harvard</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Nuestro equipo de trabajo transmite alta confianza y calidad para nuestros clientes</p></div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <div className="py-5 page-section bg-light text-dark">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="/assets/img/logos/BMW.png" alt="..." aria-label="Nissanm" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="/assets/img/logos/Toyota.png" alt="..." aria-label="Toyota" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="/assets/img/logos/mercedes.png" alt="..." aria-label="Mercedes Benz" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="/assets/img/logos/chevrolet.png" alt="..." aria-label="chevrolet" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Contacto */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contáctenos</h2>
          </div>
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Tu nombre" data-sb-validations="required" />
                  <div className="invalid-feedback" data-sb-feedback="name:required">Complete este campo por favor</div>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Tu E-Mail" data-sb-validations="required,email" />
                  <div className="invalid-feedback" data-sb-feedback="email:required">Complete este campo por favor</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" type="tel" placeholder="Tu teléfono" data-sb-validations="required" />
                  <div className="invalid-feedback" data-sb-feedback="phone:required">Complete este campo por favor</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea className="form-control" id="message" placeholder="Mensaje" data-sb-validations="required"></textarea>
                  <div className="invalid-feedback" data-sb-feedback="message:required">Complete sus campo por favor.</div>
                </div>
              </div>
            </div>
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
            <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Enviar Mensaje</button></div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4 page-section bg-light text-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Todos los derechos reservados &copy; Dream Cars © 2025</div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
              <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Portfolio Modals */}
      {/* ... Puedes copiar los modales tal cual, solo cambia class por className y src por rutas absolutas ... */}
      {/* Ejemplo para el primero: */}
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg" alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Pintura Completa</h2>
                    <p className="item-intro text-muted">Renueva la apariencia de tu vehículo con un acabado profesional.</p>
                    <img className="img-fluid d-block mx-auto" src="/assets/img/portfolio/img1.png" alt="..." />
                    <p>En Dream Cars realizamos trabajos de pintura automotriz con técnicas de alto nivel. 
                      Utilizamos materiales de primera calidad para garantizar durabilidad, brillo y resistencia a la intemperie. 
                      Nuestro objetivo es que tu vehículo luzca como nuevo.</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Tiempo estimado:</strong>
                        3 - 5 días
                      </li>
                      <li>
                        <strong>Garantía:</strong>
                        12 meses
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-xmark me-1"></i>
                      Cerrar Proyecto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Repite para los otros modales cambiando el contenido y las imágenes */}
    </div>
  );
};

export default Home;