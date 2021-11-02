import React, { useEffect, useState } from "react";
import { BrowserRouter  as Router } from "react-router-dom"; 
import Table from "react-bootstrap/Table";
import API from "./utils/API";
import Header from "./components/Header";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import TableRow from "./components/TableRow";
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Styles.css';


function App() {
  const [results, setResults] = useState([]); 
   useEffect(() => {    
     API.fetchUsers().then(users => {
      console.log(users.data.results);
      setResults(users.data.results);
    })
    .catch(err => console.log(err));
   }, [] );


  return (
    <Router>
      <div className="App">
      <Header><Navbar></Navbar></Header>
      <Wrapper>
      <Row style={{marginRight:'0px'}}>
      <Col className='sidebar'>
      <Search>
      </Search>
      </Col>
      <Col className='main'>
      <Table fluid>
        <thead>
          <tr>
            <th className='id'>Id</th>
            <th className='pic'>Picture</th>      
            <th className='lN'>Last Name</th>
            <th className='fN'>First Name</th>
            <th className='contact'>Contact Number</th>
            <th className='email'>Email</th> 
            <th className='dob'>DOB</th>
          </tr>
        </thead>
        <tbody>
        {results.map(result => (
        <TableRow
          id={result.id.value}
          picture={result.picture.thumbnail}
          lastName={result.name.last}
          firstName={result.name.first}
          contactNumber={result.phone}
          email={result.email}
          dob={result.dob.date}
        />
      ))}
        </tbody>
        </Table>
        </Col>
        </Row>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
