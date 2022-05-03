import React, {useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import {  Link } from "react-router-dom";

export default function Read({ setFlag,apiData,setApiData }) {
  const [searchData, setSearchData] = useState("");

  //Read data from API
  useEffect(() => {
    axios.get("https://6269a66bf2c0cdabac118a59.mockapi.io/users/user")
      .then((response) => setApiData(response.data))
      .catch((e) => console.log(e));
  }, [setApiData]);
  console.log(apiData);

  const getData = () => {
    axios.get(`https://6269a66bf2c0cdabac118a59.mockapi.io/users/user`).then(
      (getData) => {
        setApiData(getData.data);
      }
    );
  };
  //Delete data from api
  const deleteFun = (id) => {
    axios.delete(
      `https://6269a66bf2c0cdabac118a59.mockapi.io/users/user/${id}`
    ).then(() => {
      getData();
    });
  };
  //post the data in localStorage using updateData function
  const updateData = (data) => {
    console.log(data);
    //get the data using object destructuring
    let { id, name, address, contact } = data;
    localStorage.setItem("customerID", id);
    localStorage.setItem("customerName", name);
    localStorage.setItem("address", address);
    localStorage.setItem("contact", contact);
  };

   //search functionality for the customer details
   const handleSearch = (listData, searchValue) => {
    let filteredData = [];
    if (!searchValue.trim()) {
      filteredData = listData;
    } else {
      filteredData = listData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.id.includes(searchValue)
      );
    }
    return filteredData;
  };

  return (
    <div>
      <div className="ui left aligned category search">
  <div className="ui icon input">
    <input className="prompt" type="text" placeholder="Search customer..." onChange={(e) => setSearchData(e.target.value)} />
    <i className="search icon"></i>
  </div>
  <div className="results"></div>
</div>
       {/* <h1>CRM Template</h1> */}
    <Link to="/create">Add new customer</Link>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>customer ID</Table.HeaderCell>
          <Table.HeaderCell>customer Name</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Contact Number</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {handleSearch(apiData, searchData).map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.address}</Table.Cell>
              <Table.Cell>{data.contact}</Table.Cell>             
              <Table.Cell>
                <Button
                  onClick={() => {
                    setFlag((prev) => !prev);
                    updateData(data);
                  }}
                > <Link to="/update">Update</Link>
                  
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    deleteFun(data.id);
                  }}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
    </div>
  );
}