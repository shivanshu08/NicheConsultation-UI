import React from 'react'
import "./ClientReviews.css";
import review6 from "./review6.jpg"
import aaaa from "./aaaa.jpg"
import gggg from "./gggg.jpg"
import mmmm from "./mmmm.jpg"
import ffff from "./ffff.jpg"
import ssss from "./ssss.jpg"

function ClientReviews() {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="heading wow fadeIn text-center">
            <h2>Clients Speak: Their Feedback
            </h2>
            <p>Explore client testimonials for insights into their experiences with us.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="box d-flex align-items-center wow fadeInLeft">
                <div className="content">
                  <h3>Avery Grace
                    <span>Chief Executive Officer</span></h3>
                  <p>Niche Consultations truly exceeded my expectations.
                    Their one-on-one mentorship and strategic advisory services have been instrumental in my success.
                  </p>
                </div>
                <div className="image"><img src={review6} alt="" className="img-fluid" /></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box d-flex align-items-center wow fadeInRight">
                <div className="content">
                  <h3>Caleb Sterling
                    <span>Graphic Designer</span></h3>
                  <p> Exceptional service! Niche Consultations provided invaluable guidance and insights. Highly recommended for anyone seeking expert advice.
                  </p>
                  <div className="social d-flex">
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </div>
                </div>
                <div className="image"><img src={aaaa} alt="" className="img-fluid" /></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box d-flex align-items-center wow fadeInLeft">
                <div className="content">
                  <h3>Amelia
                    <span> Internal Auditor</span></h3>
                  <p>Niche Consultations has been instrumental in my success journey. Their insights are spot-on, and I highly recommend their services to anyone seeking expert consultation.

                  </p>
                  <div className="social d-flex">
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </div>
                </div>
                <div className="image"><img src={ssss} alt="" className="img-fluid" /></div>
              </div>
            </div>


            <div className="col-lg-6">
              <div className="box d-flex align-items-center wow fadeInLeft">
                <div className="content">
                  <h3>Emma Watson
                    <span>Credit Analyst</span></h3>
                  <p>I'm truly impressed with Niche Consultations. Their tailored advice is invaluable, and I couldn't have asked for a better consulting partner. Their expertise exceeded my expectations.

                  </p>
                  <div className="social d-flex">
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </div>
                </div>
                <div className="image"><img src={ffff} alt="" className="img-fluid" /></div>
              </div>
            </div>


            <div className="col-lg-6">
              <div className="box d-flex align-items-center wow fadeInLeft">
                <div className="content">
                  <h3>Jackson Blake
                    <span>Customer Service Advisor</span></h3>
                  <p>Outstanding experience with Niche Consultations! Their expertise is unmatched, and their support has been a game-changer for my goals.
                  </p>
                  <div className="social d-flex">
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </div>
                </div>
                <div className="image"><img src={gggg} alt="" className="img-fluid" /></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box d-flex align-items-center wow fadeInRight">
                <div className="content">
                  <h3>Logan Archer
                    <span>Chief Marketing Officer</span></h3>
                  <p> Niche Consultations exceeded my expectations! Their guidance is top-notch, and I've seen remarkable progress in my endeavors. Their expertise truly made a significant impact.
                  </p>
                  <div className="social d-flex">
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon d-flex align-items-center justify-content-center">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </div>
                </div>
                <div className="image"><img src={mmmm} alt="" className="img-fluid" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClientReviews