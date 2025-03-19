import React, { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
// import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import './LandingStyles.css';
import { userLoginReducer } from '../../reducers/userReducers';
import { useSelector } from 'react-redux';
import { Particles } from '../../components/Particles';

function LandingPage() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginReducer;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/mynotes');
    }
  }, [navigate, userInfo]);

  return (
    <div className="main position-relative min-vh-100">
      <Particles
        className="position-absolute w-100 h-100"
        quantity={300}
        staticity={10}
        ease={30}
        color="#007bff"
        size={1}
        vx={0.2}
        vy={0.3}
      />
      <Container className="position-relative">
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Vault</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  <span>Login</span>
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  <span>Signup</span>
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
