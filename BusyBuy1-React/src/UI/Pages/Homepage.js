import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
function Homepage() {
  const navigate = useNavigate();

  return (
    <Container >
      <Row className="mt-5">
        <Col >
          <h1 className="non-copyable">Welcome to BusyBuy</h1>
          <p className="lead about-container non-copyable">Your one-stop shop for all your needs</p>
          <p className="Finlandica non-copyable ">Get Started <FaArrowTurnDown /> </p>
          <ListGroup  >
            <ListGroup.Item
              action
              onClick={() => navigate('/register')}
              style={{ background: '#000', color: '#fff', cursor: 'pointer', width: 'fit-content' }}
              
            >
              New user? REGISTER <FiUserPlus />
            </ListGroup.Item>
            <ListGroup.Item
              action
              onClick={() => navigate('/login')}
              style={{ background: '#fff', color: '#000', cursor: 'pointer', width: 'fit-content' }}
            >
              Existing user? LOGIN <FaSignInAlt />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
