import React from 'react';
import { Parallax } from 'react-parallax';

import * as ROUTES from '../../constants/routes';
import NavLink from '../Styled/navLink';
import NavLogo from '../Styled/navLogo';
import goldPalm from '../../icons/goldPalm.png';
import Bg1 from "../../images/bg1.jpg";
import Bg2 from "../../images/bg2.jpg";
import Bg3 from "../../images/bg3.jpg";
import Bg4 from "../../images/bg4.jpg";
import H1Style from "../Styled/h1Style";
import H2Style from "../Styled/h2Style";
import H3Style from "../Styled/h3Style";
import Ldiv from "../Styled/layoutPage";

  const insideStyles = {
    color: "#8E793E",
    background: "black",
    borderRadius: "25%",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    opacity: "0.7",
  };

const AboutPage = () => (
    <Ldiv>
        <H1Style>Eventspo</H1Style>
        <H2Style>Event Coordination + Design</H2Style>
        <H3Style>We work with a select number of clients to simplify
the planning process and produce creative, meaningful events</H3Style>
    <Parallax bgImage={Bg1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
            <H2Style>CONSULTATIONS</H2Style>
            <H3Style>Color, Concept, and Design</H3Style>
            <p>Translating your style to an interior or exterior space, its furnishings, and decor</p>
            <H3Style>Venues</H3Style>
            <p>What to ask and look for when selecting a venue</p>
            <H3Style>Timelines</H3Style>
            <p>The time allocated and order of events</p>
        </div>
      </div>
    </Parallax>
      <NavLogo src={goldPalm} alt='Eventspo logo'/>
    <Parallax bgImage={Bg2} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
            <H2Style>COORDINATION</H2Style>
                <H3Style>Planning</H3Style>
                    <p>
                        Customized list of Venues and Vendors.
                        Cost report & recommendations maximizing budget.
                        Vendor consultations & walk throughs at Venues. 
                    </p>
                <H3Style>Design</H3Style>
                    <p>
                        Conceptualizing the theme, color palette, and event decor
                        Spatial planning and creation of 3D venue diagrams
                    </p>
                <H3Style>Production</H3Style>
                    <p>
                        Facilitate wedding rehearsal
                        Onsite coordination during event
                        Event setup, strike, & Re-package 
                        event decor and oversee vendors during & after event
                    </p>
        </div>
      </div>
    </Parallax>
    <NavLogo src={goldPalm} alt='Eventspo logo'/>
    <Parallax bgImage={Bg3} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
            <H2Style>The Process</H2Style>
                <H3Style>LISTEN</H3Style>
                    <p>
                        We're excited to hear about what you're celebrating,
                        what's most important to you, & how we can help
                    </p>    
                <H3Style>PLAN</H3Style>
                    <p>
                        Create a timeline, tour venues, meet with vendors, allocate 
                        a budget toward the details that matter the most
                    </p>
                <H3Style>DESIGN</H3Style>
                    <p>
                        Once the date & location are decided, we’ll design a concept & 
                        color palette with details to reflect your story & make the space feel like your own 
                    </p>
         </div>
      </div>
    </Parallax>
    <NavLogo src={goldPalm} alt='Eventspo logo'/>
    <Parallax
      bgImage={Bg4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(142, 121, 62, ${percentage * 2})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
            <div style={{ fontSize: "20px" }}>
                <NavLink to={ROUTES.SIGN_IN}>
                    Sign In{"\n"} 
                    and tell us your Eventspo!
                </NavLink>
            </div>
        </div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
  </Ldiv>
);
export default AboutPage;