import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";

export default function Update({ setApiData }) {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact,setContact]=useState("");


  useEffect(() => {
    setId(localStorage.getItem("customerID"));
    setName(localStorage.getItem("customerName"));
    setAddress(localStorage.getItem("address"));
    setContact(localStorage.getItem("contact"));
  }, []);
  console.log(id, name, address,contact);
  const updateAPIData = () => {
    axios
      .put(`https://6269a66bf2c0cdabac118a59.mockapi.io/users/user/${id}`, {
        id,
        name,
        address,
        contact,
      })
      .then(() => {
        window.location.reload();
      });
  };
 

  return (
    <Form className="form">
      <Form.Field>
        <label>Customer ID</label>
        <input
          placeholder="Customer ID" 
          value={id}        
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Customer Name</label>
        <input
          placeholder="customerName"
          value={name} 
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Address</label>
        <input
          placeholder="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Contact Number</label>
        <input
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
      </Form.Field>
      <Button type="submit" onClick={updateAPIData}>
        Update
      </Button>
    </Form>
  );
}