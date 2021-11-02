import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SideBar from "../components/SideBar";
import Row from "react-bootstrap/Row"
import SearchResults from "../components/SearchResults";
import SearchForm from "../components/SearchForm";
import Filter from "../components/Filter";
import Sort from "../components/Sort";




function Search() {
  
  const [error, setError] = useState("");
  
  const [userList, setUserList] = useState([]);


  const [filteredList, setFilteredList] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);

  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const handleInitialFilteredList = (data) => {
    //Initially, set the filtered list to the initial results.
    setFilteredList(data);
  }

  //When the page loads or when the limit changes, retrieve new random results.
  useEffect(() => {
    API.fetchUser()
      .then(users => {
        handleInitialFilteredList(users.data.results);
        setUserList(users.data.results);
        console.log(filteredList);
      })
      .catch(error => {
        setError("Something went wrong")
      });
  }, []);

  //Configure the function which will be passed into the sort() function depending on key selected to sort.
  const configureSort = function (fields, reversed, format, sub) {
    let key;

    if (format) {
      key = function (x) {
        if (sub) {
          return format(x[fields][sub]);
        } else {
          return format(x[fields]);
        }
      }
    } else {
      key = function (x) {
        if (sub) {
          return x[fields][sub];
        } else {
          return x[fields];
        }
      }
    }

    console.log(key);

    //If reversed is equal to false, we want to sort ascending. Otherwise, sort descending.
    reversed = !reversed ? 1 : -1;

    //Return the function that will be used in the JavaScript sort() method on the array of employee objects.
    return function (a, b) {
      return a = key(a), b = key(b), reversed * ((a > b) - (b > a));
    }
  }

  const handleSortChange = event => {
    //If the user selects the initial option, don't complete the function.
    if (event.target.value === "") {
      return;
    }

    console.log(event.target.value);
    console.log(filteredList);
    //setFilteredList([]);

    let whichName;
    let isDesc = false;

    if (event.target.value === 'firstNameAsc' || event.target.value === 'firstNameDesc') {
      whichName = 'first';
      if (event.target.value === 'firstNameDesc') {
        isDesc = true;
      }
    } else if (event.target.value === 'lastNameAsc' || event.target.value === 'lastNameDesc') {
      whichName = 'last';
      if (event.target.value === 'lastNameDesc') {
        isDesc = true;
      }
    }

    const newFilteredList = userList.map(employeeObject => Object.assign({}, employeeObject));
    newFilteredList.sort(configureSort('name', isDesc, function (a) { return a.toUpperCase() }, whichName));
    setFilteredList(newFilteredList);
    console.log(filteredList);
  };

  //Handles when a user changes the field to be filtered.
  const handleFilterField = event => {
    //Set the filter field to the field selected.
    setFilterField(event.target.value);
    console.log(`Filter Field: ${filterField}`);
  };

  //Handle when a user changes the "contains" input.
  const handleFilterChange = event => {
    //Don't filter the results if a field is not selected.

    if (!filterField) {
      setFilteredList(userList);
      return;
    }

    if (!event.target.value) {
      setFilteredList(userList);
      return;
    }

    console.log(`Filter Field: ${filterValue}`);

    //Get the value to be searched for.
    setFilterValue(event.target.value);

    console.log(`Current value of filter field: ${filterField}`);

    //Clear the old filtered list
    //setFilteredList([]);
    console.log(event.target, event.target.name);
    //Create the newly filtered list using the field to be filtered and the typed value input.
    if (filterField === "firstName") {
      console.log(`Searching for ${filterValue}`);
      const newFilteredList = userList.filter(employee => employee.name.first.toLowerCase().includes(filterValue.toLowerCase()));
      setFilteredList(newFilteredList);
      console.log(filteredList);
      console.log(userList);
    } else if (filterField === "lastName") {
      console.log(`Searching for ${filterValue}`);
      const newFilteredList = userList.filter(employee => employee.name.last.toLowerCase().includes(filterValue.toLowerCase()));
      setFilteredList(newFilteredList);
      console.log(filteredList);
      console.log(userList);
    }
  };

  //This will handle the change of the highlighted employee.
  const handleEmployeeDataChange = event => {
    const thisEmployee = {
      firstName: event.target.getAttribute("firstname"),
      lastName: event.target.getAttribute("lastname"),
    
    };
    setEmployeeData(thisEmployee);
  }

  //Handle the opening/closing of the modal to display more information about an employee.
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);



  // useEffect(() => {
  //   loadUser();
  // }, []);

 

  // function loadUser() {
  //   API.fetchUser()
  //     .then(user => {
  //       console.log(user.data.results);
      
  //       setUser(user.data.results);
        
  //     })
  //     .catch(err => console.log(err));
  // }


  return (
    <SideBar>
      <div>
        <h3 className="text-center">Employee Directory!</h3>
        <p className="text-center h4">Find any Employee Badge</p>
        <p className="text-center h6">by Filling out Any Section Below</p>
        <SearchForm handleFilterChange={handleFilterChange}>
            
        </SearchForm>
        <Row style={{justifyContent: "center", marginTop: "5%"}}>
        <SearchResults handleBtnClick={{}} result={filteredList} >

        </SearchResults>
        </Row>
      </div>
      </SideBar>
  );
}

export default Search;
