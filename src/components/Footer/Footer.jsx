import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1 className='text-white'>Multimart</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maxime vero
              accusamus iure sunt omnis iusto, libero beatae laboriosam ipsum?
            </p>
          </Col>
          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick__links">Top Cate</h4>
              <ListGroup className='mb-3 footer'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='Link' to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='Link'to="#">Modern sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='Link' to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='Link' to="#">Smart Wathes</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
          <div className="footer_quick-links">
              <h4 className="quick__links">Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='Link' to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='Link' to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='Link' to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className='Link' to="">Privacy Policy</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
          <div className="footer_quick-links">
              <h4 className="quick__links">Contact</h4>
              <ListGroup  className='footer_contact'>
                <ListGroupItem className='ps-0 border-0'>
                <span><i className='ri-map-pin-line'></i></span>
                <p>123 ZindaBazar,Syhlet,Bangladesh</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                <span><i className='ri-phone-line'></i></span>
                <p>+0881234567890</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                <span><i className='ri-mail-line'></i></span>
                <p>example12345@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
