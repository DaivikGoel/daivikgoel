import React, { Component } from "react";
import styles from "./projects.scss";
import Div from "Common/components/div";
import TimelineSelector from "Common/containers/timelineSelector";
import { techList } from "Constants/techConstants";
import find from "lodash/find";
import { Transition, Spring } from "react-spring/renderprops";
import RightContainer from "Common/containers/rightContainer";
import techDoodleImage from "Images/background/tech-doodle-background-image.png";
import { random, parseNewLine } from "Common/utils";
import { getImagePosition, getBackgroundTransition } from './projectsHelper';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.isFirstAnimation = true;
    const selectedTechId = 'TAD';
    const imageAlignment = random(0, 3);
    const imagePosition = getImagePosition(selectedTechId, imageAlignment);
    const backgroundTransition = getBackgroundTransition(
      selectedTechId,
      imageAlignment,
      this.isFirstAnimation
    );

    this.state = {
      selectedTechId,
      techTransitionAnimation: {
        TAD: {
          ...backgroundTransition,
          imagePosition
        }
      }
    }
  }

  componentDidMount() {
    this.isFirstAnimation = false;
  }

  onTechSelected = ({ selectedId }) => {
    const { techTransitionAnimation } = this.state;

    const imageAlignment = random(0, 3);
    const imagePosition = getImagePosition(selectedId, imageAlignment);
    const backgroundTransition = getBackgroundTransition(
      selectedId,
      imageAlignment,
      this.isFirstAnimation,
    );

    this.setState({
      selectedTechId: selectedId, techTransitionAnimation: {
        ...techTransitionAnimation,
        [selectedId]: {
          ...backgroundTransition,
          imagePosition
        }
      }
    });
  };

    getImageBackgroundAnimation = selectedTechId => {
    if (this.isFirstAnimation) {
      return {
        from: { transform: 'translateY(0vh)' },
        enter: { transform: 'translateY(0vh)' },
        leave: { transform: 'translateY(0vh)' }
      };
    }
    else if (selectedTechId) {
      return {
        from: { transform: 'translateY(100vh)' },
        enter: { transform: 'translateY(0vh)' },
        leave: { transform: 'translateY(-100vh)' }
      };
    }

    return {
      from: { transform: 'translateY(-100vh)' },
      enter: { transform: 'translateY(0vh)' },
      leave: { transform: 'translateY(100vh)' }
    };
  };

  render() {
    const { selectedTechId, techTransitionAnimation } = this.state;

    const tech = find(techList, techItem => {
      return techItem.id == selectedTechId;
    });

    return (
      <Div row fillParent align="stretch" className={styles.timeline_container}>
      <Transition
          items={tech}
          keys={tech => tech.id}
          from={this.getImageBackgroundAnimation(selectedTechId).from}
          enter={this.getImageBackgroundAnimation(selectedTechId).enter}
          leave={this.getImageBackgroundAnimation(selectedTechId).leave}
        >

          {tech=> props => (
            <img
              src={tech.backgroundImage}
              style={props}
              className={styles.background_image_back}
            ></img>
          )}
        </Transition>
        <div className={styles.background_overlay}></div>
      
 
        <div className={styles.left_background_gradient}></div>

        <Div className={styles.left_container}>
                 <Transition
          items={tech}
          keys={tech => tech.id}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {tech => tech.id && (
            value => {
              const { imagePosition, from, enter, leave } = techTransitionAnimation[tech.id];
              const fromAnimation = tech.id == selectedTechId ? from : enter;
              const toAnimation = tech.id == selectedTechId ? enter : leave;
              const isReactRelated =
                tech.id == "TAD" ||
                tech.id == "Youtube" ||
                tech.id == "medium";

              return (
                <Spring
                  from={{
                    opacity: isReactRelated ? fromAnimation.opacity : 1,
                    transform: fromAnimation.transform,
                  }}
                  to={{
                    opacity: isReactRelated ? toAnimation.opacity : 1,
                    transform: toAnimation.transform,
                  }}
                >
                  {
                    props => (
                      <Div
                        style={{
                          opacity: isReactRelated ? props.opacity : 1,
                          transform: !isReactRelated ? props.transform : "unset"
                        }}
                        className={styles.background_image_container}
                      >
                        <img
                          src={tech.firstLogo}
                          style={{
                            left: imagePosition.left,
                            right: imagePosition.right,
                            top: imagePosition.top,
                            bottom: imagePosition.bottom,
                            transform: tech.id == 'android' ? imagePosition.transform : props.transform
                          }}
                          className={styles.background_image}
                        ></img>
                      </Div>
                    )
                  }
                </Spring>
              )
            }
          )}
        </Transition>
          <TimelineSelector
            selectedId={selectedTechId}
            listValue={techList}
            tech
            onItemSelected={this.onTechSelected}
          />

          <Transition
            items={tech}
            keys={tech => tech.id}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {tech => props => (
              <Div style={props} className={styles.content_container}>
                <div className={styles.title}>{tech.name}</div>

                <Div align="start" className={styles.description_container}>
                  <div className={styles.description}>{parseNewLine(tech.description)}</div>
                  {/* <div className={styles.description}>{tech.position}</div> */}
                </Div>
              </Div>
            )}
          </Transition>
        </Div>

        <RightContainer
          item={tech}
          className={styles.right_container}
        />
      </Div>
    );
  }
}

export default Projects;