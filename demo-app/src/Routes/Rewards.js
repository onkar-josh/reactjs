import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
//import './form.css'
//import ValidationForm from './ValidationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseFetch from '../hooks/useFetch';
import { Row, Col, Button, Container, Card,ListGroup,ListGroupItem,Jumbotron,Form,Modal } from "react-bootstrap";
const Rewards = () => {
const [hi5,sethi5] = useState(null);
const [data1,setData1] = useState([]);
const [isData,setIsData] = useState(false);
const [validated, setValidated] = useState(false);
const [comment, setComment] = useState(null);
const [recognitionTo, setRecognitionTo] = useState(null);
const [recognitionFor, setRecognitionFor] = useState(null);
const [show, setShow] = useState(false);
let history = useHistory();
if(!isData){
    setIsData(true);
    const fetchOptions = {
        method: "GET",
       headers: new Headers({
         "Content-Type": "application/json",
       })
       };
    UseFetch("https://reqres.in/api/users?page=2",fetchOptions
    ).then(response => {
      console.log(response.data);
      setData1(response.data);
    });
}

const checkfunction = (event) =>{
  console.log(event.currentTarget.checkValidity());
  event.preventDefault();
  const formData = new FormData(event.target);
  setComment(formData.get("comment"));
  setRecognitionFor(formData.get("recognitionFor"));
  setRecognitionTo(formData.get("recognitionTo"));
 

  console.log(formData.get("recognitionTo"));
  console.log(formData.get("recognitionFor"));
  console.log(formData.get("comment"));
  console.log(hi5);
 setValidated(true);
 setShow(true);
}

const handleOnChange = (event) => {
  sethi5(event.target.value);
}
if(comment && recognitionFor && recognitionTo)
{
  const handleClose = () => {
    setShow(false);
    history.push('/login')}
return(
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello</Modal.Title>
        </Modal.Header>
<Modal.Body>you have given recognition to  Mr.<b> {recognitionTo} </b> for <b>{recognitionFor}</b> with special comment as<br/> <b>{comment}</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
);
  }

    return(
<>
<Jumbotron fluid style={{padding: "2rem 24rem", "margin-bottom": "0"}}>
  <Container>
    <h1>Give Rewards </h1>  
  </Container>
</Jumbotron>
<Row>
<Col></Col>
<Col xs={6}>
          <Form noValidate validated={validated} onSubmit={checkfunction}>
            <Card
              className="border border-primary mt-4 bg-light grey"
            >
              <Card.Header className="d-flex justify-content-around" style={{"height":"100px"}}>
              <Autocomplete
                id="combo-box-demo"
                name="recognitionTo"
                options={data1}
                getOptionLabel={(option) => option.email}
                style={{ width: 250, height: 50, 'margin-left':300, 'margin-top':10  }}
                renderInput={(params) => <TextField required name="recognitionTo" {...params} label="Give Recognation To" variant="outlined"/>}
                
              />
              </Card.Header>
              <Card.Body className="h-50 p-3 ml-5 mr-5 font-italic text-left">
              <Autocomplete
                id="combo-box-demo"
                name="recognitionFrom"
                options={data1}
                getOptionLabel={(option) => option.email}
                style={{ width: 250, height: 50, 'margin-left':275, 'margin-top':10  }}
                renderInput={(params) => <TextField {...params} required name="recognitionFor" label="Give Recognation For" variant="outlined"/>}
              />
                <Card.Text>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Add Comments for recognition</Form.Label>
                  <Form.Control required name="comment" as="textarea" rows="3" errorMessage = "comment is required" />
                  <Form.Control.Feedback type="invalid">{"comment is required"}</Form.Control.Feedback>
                   </Form.Group>
                  <h3></h3>
                </Card.Text>
                <Card.Text className="text-primary font-weight-lighter">
                  <h5></h5>
                </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                  <h4 style={{"margin-right": "-38px"}}>Give hi5</h4>
                <Button name="hi5" value="hi5" variant="outline" style={{"margin-left":"-75px"}} onClick={(event) => {
                  handleOnChange(event);
                }}>🖐</Button>{' '}
                <br/>
                <Button variant="primary" type="submit">
                submit
                </Button>
              </Card.Footer>
              
            </Card>
            </Form>
        </Col>
        <Col></Col>
</Row>
</>
    )
};
export default Rewards;



/*<ListGroup>
      <div>{data1 && data1.map((item, index) => {
        return <ListGroupItem key={index}>
     name :{item.first_name}<br/>
     email :{item.email}
     </ListGroupItem>;
       })} </div>
       </ListGroup> */
      
