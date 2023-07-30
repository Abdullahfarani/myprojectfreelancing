import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [ProjectsDone, setAwards] = useState(0);
  const [AwardsWinning, setTotalHours] = useState(0);
  const [YearsExperience, setProjectsComplete] = useState(0);

  const finalValues = {
    happyClients: 56,
    ProjectsDone: 87,
    AwardsWinning: 16,
    YearsExperience: 7,
  };

  const slowMotionInterval = 150;

  useEffect(() => {
    const interval = setInterval(() => {
      setHappyClients((prevValue) =>
        prevValue < finalValues.happyClients ? prevValue + 1 : prevValue
      );

      setAwards((prevValue) =>
        prevValue < finalValues.ProjectsDone ? prevValue + 1 : prevValue
      );

      setTotalHours((prevValue) =>
        prevValue < finalValues.AwardsWinning ? prevValue + 1 : prevValue
      );

      setProjectsComplete((prevValue) =>
        prevValue < finalValues.YearsExperience ? prevValue + 1 : prevValue
      );
    }, 10); // Adjust the interval value (in milliseconds) for a smoother or faster counting effect.

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section style={{ margin: '60px' }} id="counter" className="sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="count">
                <span className="fa fa-smile-o"></span>
                <p className="number">{happyClients}</p>
                <h4>Happy Clients</h4>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="count">
                <span className="fa fa-smile-o"></span>
                <p className="number">{ProjectsDone}</p>
                <h4>Projects Done</h4>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="count">
                <span className="fa fa-smile-o"></span>
                <p className="number">{AwardsWinning}</p>
                <h4>Awards Winning</h4>
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="count">
                <span className="fa fa-smile-o"></span>
                <p className="number">{YearsExperience}</p>
                <h4>Years Experience</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
