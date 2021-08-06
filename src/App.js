import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Form, FormControl, FormGroup, FormLabel, FormText, Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Card.Text></Card.Text>
          <div className="img">
          <Card.Img src="https://i.ytimg.com/vi/1D1VglZW-nI/sddefault.jpg"></Card.Img>
          </div>
        </Card>
        <Container>
          <Form>
            <Row>
              <Col>
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <FormControl type="email" placeholder="Exemple@email.com"></FormControl>
          </FormGroup>
              </Col>
              <Col>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl type="Password" placeholder="Password"></FormControl>
          </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col>
          <FormGroup>
            <FormLabel>First Name</FormLabel>
            <FormControl type="first_name" placeholder="First Name"></FormControl>
          </FormGroup>
              </Col>
              <Col>
          <FormGroup>
            <FormLabel>Last Name</FormLabel>
            <FormControl type="last_name" placeholder="Last Name"></FormControl>
          </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
          <FormGroup>
            <FormLabel>Date of Birth</FormLabel>
            <FormControl type="Date" placeholder="**/**/**"></FormControl>
          </FormGroup>
              </Col>
              <Col>
          <FormGroup>
            <FormLabel>State</FormLabel>
            <FormControl type="City" ></FormControl>
          </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col>
          <FormGroup>
            <FormLabel>Phone Number</FormLabel>
            <FormControl type="tel"pattern="+216[7-9]{2}-[0-9]{3}-[0-9]{4}" value="+216" ></FormControl>
          </FormGroup>
              </Col>
              <Col>
          <FormGroup>
            <FormLabel>Gender</FormLabel>
            <FormControl type="Gender" placeholder="Male/Femal"></FormControl>
          </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col>
          <FormGroup>
            <FormLabel>Type Of Study</FormLabel>
            <FormControl type="University level"  ></FormControl>
          </FormGroup>
              </Col>
              <Col>
          <FormGroup>
            <FormLabel>Current Or Last Educational Institution</FormLabel>
            <FormControl type="Educational Institution" ></FormControl>
          </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col>
          <FormGroup>
            <FormLabel>Status</FormLabel>
            <FormControl placeholder='Student/Jobseeker'  ></FormControl>
          </FormGroup>
              </Col>
              <Col>
          <FormGroup>
            <FormLabel>Professional Experience (years)</FormLabel>
            <FormControl type="number" ></FormControl>
          </FormGroup>
              </Col>
              </Row>
          </Form>
        </Container>
          <br></br>
        <Button>Submite</Button>
        <h1>Thanks For Your Trust</h1>
      </header>
    </div>
  );

  }
export default App;
