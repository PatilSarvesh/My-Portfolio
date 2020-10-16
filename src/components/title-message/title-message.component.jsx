import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
// import "./title-message.styles.css";


const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  color: #000000;

  strong {
    font-size: 1.25em;
   font-family: 'Oswald', sans-serif;
   color: #303960;
   font-size-adjust: auto;
   font-style: italic;
   font-variant: small-caps;
  }
  div {
    color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      color: #7579e7;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Sarvesh Patil</strong>
          </span>
        </div>
        <div className="sub" >
          <Typewriter
            options={{
              strings: ["A Web Developer", "Ethical Hacker", "Learner, you Need!"],
              autoStart: true,
              loop: true,
              delay: 50,

            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
