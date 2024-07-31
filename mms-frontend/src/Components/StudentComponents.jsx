import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createStudent,
  getStudent,
  updateStudent,
} from "../Services/StudentService";

const StudentComponents = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [course, setCourse] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    course: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getStudent(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setGender(response.data.gender);
          setEmail(response.data.email);
          setPhonenumber(response.data.phoneNumber);
          setCourse(response.data.course);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateStudent(e) {
    e.preventDefault();

    if (validateForm()) {
      const student = {
        firstName,
        lastName,
        gender,
        email,
        phoneNumber,
        course,
      };
      console.log(student);

      if (id) {
        updateStudent(id, student)
          .then((response) => {
            console.log(response.data);
            navigator("/student");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createStudent(student)
          .then((response) => {
            console.log(response.data);
            navigator("/student");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorCopy = { ...errors };

    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "First Name is Required";
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last Name is Required";
      valid = false;
    }

    if (gender.trim()) {
      errorCopy.gender = "";
    } else {
      errorCopy.gender = "Gender is required";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email is required";
      valid = false;
    }

    if (phoneNumber.trim()) {
      errorCopy.phoneNumber = "";
    } else {
      errorCopy.phoneNumber = "Phone Number is required";
      valid = false;
    }

    if (course.trim()) {
      errorCopy.course = "";
    } else {
      errorCopy.course = "Course is required";
      valid = false;
    }

    setErrors(errorCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Student</h2>;
    } else {
      return <h2 className="text-center">Add Student</h2>;
    }
  }

  return (
    <div className="bg">
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              {pageTitle()}
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter Student First Name"
                    name="firstName"
                    value={firstName}
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                  {errors.firstName && (
                    <div className="invalid-feedback"> {errors.firstName}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Student Last Name"
                    name="lastName"
                    value={lastName}
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                  {errors.lastName && (
                    <div className="invalid-feedback"> {errors.lastName}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Gender</label>
                  <select
                    className={`form-control ${
                      errors.gender ? "is-valid" : ""
                    }`}
                    id="inputGender"
                    placeholder="Choose..."
                    value={gender}
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Choose ...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.gender && (
                    <div className="invalid-feedback"> {errors.gender}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    placeholder="Enter Student Email"
                    name="email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="integer"
                    placeholder="Enter Student phone number"
                    name="phoneNumber"
                    value={phoneNumber}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  ></input>
                  {errors.email && (
                    <div className="invalid-feedback"> {errors.email}</div>
                  )}
                </div>
                <div className="form-group md-2">
                  <label className="form-label">Course</label>
                  <input
                    type="text"
                    placeholder="Enter Student Course"
                    name="course"
                    value={course}
                    className={`form-control ${
                      errors.course ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setCourse(e.target.value)}
                  ></input>
                  {errors.course && (
                    <div className="invalid-feedback">{errors.course}</div>
                  )}
                </div>
                <br />
                <button
                  className="btn btn-outline-success"
                  onClick={saveOrUpdateStudent}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComponents;
