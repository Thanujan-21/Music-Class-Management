import React, { useEffect, useState } from "react";
import { ListTeacher, deleteTeacher } from "../Services/TeacherService";
import { useNavigate } from "react-router-dom";

const ListTeacherComponents = () => {
  const [teachers, setTeachers] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllTeachers();
  }, []);

  function getAllTeachers() {
    ListTeacher()
      .then((response) => {
        setTeachers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewTeacher() {
    navigator("/add-teacher");
  }

  function updateTeacher(id) {
    navigator(`/edit-teacher/${id}`);
  }

  function removeTeacher(id) {
    console.log(id);

    deleteTeacher(id)
      .then((response) => {
        getAllTeachers();
      })
      .catch.error(error);
  }

  return (
    <div className="bg">
      <div className="container">
        <h2 className="text-center">List of Teachers</h2>
        <button
          type="button"
          className="btn btn-outline-dark mb-2"
          onClick={addNewTeacher}
        >
          Add Teacher
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
              <th scope="col">Qualification</th>
              <th scope="col">Course</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <th scope="row">{teacher.id}</th>
                <td>{teacher.firstName}</td>
                <td>{teacher.lastName}</td>
                <td>{teacher.gender}</td>
                <td>{teacher.email}</td>
                <td>{teacher.phoneNumber}</td>
                <td>{teacher.qualification}</td>
                <td>{teacher.course}</td>
                <td>
                  <button
                    className="btn btn-outline-info me-md-2"
                    onClick={() => updateTeacher(teacher.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeTeacher(teacher.id)}
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

export default ListTeacherComponents;
