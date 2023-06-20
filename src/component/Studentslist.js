import React from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Studentslist({ users, setUsers }) {
  let handleDelete = (i) => {
    let newArrays = [...users]
    newArrays.splice(i, 1)
    setUsers(newArrays)
  }
  let navigate = useNavigate()
  return <div className='manage-content'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>Sex</th>
          <th>DOB</th>
          <th>City</th>
          <th>Zip Code</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {
          users.map((e, i) => {
            return <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.sname}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.sex}</td>
              <td>{e.dob}</td>
              <td>{e.city}</td>
              <td>{e.zipcode}</td>
              <td>
                &nbsp;
                &nbsp;
                <i className="fa-solid fa-user-pen fa-xl" onClick={() => navigate(`/edit-student/${i}`)}></i>
                &nbsp;
                &nbsp;
                &nbsp;
                <i className="fa-solid fa-user-minus fa-xl" onClick={() => handleDelete(i)}></i>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>

    <div className='add-button'>
      <Button variant="primary" onClick={() => navigate('/add-student')}
      ><i class="fa-solid fa-graduation-cap fa-lg"></i>&nbsp;
        &nbsp;Add Student</Button>
    </div>
  </div>
}

export default Studentslist

