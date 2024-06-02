import React from "react";


const SectionTitle = ({ title, description }) => (
  <div className="section-title">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const FeatureItem = ({ iconClass, title, description }) => (
  <div className="col-lg-4 col-12">
    <div className="single-features">
      <div className="single-icon">
        <i className={iconClass}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Feature = () => (
  <section className="Features section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <SectionTitle
            title="Features"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"
          />

import importimg from "../Images/Import.svg";
import { Link } from "react-router-dom";
function Feature() {
  return (
    <section className="Feautes section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Feautures</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
                aliquet. pretiumts
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="single-features">
              <div className="signle-icon">
                <i className="icofont icofont-envelope-open "></i>
              </div>
              <h3>Import Messages</h3>
              <p>
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="single-features">
              <div className="signle-icon">
                <i className="icofont icofont-ui-message "></i>
              </div>
              <h3>Export Messages</h3>
              <p>
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="single-features last">
              <div className="signle-icon">
                <i className="icofont icofont-meeting-add"></i>
              </div>
              <h3>Meetings Schedule</h3>
              <p>
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="row">
        <FeatureItem
          iconClass="icofont icofont-envelope-open"
          title="Import Messages"
          description="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
        />
        <FeatureItem
          iconClass="icofont icofont-ui-message"
          title="Export Messages"
          description="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
        />
        <FeatureItem
          iconClass="icofont icofont-meeting-add"
          title="Meetings Schedule"
          description="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
        />
        
      </div>
    </div>
  </section>
);

export default Feature;
