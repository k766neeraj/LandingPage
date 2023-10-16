import React from "react";
import { PropertyActive } from "../../components/PropertyActive";
import { PropertyOutline } from "../../components/PropertyOutline";
import "./style.css";

export const MichaelJackson = (props) => {
  // the show prop that the data of the value
  const { show } = props
  return (
    <div className="michael-jackson">
      <div className="div">
        <div className="overlap">
          <p className="financial-accounting">
            {/* Fetching data from the ca.json */}
            {show.about.services.map((serv) => (
              <span>
                {serv}
                <br />
              </span>
            ))}
          </p>
          <div className="overlap-group">
            <div className="text-wrapper-2">SERVICES I OFFER</div>
            <div className="group">
              <div className="text-wrapper-3">WHY ME?</div>
              <p className="text-wrapper-4">
                {show.about.benefits.map((serv) => (
                  <span>
                    {serv}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="text-wrapper-5">FROM</div>
          <div className="text-wrapper-6">{`${show.about.from}`}</div>
        </div>
        <div className="group-3">
          <div className="text-wrapper-2">ABOUT</div>
          <p className="p">
            {`${show.about.description}`}
          </p>
        </div>
        <div className="group-4">
          <div className="text-wrapper-7">PARTNER SINCE</div>
          <div className="text-wrapper-8">{`${show.about.partnerSince}`}</div>
        </div>
        <div className="group-5">
          <div className="text-wrapper-3">AVERAGE RESPONSE TIME</div>
          <div className="text-wrapper-4">{`${show.about.averageResponseTime}`}</div>
        </div>
        <div className="text-wrapper-9">{`About ${show.name}`}</div>
        <img className="top-bar" alt="Top bar" src="/img/top-bar.png" />
        <div className="group-wrapper" style={{ backgroundImage: `url(${show.image})` }}>
          <div className="group-6">
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="rectangle" />
          </div>
        </div>
        <div className="group-7">
          <div className="text-wrapper-10">Recommended for you</div>
          <div className="group-8">
            <div className="overlap-2">
              <img className="img" alt="Rectangle" src="/img/rectangle-376.png" />
              <div className="overlap-3">
                <div className="text-wrapper-11">{`${show.name}`}</div>
                <div className="text-wrapper-12">{`${show.price}`}</div>
              </div>
              <p className="text-wrapper-13">I will do business evaluation and corporate services</p>
              <div className="group-9">
                <p className="element">
                  <span className="span">{`${show.rating}`}</span>
                  <span className="text-wrapper-14">{`(${show.reviewCount})`}</span>
                </p>
                <img className="img-2" alt="Star fill" src="/img/star-fill.svg" />
              </div>
              <PropertyActive
                className="component"
                divClassName="design-component-instance-node"
                text="View services"
              />
            </div>
            <div className="overlap-4">
              <img className="img" alt="Rectangle" src="/img/rectangle-376.png" />
              <div className="overlap-3">
                <div className="text-wrapper-11">Stevie Wonder</div>
                <div className="text-wrapper-12">₹4,263</div>
              </div>
              <p className="text-wrapper-13">I will do business evaluation and corporate services</p>
              <div className="group-10">
                <p className="element">
                  <span className="span">5.0 </span>
                  <span className="text-wrapper-14">(62)</span>
                </p>
                <img className="img-2" alt="Star fill" src="/img/star-fill.svg" />
              </div>
              <PropertyActive
                className="component"
                divClassName="design-component-instance-node"
                text="View services"
              />
            </div>
            <div className="overlap-group-2">
              <img className="img" alt="Rectangle" src="/img/rectangle-376.png" />
              <div className="overlap-3">
                <div className="text-wrapper-11">Ray Charles</div>
                <div className="text-wrapper-12">₹2,586</div>
              </div>
              <p className="text-wrapper-13">I will do business evaluation and corporate services</p>
              <div className="group-11">
                <p className="element">
                  <span className="span">4.3 </span>
                  <span className="text-wrapper-14">(189)</span>
                </p>
                <img className="img-2" alt="Star fill" src="/img/star-fill.svg" />
              </div>
              <PropertyActive
                className="component"
                divClassName="design-component-instance-node"
                text="View services"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-2">
            <a
              className="text-wrapper-15"
              href="https://www.facebook.com/search/top?q=mohitetax"
              rel="noopener noreferrer"
              target="_blank"
            >
              f
            </a>
            <a
              className="text-wrapper-16"
              href="https://www.instagram.com/mohitetax_/"
              rel="noopener noreferrer"
              target="_blank"
            >
              f
            </a>
            <p className="india-s-first">India&#39;s first platform dedicated to simplifying partner search</p>
            <p className="text-wrapper-17">
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra
            </p>
            <div className="group-12">
              <img className="img-2" alt="Footers social link" src="/img/footers-social-link-2.svg" />
              <img className="footers-social-link" alt="Footers social link" src="/img/footers-social-link-1.svg" />
              <img className="footers-social-link-2" alt="Footers social link" src="/img/footers-social-link.svg" />
              <div className="linkedin-logo">
                <div className="overlap-group-3">
                  <img className="vector" alt="Vector" src="/img/vector.svg" />
                  <a
                    className="text-wrapper-18"
                    href="https://www.instagram.com/mohitetax_/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    f
                  </a>
                </div>
              </div>
            </div>
            <div className="group-13">
              <div className="text-wrapper-19">RESOURCES</div>
              <div className="div-wrapper">
                <div className="text-wrapper-20">Blogs</div>
              </div>
              <div className="text-2">
                <div className="text-wrapper-20">Forms</div>
              </div>
            </div>
            <div className="group-14">
              <div className="text-wrapper-21">SUPPORT</div>
              <div className="div-wrapper">
                <div className="text-wrapper-20">Help</div>
              </div>
              <div className="text-2">
                <div className="text-wrapper-20">Contact Us</div>
              </div>
            </div>
            <div className="group-15">
              <div className="text-wrapper-22">LEGAL</div>
              <div className="div-wrapper">
                <div className="text-wrapper-20">Privacy</div>
              </div>
              <div className="text-2">
                <div className="text-wrapper-20">Terms</div>
              </div>
              <div className="text-3">
                <div className="text-wrapper-20">Accessibility</div>
              </div>
            </div>
            <div className="group-16">
              <div className="text-wrapper-23">SOLUTIONS</div>
              <div className="div-wrapper">
                <div className="text-wrapper-20">Search</div>
              </div>
              <div className="text-2">
                <div className="text-wrapper-20">Connect</div>
              </div>
              <div className="text-3">
                <div className="text-4">Research</div>
              </div>
              <div className="text-5">
                <div className="text-4">Academy</div>
              </div>
            </div>
            <div className="group-17">
              <div className="text-wrapper-23">COMPANY</div>
              <div className="div-wrapper">
                <div className="text-wrapper-20">About</div>
              </div>
              <div className="text-2">
                <div className="text-wrapper-20">Pricing</div>
              </div>
              <div className="text-3">
                <div className="text-wrapper-20">Careers</div>
              </div>
            </div>
            <img className="vector-2" alt="Vector" src="/img/vector-195.svg" />
            <img className="image" alt="Image" src="/img/image-1.png" />
          </div>
          <div className="copyright-footer">
            <p className="text-wrapper-24">
              Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="frame">
          <div className="text-wrapper-25">{`${show.name}`}</div>
          <p className="i-am-here-to-provide">
            {`${show.intro}`}
          </p>
          <div className="group-18">
            <p className="element-2">
              <span className="span">{`${show.rating}`}</span>
              <span className="text-wrapper-14">{`(${show.reviewCount})`}</span>
            </p>
            <img className="star-fill" alt="Star fill" src="/img/star-fill.svg" />
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-4">
              <div className="text-wrapper-26">What people say?</div>
              <p className="text-wrapper-27">
                {`I cannot express enough gratitude for the support ${show.name} has provided in managing my personal finances.
                Their attention to detail and deep understanding of financial markets has ensured that my investments
                are in safe hands. I highly recommend their services to anyone seeking financial guidance.`}
              </p>
              <div className="group-19">
                <div className="ellipse-4" />
                <div className="ellipse-5" />
                <div className="ellipse-6" />
                <div className="rectangle" />
              </div>
            </div>
          </div>
          <div className="overlap-5">
            <div className="overlap-6">
              <div className="text-wrapper-28">{`${show.taskComplexity}`}s</div>
              <div className="text-wrapper-29">{`${show.price}`}</div>
            </div>
            <PropertyActive
              className="property-1-active-button-hover-false-outline-false"
              divClassName="design-component-instance-node"
              text="Request Proposal"
            />
            <div className="group-20">
              <p className="text-wrapper-30">{`${show.deliveryTime}`}</p>
              <img className="calendar-line" alt="Calendar line" src="/img/calendar-2-line.svg" />
            </div>
            <PropertyOutline
              className="property-1-outline-button-hover-false-outline-true"
              divClassName="design-component-instance-node"
              text="Chat with me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
