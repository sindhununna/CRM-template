import React, { useState, useEffect, useRef } from "react";
import { Button,Form} from "semantic-ui-react";
import axios from "axios";
import Update from "./Update";
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

const Create = ({ flag, apiData, setApiData }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact,setContact]=useState("");
 
  const idRef = useRef(null);
  useEffect(() => {
    idRef.current.focus();
  }, []);
  if (flag) {
    return <Update apiData={apiData} setApiData={setApiData} />;
  }
  const postData = (event) => {
    event.preventDefault();
    axios
      .post("https://6269a66bf2c0cdabac118a59.mockapi.io/users/user", {
        id,
        name,
        address,
        contact,    
      })
      .then((res) => {
        setApiData([...apiData, res.data]);
        console.log(res.data)
      });
      setId("");
    setName(" ");
    setAddress(" ");
    setContact(" ");
   
  };
  if (flag) {
    return <Update apiData={apiData} setApiData={setApiData} />;
  }
  return (
    <div>
    <h1>Add New Customer</h1>
    <Form className="form">
      <Form.Field>
        <label>Customer ID</label>
        <input
          placeholder="Customer ID" 
          ref={idRef}        
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Customer Name</label>
        <input
          placeholder="Customer Name"         
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Address</label>
        <input
          placeholder="address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Contact Number</label>
        <input
          placeholder="Contact Number"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
      </Form.Field>
      <Button type="submit" onClick={postData}>
      Add Customer
      </Button>
    </Form>
    </div>
  );
};
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
//   return (    
//     <Formik
//       initialValues={{ customerID: '', customerName: '', address: '', contact:'' }}
      
//       validationSchema={Yup.object({
//         customerID: Yup.string()
//           .max(6, 'Must be 6 characters or less')
//           .required('Required'),
//         customerName: Yup.string()
//           .max(20, 'Must be 20 characters or less')
//           .required('Required'),
//         address: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
//         contact:Yup.string()
//         .required("required")
//         .matches(phoneRegExp, 'Phone number is not valid')
//         .min(10, "to short")
//         .max(10, "to long"),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           axios
//       .post("https://6269a66bf2c0cdabac118a59.mockapi.io/users/user", {
//         customerID,
//         customerName,
//         address,
//         contact,    
//       })
//       .then((res) => {
//         setApiData([...apiData, res.data]);
//       });
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//        <Form>
//          <label htmlFor="customerID">Customer ID</label>
//          <Field name="customerID" type="text" />
//          <ErrorMessage name="customerID" />
 
//          <label htmlFor="customerName">Customer Name</label>
//          <Field name="customerName" type="text" />
//          <ErrorMessage name="customerName" />
 
//          <label htmlFor="address">Address</label>
//          <Field name="address" type="text" />
//          <ErrorMessage name="address" />
 
//          <label htmlFor="contact">Contact Number</label>
//          <Field name="contact" type="text" />
//          <ErrorMessage name="contact" />
 
//          <button type="submit">Submit</button>
//        </Form>
//      </Formik>
//    );
//  };
 



export default Create;