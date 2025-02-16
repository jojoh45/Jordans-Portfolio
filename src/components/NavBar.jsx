import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../styles/NavBar.css";

function NavBar() {
  return (
    <Navbar fixed='top'> 
        <Container>
            <Navbar.Brand href="/">Jordan Johnson</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="me-auto">
                    <Nav.Link href="#intro">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                <Nav className='ml-auto'>
                    <Nav.Link href='mailto:jordancjohnson21@gmail.com'>
                        <EmailIcon style={{ fontSize: 20}}/>
                    </Nav.Link>
                    <Nav.Link href='https://github.com/jojoh45'>
                        <GitHubIcon style={{ fontSize: 19 }}/>
                    </Nav.Link>
                    <Nav.Link href='https://www.linkedin.com/in/jordan-johnson-8491a9236'>
                    <LinkedInIcon style={{ fontSize: 21 }}/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavBar;