import React from 'react'
import "./About.css"
import about1 from "./about1.png"

function About() {
    return (
        <>
        <section className="section_all" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title_all text-center">
                        <h3 className="font-weight-bold">Welcome To <span className="text-custom">Niche Consultations</span></h3>
                        <p className="section_subtitle mx-auto text-muted">Step into the world of Niche Consultations, <br/>where innovation and insight converge to empower your journey.</p>
                        <div className="">
                            <i className=""></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row vertical_content_manage mt-5">
                <div className="col-lg-6">
                    <div className="about_header_main mt-3">
                        <h4 className="about_heading text-capitalize font-weight-bold mt-4">Our History</h4>
                        <p className="text-muted mt-3">Niche Consultations, established in 2020 and led by CEO John Doe, has swiftly risen in the consulting industry. With a commitment to expertise and a client-centric approach, the company expanded globally and earned recognition with awards. Niche Consulting's trajectory promises ongoing growth and excellence in the consulting landscape.</p>

                        <p className="text-muted mt-3">As Niche Consulting looks ahead, it remains dedicated to its core principles of delivering exceptional solutions tailored to client needs. The company is poised to expand its service offerings, further enriching its portfolio of specialized services. With a commitment to innovation and a track record of client success, Niche Consulting is well-positioned to continue making a significant impact in the dynamic world of consulting, offering clients the expertise they need to thrive in an ever-changing business landscape.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="img_about mt-3">
                        <img src={about1} alt="" className="img-fluid mx-auto d-block"/>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-lg-4">
                    <div className="about_content_box_all mt-3">
                        <div className="about_detail text-center">
                            <div className="about_icon">
                                <i className="fas fa-user-tie"></i>
                            </div>
                            <h6 className="text-dark text-capitalize mt-3 font-weight-bold">Top Mentors</h6>
                            <p className="edu_desc mt-3 mb-0 text-muted">Meet Our Top Mentors: Industry Leaders and Experts. </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="about_content_box_all mt-3">
                        <div className="about_detail text-center">
                            <div className="about_icon">
                                <i className="fab fa-angellist"></i>
                            </div>
                            <h6 className="text-dark text-capitalize mt-3 font-weight-bold">Delivering Optimal Results</h6>
                            <p className="edu_desc mb-0 mt-3 text-muted">Delivering Excellence: We Achieve Best Results.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="about_content_box_all mt-3">
                        <div className="about_detail text-center">
                            <div className="about_icon">
                                <i className="fas fa-paper-plane"></i>
                            </div>
                            <h6 className="text-dark text-capitalize mt-3 font-weight-bold">Best Platform </h6>
                            <p className="edu_desc mb-0 mt-3 text-muted">Discover Excellence: Your Best Platform for Success. Experience the Difference.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default About