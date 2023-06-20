import React from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Teacherslist({teachers,setTeachers}) {
  let handleDelete = (i)=>{
    let newArray = [...teachers]
    newArray.splice(i,1)
    setTeachers(newArray)
  }
  let navigate = useNavigate()
  return <div className='manage-content'>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Teacher Name</th>
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
          teachers.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.tname}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.sex}</td>
              <td>{e.dob}</td>
              <td>{e.city}</td>
              <td>{e.zipcode}</td>
              <td>
              &nbsp;
              &nbsp;
              <i className="fa-solid fa-user-pen fa-xl" onClick={()=>navigate(`/edit-teacher/${i}`)}></i>
              &nbsp;
              &nbsp;
              &nbsp;
              <i className="fa-solid fa-user-minus fa-xl" onClick={()=>handleDelete(i)}></i>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>

    <div className='add-button'>
      <Button variant="primary" onClick={() => navigate('/add-teacher')}
      ><i class="fa-solid fa-graduation-cap fa-lg"></i>&nbsp;
        &nbsp;Add Teacher</Button>
    </div>
  </div>
}

export default Teacherslist