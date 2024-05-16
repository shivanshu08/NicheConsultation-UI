import React from "react";
import "./AboutCompany.css"
import AboutCompanyData from "./AboutCompanyData";
import oneonone1 from "./oneonone1.jpg";
import oneonone2 from "./oneonone2.jpg";
import business1 from "./business1.jpg";
import business2 from "./business2.jpg";
import career1 from "./career1.jpg";
import career2 from "./career2.jpg";
import stragety1 from "./stragety1.jpg";
import stragety2 from "./stragety2.jpg";


const AboutCompany = () => {
    return (
        <div className="destination">
            <h1>
                Niche Consultations for Your Success
            </h1>
            <p>
                Empowering Your Journey to Excellence Through Expert Guidance.
            </p>
            <AboutCompanyData
                className="first-des"
                heading="One-on-One Mentorship"
                text="Engage in a deeply personalized learning journey with our one-on-one mentorship program. 
            Benefit from exclusive access to a seasoned mentor who will provide you with tailored advice, industry insights, and expert guidance.
             Experience firsthand the transformational power of mentorship as you work closely with a mentor who understands your unique goals and challenges, helping you navigate your path to success with confidence and clarity."
                img1={oneonone1}
                img2={oneonone2}
            />
            <AboutCompanyData
                className="first-des-reverse"
                heading="Strategic Advisory"
                text="Our Strategic Advisory services offer expert guidance to help your organization thrive. Our seasoned strategists work closely with your team to develop and implement tailored strategies that drive results. From market entry to operational efficiency, we deliver actionable insights and measurable impact, making us your trusted partner for sustainable growth."
                img1={stragety1}
                img2={stragety2}
            />
            <AboutCompanyData
                className="first-des"
                heading="Career Development"
                text="At Niche Consultations, our career development consultations are designed to empower you at every stage of your professional journey. From refining your resume and mastering interview techniques to identifying growth opportunities, we provide personalized guidance to help you succeed. 
            With our support, you'll gain the skills and confidence needed to thrive in your chosen field and take your career to new heights."
                img1={career1}
                img2={career2}
            />
            <AboutCompanyData
                className="first-des-reverse"
                heading="Business Strategy"
                text="Unlock Your Business Potential with Expert Business Strategy Consultation. Our seasoned consultants provide tailored solutions to boost growth, optimize operations, and maximize profitability. Whether you're a startup or an established enterprise, our strategic guidance empowers you to navigate challenges, seize opportunities, and achieve sustainable success in today's competitive landscape."
                img1={business1}
                img2={business2}
            />
        </div>
    )
}
export default AboutCompany;