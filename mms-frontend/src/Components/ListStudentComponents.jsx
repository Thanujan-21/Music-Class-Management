import React, { useEffect, useState } from "react";
import { deleteStudent, listStudent } from "../Services/StudentService";
import { useNavigate } from "react-router-dom";

const ListStudentComponents = () => {
  const [students, setStudents] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllStudents();
  }, []);

  function getAllStudents() {
    listStudent()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewStudent() {
    navigator("/add-Student");
  }

  function updateStudent(id) {
    navigator(`/edit-student/${id}`);
  }

  function removeStudent(id) {
    console.log(id);

    deleteStudent(id)
      .then((response) => {
        getAllStudents();
      })
      .catch();
  }

  return (
    <div className="bg">
      <div className="container">
        <h2 className="text-center">List of Students</h2>
        <button
          type="button"
          className="btn btn-outline-dark mb-2"
          onClick={addNewStudent}
        >
          Add Student
        </button>
        <table className="table table-Light table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Course</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((students) => (
              <tr key={students.id}>
                <th scope="row">{students.id}</th>
                <td>{students.firstName}</td>
                <td>{students.lastName}</td>
                <td>{students.gender}</td>
                <td>{students.email}</td>
                <td>{students.phoneNumber}</td>
                <td>{students.course}</td>
                <td>
                  <button
                    className="btn btn-outline-info me-md-2"
                    onClick={() => updateStudent(students.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeStudent(students.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudentComponents;
