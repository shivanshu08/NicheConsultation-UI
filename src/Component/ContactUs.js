import React from 'react'
import "./ContactUs.css"
function ContactUs() {
  return (
    <>
    <section className="contact" id="contact">
        <div className="container">
            <div className="heading text-center">
                <h2>Contact
                    <span> Us </span></h2>
                <p>Reach out to Niche Consultations and let us help you navigate your path to success.
                    </p>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="title">
                        <h3>Contact Detail</h3>
                        <p>Comprehensive Contact Information for Your Convenience</p>
                    </div>
                    <div className="content">
                        
                        <div className="info">
                            <i className="fas fa-mobile-alt"></i>
                            <h4 className="d-inline-block">PHONE :
                                <br/>
                                <span>91-11-1234 5678
                                    <br/>91-22-1234 5678</span></h4>
                        </div>
                       
                        <div className="info">
                            <i className="far fa-envelope"></i>
                            <h4 className="d-inline-block">EMAIL :
                                <br/>
                                <span>nicheconsultations@gmail.com
                                    <br/>support@nicheconsultations.com</span></h4>
                        </div>
                       
                        <div className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            <h4 className="d-inline-block">ADDRESS :<br/>
                                <span>26E/2A Prayagraj, Uttar Pradesh</span></h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-7">

                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" className="form-control" placeholder="Name"  required/>
                            </div>
                            <div className="col-sm-6">
                                <input type="email" className="form-control" placeholder="Email"  required/>
                            </div>
                            <div className="col-sm-12">
                                <input type="text" className="form-control" placeholder="Subject"  required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" id="comment" placeholder="Message" required data-loading-text="Please wait..."></textarea>
                        </div>
                        <button className="btn btn-block" type="submit">Send Now!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactUs