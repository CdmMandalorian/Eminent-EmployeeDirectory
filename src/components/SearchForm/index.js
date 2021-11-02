import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function SearchForm({ id, name, contactNumber, email, dob, handleFilterChange }) {
  return (
    <div>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label name ="firstName">First Name</Form.Label>
                <Form.Control type="name" placeholder="Enter First Name"
                    onChange={handleFilterChange} 
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label name ="lastName">Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Last Name"
                    onChange={handleFilterChange} 
                    />
                </Form.Group>
            </Form.Row>
            
            <Button variant="primary" type="submit"
                onClick={handleFilterChange}
                >
                Submit
            </Button>
        </Form>
    </div>
  );
}

export default SearchForm;