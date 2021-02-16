import React, { Component, memo, useEffect, useState } from "react";
import { Transition, config } from "react-spring/renderprops";
import Div from "Common/components/div";
import styles from "./header_description.module.scss";
import ContactComponent from "Common/components/contactComponent";

const HeaderDescription = ({
  showDescription,
  onClickProject,
  onClickTimeline,
  isFirstTime
}) => {

  return (
    <Transition
      items={showDescription}
      from={{
        opacity: 0,
        transform: "translateY(0))"
      }}
      enter={{
        opacity: 1,
        transform: "translateY(calc(0))"
      }}
      leave={{
        opacity: 0
      }}
      config={isFirstTime ? { delay: 300 } : config.default}
    >
      {showDescription =>
        showDescription &&
        (props => (
          <Div style={props} className={styles.user_description_container}>
            <div className={styles.user_description}>
              <Div row justify align className={styles.user_button_container}>
              </Div>
              <h1> Hello, I am  <strong>Daivik Goel</strong></h1>
              <p class="wow fadeInUp color-white" data-wow-delay="0.8s"> 4A Computer Engineering
                                          Student at the University of Waterloo </p>
              <p class="wow fadeInUp color-white" data-wow-delay="0.8s"> Product Manager Intern at Tesla</p>
              <p class="wow fadeInUp color-white" data-wow-delay="0.8s"> Founder of uWaterloo Voice</p>
              <p class="wow fadeInUp color-white" data-wow-delay="0.8s"> Vice President Of Branding at the UW PM Club</p>
              <p class="wow fadeInUp color-white" data-wow-delay="0.8s"> Director Of Outreach at the UW VR/AR Club</p>
              <p class="wow fadeInUp color-white" data-wow-delay="0.8s"> 2 x Sandford Fleming Foundation Engineering Debate Champion </p>
            </div>
            <Div row justify align className={styles.user_button_container}>
              Checkout some of my&nbsp;
              <Div
                align
                className={styles.user_button}
                onClick={onClickProject}
              >
               Personal Ventures
                <Underline isFirstTime={isFirstTime} />
              </Div>
              &nbsp;or some of my &nbsp;
              <Div
                align
                className={styles.user_button}
                onClick={onClickTimeline}
              >
                Previous Experiences
                <Underline isFirstTime={isFirstTime} />
              </Div>
            </Div>
          </Div>
        ))
      }
    </Transition>
  );
};

const Underline = ({ isFirstTime }) => (
  <Transition
    items={true}
    from={{
      transform: isFirstTime ? "scale(0)" : "scale(1)"
    }}
    enter={{
      transform: "scale(1)"
    }}
    config={{ delay: 800 }}
  >
    {showUnderline =>
      (props => (
        <div
          style={props}
          className={`${styles.underline} ${styles.show_underline}`}
        ></div>
      ))
    }
  </Transition>
);


export default memo(HeaderDescription);
