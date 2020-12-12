import React, { useState } from "react";
import "./Landing.scss";
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import { IconContext } from "react-icons";
import { Link as Scroller } from "react-scroll";
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Landing = () => {
  const [hideArrow, setHideArrow] = useState();
  const [hideArrow2, setHideArrow2] = useState();


  const landingOne = (
    <InView threshold={0}>
      {({ inView, ref }) => (
        <div ref={ref} className="landing-one-container" name='landing-one'>
          <div className="inner">
            <div className="left">
              <div className="texts">
                <h1 className="line-one">Your Favorite Players'</h1>
                <h2 className="line-two">Stats at Your Finger Tips!</h2>
                <h3 className="description">
                  <span>NumbersBA&#174;</span> is a super simple and powerful
                  tool for visualizing NBA players' most up-to-date stats. We
                  offer side-by-side player-to-player comparisons so you can rub
                  in how much better your player is than your friends' player!
                </h3>
              </div>

              <div className="button-container">
                <Link className="landing-button" to="/stats">
                  Get Started
                </Link>
              </div>
              <div className="reviews-container">
                <div className="review">
                  <h3 className="review-text">
                    "Reliable and accurate up-to-date stats easily accessible."
                  </h3>
                  <h4 className="review-by">&mdash; TallStreet Journal</h4>
                </div>
                <div className="review">
                  <h3 className="review-text">
                    "Quick and easy information to prove your point!"
                  </h3>
                  <h4 className="review-by">&mdash; Yamazon.com</h4>
                </div>
                <div className="review">
                  <h3 className="review-text">
                    "Can't believe we didn't discover this app sooner! Best
                    statistics site!"
                  </h3>
                  <h4 className="review-by">&mdash; NoOneSaidThis</h4>
                </div>
                <div className="review">
                  <h3 className="review-text">
                    "Your go-to site if you're in need for quick and accurate
                    stats!"
                  </h3>
                  <h4 className="review-by">&mdash; HeadBook Inc.</h4>
                </div>
              </div>
            </div>
            <div className="right">
              <img
                className={`lebron-img ${inView && "show-lebron"}`}
                src="https://nba-project.s3.amazonaws.com/lebronImg.png"
                alt="lebron"
              />
            </div>
          </div>

          <div className="arrow-container">
            <Scroller
              activeClass="active"
              to="landing-two"
              smooth={true}
              duration={1000}
              className={`arrow-outer ${hideArrow && "hide-down-arrow"}`}
            >
              <div className="arrow-inner">
                <IconContext.Provider value={{ className: "arrow-down-icon" }}>
                  <IoIosArrowDown />
                </IconContext.Provider>
              </div>
            </Scroller>
          </div>
        </div>
      )}
    </InView>
  );

  const landingTwo = (
    <InView
      threshold={0.2}
      delay={900}
      onChange={(inView) => setHideArrow(inView)}
    >
      <div className="landing-two-container" name="landing-two">
        <div className="landing-two-background-container">
          <div className="column-1 column"></div>
          <div className="column-2 column"></div>
          <div className="column-3 column"></div>
          <div className="column-4 column"></div>
        </div>

        <div className="inner">
          <div className="left">
            <img
              className={`giannis-img ${hideArrow && "show-giannis"}`}
              src="https://nba-project.s3.amazonaws.com/giannisImg.png"
              alt="giannis"
            />
          </div>
          <div className={`right ${hideArrow && "show-right-two"}`}>
            <div className="column-1 column">Active Players</div>
            <div className="column-2 column">
              <div className="header">
                <IconContext.Provider value={{ className: "arrow-icon" }}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <h2>Detailed</h2>
              </div>
              <div className="text">
                Information including all the small details every fan wants to
                know. We provide players bio, ppg, rpg, apg, ft%, fg%, spg, and
                more!
              </div>
            </div>
            <div className="column-3 column">
              <div className="header">
                <IconContext.Provider value={{ className: "arrow-icon" }}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <h2>Engaging Visuals</h2>
              </div>
              <div className="text">
                No boring numbers. We provide top tier charts for engaging
                experience. Our visuals have been tested numerous times to
                enhance the users experience in every way possible.
              </div>
            </div>
            <div className="column-4 column">
              <div className="header">
                <IconContext.Provider value={{ className: "arrow-icon" }}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <h2>Most Recent</h2>
              </div>
              <div className="text">
                No outdated data. Never be behind. Always stay on top of the
                latest stats. Our data is updated in real-time. So there is no
                possible way they can be out of sync!
              </div>
            </div>
            <div className="column-5 column"></div>
          </div>
        </div>
        <div className="down-arrow-container-2">
          <Scroller
            activeClass="active"
            to="landing-three"
            smooth={true}
            duration={1000}
            className={`arrow-outer ${hideArrow2 && "hide-down-arrow"}`}
          >
            <div className="arrow-inner">
              <IconContext.Provider value={{ className: "arrow-down-icon" }}>
                <IoIosArrowDown />
              </IconContext.Provider>
            </div>
          </Scroller>
        </div>
      </div>
    </InView>
  );

  const landingThree = (
    <InView
      threshold={0.5}
      delay={900}
      onChange={(inView) => setHideArrow2(inView)}
    >
      <div name="landing-three" className="landing-three-container">
      <Scroller
            activeClass="active"
            to="landing-one"
            smooth={true}
            duration={1000}
            className='arrow-outer'
          >
            <div className="arrow-inner">
              <IconContext.Provider value={{ className: "arrow-down-icon" }}>
                <IoIosArrowUp />
              </IconContext.Provider>
            </div>
          </Scroller>
        <div className="inner">
          <div className="left">
            <div className={`texts ${hideArrow2 && "show-left-texts"}`}>
              <h1 className="line-1">Team Standings</h1>
              <h2 className="line-2">Regular and Playoffs</h2>
              <h3 className="description">
                Not only do we provide reliable data for individual players, we
                also administer team related data!
              </h3>
              <div className="bullet-point">
                {" "}
                <IconContext.Provider value={{ className: "arrow-icon" }}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <h3>Seasonal Team Standings</h3>
              </div>
              <div className="bullet-point">
                {" "}
                <IconContext.Provider value={{ className: "arrow-icon" }}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <h3>Seasonal Team Stats</h3>
              </div>
              <div className="bullet-point">
                {" "}
                <IconContext.Provider value={{ className: "arrow-icon" }}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <h3>Playoff Team Standings</h3>
              </div>
            </div>


          </div>
          <div className="right">
            <img
              src="https://nba-project.s3.amazonaws.com/hardenImg2.png"
              alt="harden"
              className={`harden ${hideArrow2 && "show-harden"}`}
            />
          </div>
        </div>
        <Footer />
      </div>
    </InView>
  );
  return (
    <>
      {landingOne}
      {landingTwo}
      {landingThree}
      
    </>
  );
};
