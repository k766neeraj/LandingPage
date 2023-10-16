import React, { useState } from "react";
import { Picture } from "../../components/Picture";
import { IconJamIconsFilledCircleF13 } from "../../icons/IconJamIconsFilledCircleF13";
import { IconJamIconsFilledCircleF8 } from "../../icons/IconJamIconsFilledCircleF8";
import { IconJamIconsFilledStarF2 } from "../../icons/IconJamIconsFilledStarF2";
import { IconJamIconsOutlineLogosClose2 } from "../../icons/IconJamIconsOutlineLogosClose2";
import { IconJamIconsOutlineLogosPlus4 } from "../../icons/IconJamIconsOutlineLogosPlus4";
import "./style.css";
import Searchbar from "../../components/Searchbar";

// importing file to get data
import data from "../../assets/cadata";


export const HomePage = (props) => {
  const {updateshow}=props
  const [search, setsearch] = useState('')
  function change(e) {
    setsearch(e.target.value)
  }
  async function check(e){
    console.log('clicked search',search);
  }
  return (
    <div className="home-page">

      <div className="div">
        <div className="footer">
          <div className="footer-2">
            <a
              className="text-wrapper"
              href="https://www.facebook.com/search/top?q=mohitetax"
              rel="noopener noreferrer"
              target="_blank"
            >
              f
            </a>
            <a
              className="text-wrapper-2"
              href="https://www.instagram.com/mohitetax_/"
              rel="noopener noreferrer"
              target="_blank"
            >
              f
            </a>
            <p className="india-s-first">India&#39;s first platform dedicated to simplifying partner search</p>
            <p className="p">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            <div className="group">
              <img className="footers-social-link" alt="Footers social link" src="/img/footers-social-link-2.svg" />
              <img className="img" alt="Footers social link" src="/img/footers-social-link-1.svg" />
              <img className="footers-social-link-2" alt="Footers social link" src="/img/footers-social-link.svg" />
              <div className="linkedin-logo">
                <div className="overlap-group">
                  <img className="vector" alt="Vector" src="/img/vector-3.svg" />
                  <a
                    className="text-wrapper-3"
                    href="https://www.instagram.com/mohitetax_/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    f
                  </a>
                </div>
              </div>
            </div>
            <div className="group-2">
              <div className="text-wrapper-4">RESOURCES</div>
              <div className="text">
                <div className="text-wrapper-5">Blogs</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-5">Forms</div>
              </div>
            </div>
            <div className="group-3">
              <div className="text-wrapper-6">SUPPORT</div>
              <div className="text">
                <div className="text-wrapper-5">Help</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-5">Contact Us</div>
              </div>
            </div>
            <div className="group-4">
              <div className="text-wrapper-7">LEGAL</div>
              <div className="text">
                <div className="text-wrapper-5">Privacy</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-5">Terms</div>
              </div>
              <div className="text-2">
                <div className="text-wrapper-5">Accessibility</div>
              </div>
            </div>
            <div className="group-5">
              <div className="text-wrapper-8">SOLUTIONS</div>
              <div className="text">
                <div className="text-wrapper-5">Search</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-5">Connect</div>
              </div>
              <div className="text-2">
                <div className="text-3">Research</div>
              </div>
              <div className="text-4">
                <div className="text-3">Academy</div>
              </div>
            </div>
            <div className="group-6">
              <div className="text-wrapper-8">COMPANY</div>
              <div className="text">
                <div className="text-wrapper-5">About</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-5">Pricing</div>
              </div>
              <div className="text-2">
                <div className="text-wrapper-5">Careers</div>
              </div>
            </div>
            <img className="vector-2" alt="Vector" src="/img/vector-195.svg" />
            <img className="image" alt="Image" src="/img/image-1.png" />
          </div>
          <div className="copyright-footer">
            <p className="text-wrapper-9">
              Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="group-7">
          <img className="icon-park-twotone" alt="Icon park twotone" src="/img/icon-park-twotone-search.svg" />
          <p className="SEARCH-for-vital">
            <span className="span">SEARCH</span>
            <span className="text-wrapper-10"> for vital company information </span>
          </p>
          <img className="icon-park-twotone-2" alt="Icon park twotone" src="/img/icon-park-twotone-enquire.svg" />
          <p className="CONNECT-with-the">
            <span className="span">CONNECT</span>
            <span className="text-wrapper-10"> with the resources to meet your business needs</span>
          </p>
          <img className="icon-park-twotone-3" alt="Icon park twotone" src="/img/icon-park-twotone-table-report.svg" />
          <p className="RESEARCH-and">
            <span className="span">RESEARCH</span>
            <span className="text-wrapper-10"> and generate reports that drive growth </span>
          </p>
          <img className="icon-park-twotone-4" alt="Icon park twotone" src="/img/icon-park-twotone-degree-hat.svg" />
          <div className="ACADEMY-to-give-you-wrapper">
            <p className="ACADEMY-to-give-you">
              <span className="span">ACADEMY</span>
              <span className="text-wrapper-11"> to give you the skills for success in your career</span>
            </p>
          </div>
          <img className="all-in-one" alt="All in one" src="/img/all-in-one-platform-that-makes-easier.png" />
          <p className="text-wrapper-12">
            We are more than a platform; We are your success partner. Discover our services to achieve your business and
            educational goals
          </p>
          <div className="overlap">
            <div className="student">
              <div className="overlap-group-2">
                <img className="vector-3" alt="Vector" src="/img/vector-2.svg" />
                <img className="mask-group" alt="Mask group" src="/img/mask-group-1.png" />
                <div className="icons">
                  <IconJamIconsFilledStarF2 className="icon-jam-icons" color="#EFD9F9" />
                  <IconJamIconsFilledStarF2 className="icon-jam-icons-filled-star-f-2" color="#EFD9F9" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-8" color="#EFD9F9" />
                  <IconJamIconsFilledCircleF13 className="icon-jam-icons-filled-circle-f-13" color="#EFD9F9" />
                  <IconJamIconsFilledCircleF13 className="icon-jam-icons-filled-circle-f-12" color="#EFD9F9" />
                  <IconJamIconsFilledCircleF13 className="icon-jam-icons-filled-circle-f-4" color="#EFD9F9" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-3" color="#EFD9F9" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-1" color="#EFD9F9" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-6" color="#EFD9F9" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-9" color="#EFD9F9" />
                  <IconJamIconsOutlineLogosPlus4 className="icon-jam-icons-outline-logos-plus-4" color="#EFD9F9" />
                  <IconJamIconsOutlineLogosPlus4 className="icon-jam-icons-outline-logos-plus-1" color="#EFD9F9" />
                  <IconJamIconsOutlineLogosClose2 className="icon-jam-icons-outline-logos-close-2" color="#EFD9F9" />
                  <IconJamIconsOutlineLogosClose2 className="icon-jam-icons-outline-logos-close" color="#EFD9F9" />
                  <IconJamIconsOutlineLogosPlus4 className="icon-jam-icons-outline-logos-plus" color="#EFD9F9" />
                  <IconJamIconsOutlineLogosPlus4 className="icon-jam-icons-outline-logos-plus-5" color="#EFD9F9" />
                  <IconJamIconsOutlineLogosClose2 className="icon-jam-icons-outline-logos-close-3" color="#EFD9F9" />
                </div>
              </div>
            </div>
            <div className="row">
              <img className="chat-bubble" alt="Chat bubble" src="/img/chat-bubble.png" />
            </div>
            <div className="chat-bubble-wrapper">
              <div className="vitae-viverra-ut-non-wrapper">
                <p className="vitae-viverra-ut-non">I learned from their videos, got my first job.</p>
              </div>
            </div>
            <div className="row-2">
              <div className="vitae-viverra-ut-non-wrapper">
                <p className="vitae-viverra-ut-non">You won&#39;t be disappointed with their services.</p>
              </div>
            </div>
            <div className="teacher">
              <div className="overlap-2">
                <img className="vector-4" alt="Vector" src="/img/vector.svg" />
                <img className="mask-group-2" alt="Mask group" src="/img/mask-group.png" />
                <div className="icons-2">
                  <IconJamIconsFilledStarF2 className="icon-jam-icons-filled-star-f" color="#DDF3FF" />
                  <IconJamIconsFilledStarF2 className="icon-jam-icons-filled-star-f-2-instance" color="#DDF3FF" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-15" color="#DDF3FF" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-7" color="#DDF3FF" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-11" color="#DDF3FF" />
                  <IconJamIconsFilledCircleF13 className="icon-jam-icons-filled-circle-f-16" color="#DDF3FF" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-10" color="#DDF3FF" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f" color="#DDF3FF" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-5" color="#DDF3FF" />
                  <IconJamIconsFilledCircleF8 className="icon-jam-icons-filled-circle-f-2" color="#DDF3FF" />
                  <IconJamIconsOutlineLogosPlus4 className="icon-jam-icons-outline-logos-plus-3" color="#DDF3FF" />
                  <IconJamIconsOutlineLogosPlus4 className="icon-jam-icons-outline-logos-plus-8" color="#DDF3FF" />
                  <IconJamIconsOutlineLogosClose2 className="icon-jam-icons-outline-logos-close-1" color="#DDF3FF" />
                  <IconJamIconsOutlineLogosPlus4
                    className="icon-jam-icons-outline-logos-plus-4-instance"
                    color="#DDF3FF"
                  />
                  <IconJamIconsOutlineLogosPlus4
                    className="icon-jam-icons-outline-logos-plus-1-instance"
                    color="#DDF3FF"
                  />
                  <IconJamIconsOutlineLogosClose2 className="icon-jam-icons-outline-logos-close-5" color="#DDF3FF" />
                </div>
              </div>
            </div>
            <div className="chat-bubble-2">
              <p className="vitae-viverra-ut-non-2">I got a perfect analysis report from them too</p>
            </div>
            <div className="chat-bubble-3">
              <div className="vitae-viverra-ut-non-3">Oh, that&#39;s great.</div>
            </div>
          </div>
        </div>
        <div className="group-8">
          <div className="overlap-3">
            <p className="text-wrapper-13">
              To remain with us, it is essential that you diligently follow the steps provided
            </p>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <img className="vector-5" alt="Vector" src="/img/vector-13.svg" />
                <div className="rectangle" />
              </div>
            </div>
            <div className="text-wrapper-14">1</div>
            <div>
            <div className="rectangle-2" />
            <p className="text-wrapper-15">Invested shareholders must confirm payment and office address</p>
            <div className="rectangle-3" />
            <div className="group-9">
              <div className="group-10">
                <p className="element-for-the">
                  <span className="span">₹</span>
                  <span className="text-wrapper-16">50,000</span>
                  <span className="text-wrapper-17"> for the company</span>
                </p>
                <p className="element-day-for">
                  <span className="span">₹</span>
                  <span className="text-wrapper-16">1,000</span>
                  <span className="text-wrapper-17"> /day for directors</span>
                </p>
                <div className="text-wrapper-18">Penalty fees</div>
              </div>
              <div className="group-11">
                <div className="text-wrapper-19">
                  Within 180 <br />
                  days
                </div>
                <div className="text-wrapper-20">Due date</div>
              </div>
            </div>
            <p className="commencement-of">
              <span className="span">Commencement of business</span>
              <span className="text-wrapper-21">&nbsp;</span>
            </p>
            <div className="rectangle-4" />
            <div className="text-wrapper-22">1st</div>
            </div>
            <div className="rectangle-5" />
            <p className="text-wrapper-23">Company informs new auditor and submits ADT.1 form to ROC.</p>
            <div className="rectangle-6" />
            <div className="group-12">
              <div className="group-13">
                <p className="element-per-month">
                  <span className="span">₹</span>
                  <span className="text-wrapper-16">300</span>
                  <span className="text-wrapper-17"> per month.</span>
                </p>
                <div className="text-wrapper-18">Penalty fees</div>
              </div>
              <div className="group-11">
                <div className="text-wrapper-19">
                  Within 30 <br />
                  days
                </div>
                <div className="text-wrapper-20">Due date</div>
              </div>
            </div>
            <div className="text-wrapper-24">Auditor Appointment</div>
            <div className="rectangle-7" />
            <div className="text-wrapper-25">2nd</div>
            <div className="rectangle-8" />
            <p className="text-wrapper-26">Companies must annually report activities and finances to the registrar.</p>
            <div className="rectangle-9" />
            <div className="group-14">
              <div className="group-15">
                <p className="element-per-day-no-upper">
                  <span className="text-wrapper-27">₹</span>
                  <span className="text-wrapper-28">200</span>
                  <span className="text-wrapper-29"> per day </span>
                  <span className="text-wrapper-30">(No upper limit)*</span>
                  <span className="text-wrapper-29">&nbsp;</span>
                </p>
                <div className="text-wrapper-31">Penalty fees</div>
              </div>
              <div className="group-11">
                <p className="text-wrapper-19">On or Before 31st December</p>
                <div className="text-wrapper-20">Due date</div>
              </div>
            </div>
            <div className="text-wrapper-32">MCA Form MGT-7</div>
            <div className="rectangle-10" />
            <div className="text-wrapper-33">6th</div>
            <div className="rectangle-11" />
            <p className="it-s-like-an">
              It&#39;s like an official report card for a <br />
              company&#39;s documents
            </p>
            <div className="rectangle-12" />
            <p className="element-per-day-no-upper-2">
              <span className="span">₹</span>
              <span className="text-wrapper-16">200</span>
              <span className="text-wrapper-34"> per day (No upper limit)*</span>
            </p>
            <div className="text-wrapper-35">Penalty fees</div>
            <p className="text-wrapper-36">On or Before 30th November</p>
            <div className="text-wrapper-37">Due date</div>
            <div className="text-wrapper-38">MCA Form AOC-4</div>
            <div className="rectangle-13" />
            <div className="text-wrapper-39">5th</div>
            <div className="rectangle-14" />
            <p className="text-wrapper-40">
              Companies report money taken from people to ROC; auditors confirm details.
            </p>
            <div className="rectangle-15" />
            <div className="group-16">
              <div className="group-17">
                <p className="element-per-month-2">
                  <span className="span">₹</span>
                  <span className="text-wrapper-16">300</span>
                  <span className="text-wrapper-17"> per month.</span>
                </p>
                <div className="text-wrapper-31">Penalty fees</div>
              </div>
              <div className="group-11">
                <div className="text-wrapper-19">
                  Within 30 <br />
                  days
                </div>
                <div className="text-wrapper-20">Due date</div>
              </div>
            </div>
            <div className="text-wrapper-41">DPT-3</div>
            <div className="rectangle-16" />
            <div className="text-wrapper-42">4th</div>
            <div className="rectangle-17" />
            <p className="directors-share">
              Directors share personal information for identification &amp; verification
            </p>
            <div className="rectangle-18" />
            <div className="group-18">
              <div className="group-19">
                <p className="element-one-time">
                  <span className="span">₹</span>
                  <span className="text-wrapper-16">5000</span>
                  <span className="span">&nbsp;</span>
                  <span className="text-wrapper-43">one time</span>
                </p>
                <div className="text-wrapper-44">Penalty fees</div>
              </div>
              <div className="group-20">
                <div className="text-wrapper-45">Every Year</div>
                <div className="text-wrapper-20">Due date</div>
              </div>
            </div>
            <div className="text-wrapper-46">DIN eKYC</div>
            <div className="rectangle-19" />
            <div className="text-wrapper-47">3rd</div>
            <p className="for-forms-AOC-and">
              <span className="text-wrapper-48">
                * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
              </span>
              <span className="span">every day</span>
              <span className="text-wrapper-48">
                {" "}
                until you file the form . There is no maximum penalty amount. So, if you don&#39;t file the form for a
                year, you will owe ₹73,000 per form
              </span>
            </p>
          </div>
          <img className="want-to-join-us" alt="Want to join us" src="/img/want-to-join-us.png" />
        </div>

      </div>
      <div className="bg">
        <div className="overlap-4">
          <div className="overlap-5">
            <img
              className="find-partners-cas"
              alt="Find partners cas"
              src="/img/find-partners-cas-available-online.png"
            />
            <p className="CONNECT-with-us">
              <span className="span">CONNECT </span>
              <span className="text-wrapper-49">
                with us where your services are listed and visible to a myriad of businesses seeking CA’s for
                compliance support
              </span>
            </p>
            <div className="overlap-6">
              <div className="search-button">
                <div className="overlap-group-4">
                  <input type="text" className="text-wrapper-50" id="searca" placeholder="Search by name" value={search} onChange={change}/>
                  {/* To search the filter the data accoding to the query */}
                  <div id="serchaca">
                    {/* If query is empty */}
                    <div id="nothing">{search.length==0 && `Nothing to display for empty query`}</div>
                    {data.map((curca)=>{
                      const main=curca.name.toLowerCase()
                      if(main.search(search.toLowerCase())!=-1 && search.length>0){
                            return <Searchbar key={curca.id} curca={curca} updateshow={updateshow}/>
                      }
                    })}
            
                  </div>
                
                  <div className="overlap-7">
                    <div className="rectangle-20" />
                    <div className="text-wrapper-51" onClick={check}>Search</div>
                  </div>
                </div>
              </div>
              <img className="vector-6" alt="Vector" src="/img/vector-1.svg" />
              <div className="left">
                <div className="frame">
                  <Picture className="picture-instance" />
                </div>
                <div className="picture-wrapper">
                  <Picture className="design-component-instance-node" />
                </div>
                <div className="picture-instance-wrapper">
                  <Picture className="picture-2" />
                </div>
              </div>
            </div>
          </div>
          <img className="top-bar" alt="Top bar" src="/img/top-bar.png" />
        </div>
      </div>
    </div>
  );
};
