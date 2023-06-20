import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbars() {
    let navigate = useNavigate()
    return <>
        <div className='nav-wraper'>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand onClick={() => navigate('/home')}>Students & Teachers Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/dashboard')}>Dashboard</Nav.Link>
                        <NavDropdown title="Manage" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate('/student-list')}>Students List</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/teachers-list')}>Teachers List</NavDropdown.Item>
                        </NavDropdown>
                        {/* <NavDropdown title="Add" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate('/add-student')}>Add Students</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate('/add-teacher')}>Add Teacher</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link onClick={() => navigate('/aboutus')}>About us</Nav.Link>
                        <Nav.Link onClick={() => navigate('/contactus')}>Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    </>
}

export default Navbars