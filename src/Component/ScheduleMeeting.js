import React from 'react'
import "./ScheduleMeeting.css"

function ScheduleMeeting() {
    return (
        <>
            <section class="appointment-section">
                <div class="container">
                    <div class="sec-title">
                        <div class="title">Optimize Your Agenda: Schedule a Meeting Today</div>
                        <h2>Appoinment</h2>
                    </div>
                    <div class="row clearfix">


                        <div class="form-column col-md-8 col-sm-12 col-xs-12">
                            <div class="inner-column">


                                <div class="default-form">


                                    <form>
                                        <div class="row clearfix">

                                            <div class="column col-md-6 col-sm-6 col-xs-12">

                                                <div class="form-group">
                                                    <input type="text" name="username" placeholder="Name" required />
                                                </div>


                                                <div class="form-group">
                                                    <select class="custom-select-box">
                                                        <option>Service Catogaries</option>
                                                        <option>One-on-One Mentorship</option>
                                                        <option>Strategic Advisory</option>
                                                        <option>Career Development</option>
                                                        <option>Business Stragety</option>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <input type="text" class="datepicker" name="text" placeholder="Schedule Date" required />
                                                    <i class="far fa-calendar-alt"></i>
                                                </div>

                                            </div>

                                            <div class="column col-md-6 col-sm-6 col-xs-12">

                                                <div class="form-group">
                                                    <input type="email" name="email" placeholder="Email" required />
                                                </div>

                                                <div class="form-group">
                                                    <input type="text" name="phone" placeholder="Phone" required />
                                                </div>

                                                <div class="form-group">
                                                    <input class="timepicker" type="text" name="schedule" placeholder="Schedule Time" />
                                                    <i class="far fa-clock"></i>
                                                </div>

                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
            <button class="theme-btn appointment-btn" type="submit" name="submit-form" onclick="return false;">Fix An Appointment</button>
        </div>
        
                                        </div>
                                    </form>

                                </div>


                            </div>
                        </div>


                        <div class="schedule-column col-md-4 col-sm-12 col-xs-12">
                            <div class="inner-outer">
                                <div class="inner-column">
                                    <h2>Business Hours:</h2>
                                    <ul class="time-list">
                                        <li>Monday - Friday 9.00 AM - 5.00 PM</li>
                                        <li>Saturday 9.00 AM - 3.00 PM</li>
                                        <li><strong>Closed On Sundays</strong></li>
                                        <li class="closed">Every 2nd, 4th Saturday and all govt holidays are closed.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ScheduleMeeting