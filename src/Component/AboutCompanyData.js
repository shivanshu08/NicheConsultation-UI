import React, { Component } from 'react'

class AboutCompanyData extends Component {
  render() {
    return (
      <>
      <div className={this.props.className}>
                <div className="des-text">
                    <h2>
                    {this.props.heading}
                    </h2>
                    <p>
                        {this.props.text}
                    </p>
                </div>
                <div className="image">
                    <img alt="One-on-One Mentorship" src={this.props.img1}/>
                    <img alt="One-on-One Mentorship" src={this.props.img2}/>
                </div>
            </div>
      </>
    )
  }
}

export default AboutCompanyData