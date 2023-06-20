import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  return <>
    <div className='manage-content'>
      <div className='dashboard'>
      <h1 style={{color:"black"}}> Welcome</h1>
      <h2 style={{color:"black"}}>Students & Teachers</h2>
        <div>
          <Button variant="primary" className="student-login" onClick={() => navigate('/student-list')}
          ><i class="fa-solid fa-graduation-cap fa-lg"></i>&nbsp;
            &nbsp;Student Login</Button>
        </div>
        
        <div>
          <Button className="teacher-login" onClick={() => navigate('/teachers-list')}
            variant="primary"><i class="fa-solid fa-user-secret fa-lg"></i>&nbsp;
            &nbsp;Teacher Login</Button></div>
      </div>
    </div>


  </>
}

export default Home