/*
       import React, { useState, useReducer, useEffect } from "react";
       import { Form, Button, Col, Row, Card, InputGroup } from "react-bootstrap";
     //  import reducer from "components/reducers/createRecognitionReducer";
       //import { setDetails } from "components/actions/createRecognitionAction";
       import { string, object } from "yup";
       import PropTypes from "prop-types";
       
       const initialState = {
         user: "",
         coreValue: "",
         description: "",
       };
       
       const Rewards = (props) => {
         const {
           userPlaceholder, // eslint-disable-line react/prop-types
           users, // eslint-disable-line react/prop-types
           coreValue, // eslint-disable-line react/prop-types
           textareaPlaceholder, // eslint-disable-line react/prop-types
           coreValuePlaceholder, // eslint-disable-line react/prop-types
         } = props; // eslint-disable-line react/prop-types
         const [state, dispatch] = useReducer(reducer, initialState);
         const [isLoading, setIsLoading] = useState(false);
         const [validated, setValidated] = useState(false);
         const [labelData, setLabelData] = useState("");
       
         useEffect(() => {
           console.log("Loading the page  " + isLoading); // eslint-disable-line no-console
         });
       
         const handleSubmit = (event) => {
           const form = event.currentTarget;
           if (form.checkValidity() === false) {
             event.preventDefault();
             event.stopPropagation();
           } else {
             setIsLoading(true);
             let schema = object().shape({
               user: string().required(),
               coreValue: string().required(),
               description: string().required(),
             });
             schema
               .isValid({
                 user: state.user,
                 coreValue: state.coreValue,
                 description: state.description,
               })
               .then(function (valid) {
                 if (valid) {
                   setIsLoading(false);
                 } else {
                   setIsLoading(false);
                 }
               });
           }
           setValidated(true);
         };
       
         const handleOnChange = (e) => {
           if (state.coreValue !== "" && state.user !== "") {
             setLabelData(
               `rewarding for @` + state.user + " with #" + state.coreValue
             );
           } else if (state.user !== "") {
             setLabelData(`rewarding for @` + state.user);
           }
           const { value, name } = e.target;
           let updatedValues = {};
           updatedValues[name] = value;
           dispatch(setDetails(updatedValues));
         };
       
         return (
           <Row className="mt-5">
             <Col xs="3"></Col>
             <Col xs="6">
               <Card>
                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
                   <Card.Header>
                     <Form.Row>
                       <Form.Group className="font-italic text-info " as={Col}>
                         <center> Give Recognition </center>
                       </Form.Group>
                     </Form.Row>
                     <Form.Row>
                       <Form.Group as={Col} controlId="validationCustom01">
                         <InputGroup>
                           <InputGroup.Prepend size="sm">
                             <InputGroup.Text id="inputGroupPrepend">
                               @
                             </InputGroup.Text>
                           </InputGroup.Prepend>
                           <Form.Control
                             list="userList"
                             name="user"
                             placeholder={userPlaceholder}
                             value={state.user}
                             onChange={(event) => {
                               handleOnChange(event);
                             }}
                             required
                           />
                           <Form.Control.Feedback type="invalid">
                             Please select a user.
                           </Form.Control.Feedback>
                         </InputGroup>
                       </Form.Group>
                       <datalist id="userList">
                         {users.map((person) => (
                           <option>{person.name}</option> // eslint-disable-line react/jsx-key
                         ))}
                       </datalist>
                       <Form.Group as={Col} controlId="validationCustom02">
                         <InputGroup>
                           <InputGroup.Prepend size="sm">
                             <InputGroup.Text id="inputGroupPrepend">
                               #
                             </InputGroup.Text>
                           </InputGroup.Prepend>
                           <Form.Control
                             list="coreValueList"
                             name="coreValue"
                             placeholder={coreValuePlaceholder}
                             aria-describedby="inputGroupPrepend"
                             onChange={(event) => {
                               handleOnChange(event);
                             }}
                             value={state.coreValue}
                             required
                           />
                           <Form.Control.Feedback type="invalid">
                             Please select a core value.
                           </Form.Control.Feedback>
                         </InputGroup>
                       </Form.Group>
                       <datalist id="coreValueList">
                         {coreValue.map((sample) => (
                           <option>{sample.value}</option> // eslint-disable-line react/jsx-key
                         ))}
                       </datalist>
                     </Form.Row>
                   </Card.Header>
                   <Card.Body>
                     <Form.Row>
                       <Form.Group as={Col} controlId="validationCustom03">
                         <Form.Label className="font-italic text-info">
                           * Description
                         </Form.Label>
                         <br />
                         <Form.Label className="font-italic text-info">
                           {labelData}
                         </Form.Label>
                         <Form.Control
                           as="textarea"
                           name="description"
                           rows="3"
                           placeholder={textareaPlaceholder}
                           onChange={(event) => {
                             handleOnChange(event);
                           }}
                           value={state.description}
                           required
                         ></Form.Control>
                         <Form.Control.Feedback type="invalid">
                           Please write a description.
                         </Form.Control.Feedback>
                       </Form.Group>
                     </Form.Row>
                   </Card.Body>
                   <Card.Footer>
                     <Form.Row>
                       <Col className="font-italic text-danger"></Col>
                       <Col></Col>
                       <Col>
                         <div className={isLoading ? "d-none" : "error"}>
                           <Button className="float-right" type="submit">
                             Give Hi5
                           </Button>
                         </div>
                         <div
                           className={
                             isLoading ? "spinner-border float-right" : "d-none"
                           }
                         ></div>
                       </Col>
                     </Form.Row>
                   </Card.Footer>
                 </Form>
               </Card>
             </Col>
             <Col xs="3"></Col>
           </Row>
         );
       };
       Rewards.propTypes = {
         users: PropTypes.array,
         coreValue: PropTypes.array,
       };
       
       Rewards.defaultProps = {
         errorMesage: null,
         users: [
           { name: "ajay", key: 1 },
           { name: "rahul", key: 2 },
           { name: "amol", key: 3 },
         ],
         coreValue: [
           { value: "abcd", key: 4 },
           { value: "pqrs", key: 5 },
           { value: "xyz", key: 6 },
         ],
         userPlaceholder: "Select user",
         coreValuePlaceholder: "Select core value",
         textareaPlaceholder: "Write a description",
       };
       
       export default Rewards;
        */