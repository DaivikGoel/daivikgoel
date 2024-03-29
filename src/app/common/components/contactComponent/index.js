import React, { Component } from "react";
import iconEmailWhite from "Icons/icon-email-white.png";
import iconLinkedInWhite from "Icons/icon-linkedin-white.png";
import iconGithubWhite from "Icons/icon-github-white.png";
import iconResumeWhite from 'Icons/icon-resume-white.png';
import iconMedium from 'Icons/mediumicon.png';
import iconInstagram from 'Icons/instagramicon.png';
import iconTwitter from 'Icons/twittericon.png';
import Div from "Common/components/div";
import styles from "./contact_component.module.scss";

const ContactComponent = ({ className, isWhite, hideResume }) => {
  return (
    <Div
      row
      justify
      align
      className={`${styles.social_container} ${className}`}
    >
      <a className={styles.icon_link} target="_blank" href="https://www.instagram.com/daivikgoel">
        <img
          src={iconInstagram}
          className={styles.icon}
        />
      </a>
        <a className={styles.icon_link} target="_blank" href="https://www.twitter.com/daivikgoel">
        <img
          src={iconTwitter}
          className={styles.icon}
        />
      </a>
      <a className={styles.icon_link} target="_blank" href="https://github.com/DaivikGoel">
        <img
          src={iconGithubWhite }
          className={styles.icon}
        />
      </a>
       <a className={styles.icon_link} target="_blank" href="https://medium.com/@daivikgoel">
        <img
          src={iconMedium}
          className={styles.icon}
        />
      </a>
      <a className={styles.icon_link} target="_blank" href="https://www.linkedin.com/in/daivikg/">
        <img
          src={iconLinkedInWhite}
          className={styles.icon}
        />
      </a>
      <a className={styles.icon_link} target="_blank" href="mailto:daivikgoel@gmail.com">
        <img
          src={iconEmailWhite}
          className={styles.icon}
        />
      </a>
      {
        !hideResume && (
          <a className={styles.icon_link} target="_blank" href="https://drive.google.com/file/d/1tOpmoKTZ66BtaIXCxMRt_-ikD8vDLNgm/view?usp=sharing">
          <img
            src={iconResumeWhite}
            className={styles.icon}
          />
        </a>  
        )
      }
    </Div>
  );
};

export default ContactComponent;
