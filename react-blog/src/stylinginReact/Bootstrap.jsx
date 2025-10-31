import { Button } from "react-bootstrap"
import { Alert } from "react-bootstrap"
import { Navbar, Container,Nav,NavDropdown } from "react-bootstrap"

function Bootstrap() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <h1>Bootstrap</h1>
       <Button>ok</Button>
       <Alert variant="info">Hii,i am Pankaj Yadav , iam a react developer currently working us based startups , fully remotly.</Alert>
    </div>
    
  )
}

export default Bootstrap