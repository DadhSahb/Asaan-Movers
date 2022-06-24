import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
function AddEditForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const history = useHistory();
  const toAdminPage = () => history.push("/admin");

  const postStaff = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/staff", {
        name,
        email,
        contact,
        password,
        type,
      })
      .then((response) => {
        toAdminPage();
      });
  };

  return (
    <Form onSubmit={postStaff} className="col-lg-6 col-md-6 px-5">
      <h3 className="mt-4 mb-5">Add Staff</h3>
      <FormGroup>
        <Label for="name">Full Name</Label>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="first"
          id="first"
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="phone"
        />
      </FormGroup>
      <FormGroup>
        <Label for="contact">Contact</Label>
        <Input
          onChange={(e) => setContact(e.target.value)}
          type="text"
          name="contact"
          id="contact"
        />
      </FormGroup>
      <FormGroup>
        <Label for="jobType">Job Type</Label>
        <select
          name="select"
          onChange={(e) => setType(e.target.value)}
          id="select1"
          required
        >
          <option value="">Select Type</option>
          <option value="WAREHOUSE">Warehouse</option>
          <option value="DOMESTICRELOCATION">Domestic Relocation</option>
          <option value="LOCALRELOCATION">Local Relocation</option>
        </select>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default AddEditForm;
