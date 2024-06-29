import React from "react";
import ScheduleItem from "./ScheduleItem";

const Schedule = () => (
  <section className="schedule">
    <div className="container">
      <div className="schedule-inner">
        <div className="row">
          <ScheduleItem
            iconClass="fa fa-ambulance"
            spanText="Lorem Amet"
            title="Emergency Cases"
            description="Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales."
          >
            <a href="#">
              LEARN MORE<i className="fa fa-long-arrow-right"></i>
            </a>
          </ScheduleItem>
          <ScheduleItem
            iconClass="icofont-prescription"
            spanText="Fusce Porttitor"
            title="Doctors Timetable"
            description="Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales."
          >
            <a href="#">
              LEARN MORE<i className="fa fa-long-arrow-right"></i>
            </a>
          </ScheduleItem>
          <ScheduleItem
            iconClass="icofont-ui-clock"
            spanText="Donec luctus"
            title="Opening Hours"
            description=""
          >
            <ul className="time-sidual">
              <li className="day">
                Monday - Friday <span>8.00-20.00</span>
              </li>
              <li className="day">
                Saturday <span>9.00-18.30</span>
              </li>
              <li className="day">
                Monday - Thursday <span>9.00-15.00</span>
              </li>
            </ul>
            <a href="#">
              LEARN MORE<i className="fa fa-long-arrow-right"></i>
            </a>
          </ScheduleItem>
        </div>
      </div>
    </div>
  </section>
);

export default Schedule;
