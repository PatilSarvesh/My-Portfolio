import React from "react";
import {Timeline, Events, UrlButton, ImageEvent} from "@merc/react-timeline";

// projects
import L_QUIZ from "../../assets/img/projects/quiz.webp";
import L_DRUMKIT from "../../assets/img/projects/drum.webp";
import L_TodoList from "../../assets/img/projects/todolist.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_MONGODB from "../../assets/img/skills/mongodb-ar21.svg";
import L_NETLIFY from "../../assets/img/skills/netlify-ar21.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_GIT from "../../assets/img/skills/github.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (<div id="projects">
    <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
    <Timeline>
      <Events>

        {/* Project: Todo list */}

        <ImageEvent date="21/01/2020" className="text-center" text="TodoList app" src={L_TodoList} alt="todolist">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                    PROJECT DETAILS
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong>
                      An app to list your daily work
                      <hr/>
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>You can add your daily work</li>
                        <li>and easily delete after completing</li>

                      </ul>
                      <hr/>
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image src={L_REACT} alt="React" rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            React
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image src={L_EXPRESS} alt="Express" rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            Express
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image src={L_MONGODB} alt="Mongodb" rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            mongoDB
                          </span>
                        </li>

                      </ul>
                      <hr/>

                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton href="https://murmuring-basin-84081.herokuapp.com/" target="_blank">
                SEE LIVE
              </UrlButton>
              <UrlButton href="https://github.com/PatilSarvesh/TodoList" target="_blank">
                SOURCE CODE
              </UrlButton>
              {/* <UrlButton
                  href="xxxxxxx"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */
              }
            </div>
          </div>
        </ImageEvent>

        {/* Project: quiz */}
        <ImageEvent date="15/04/2020" className="text-center" text="Quiz App" src={L_QUIZ} alt="Quiz">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                    PROJECT DETAILS
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong>
                      A Quiz app
                      <hr/>
                      <strong>Features:</strong>
                      <ul className="list-styles pt-1">
                        <li>Easy to check your GK</li>
                        <li>Easy to use</li>

                      </ul>
                      <hr/>
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image src={L_REACT} alt="React" rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            React
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image src={L_NETLIFY} alt="Netlify " rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            netlify
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image src={L_GIT} alt="Github " rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            GitHub
                          </span>
                        </li>

                      </ul>
                      <hr/>

                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton href="https://determined-austin-da7f3c.netlify.app/" target="_blank">
                SEE LIVE
              </UrlButton>
              <UrlButton href="https://github.com/PatilSarvesh/quiz" target="_blank">
                SOURCE CODE
              </UrlButton>

            </div>
          </div>
        </ImageEvent>

        {/* project: Drum kit */}
        <ImageEvent date="21/07/2019" className="text-center" text="Drum Kit" src={L_DRUMKIT} alt="Drum Kit">
          <div className="d-flex justify-content-between flex-column mt-1">
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                    PROJECT DETAILS
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0" className="text-left">
                    <Card.Body>
                      <strong>Description:</strong>
                      A virtual Drum Kit to play
                      <hr/>
                      <strong>Tech used:</strong>
                      <ul>
                        <li>
                          <span className="p-2">
                            <Image src={L_HTML5} alt="Htmal" rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            HTML
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image src={L_CSS3} alt="CSS " rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            CSS
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image src={L_BOOTSTRAP4} alt="Bootstrap " rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            Bootstrap
                          </span>
                        </li>
                        <li>
                          <span className="p-2">
                            <Image src={L_JAVASCRIPT} alt="JavaScript " rounded="rounded" className="image-style1 m-1"></Image>{" "}
                            JavaScript
                          </span>
                        </li>

                      </ul>
                      <hr/>

                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton href="https://patilsarvesh.github.io/Drum_Kit/" target="_blank">
                SEE LIVE
              </UrlButton>
              <UrlButton href="https://github.com/PatilSarvesh/Drum_Kit" target="_blank">
                SOURCE CODE
              </UrlButton>

            </div>
          </div>
        </ImageEvent>

      </Events>
    </Timeline>
  </div>);
};

export default TimeLine;
