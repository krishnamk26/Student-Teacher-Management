import React from 'react'
import Table from 'react-bootstrap/Table';


function Dashboard({ teachers, users }) {

  return <div className='manage-content'>

    <Table striped bordered hover>
      <thead>
        <tr >
          <th>#</th>
          <th >Teacher Name</th>
          <th>Action</th>
          <th>Students Name</th>
        </tr>
      </thead>
      <tbody>
        {
          (teachers).map((e, i) => {
            return <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.tname}</td>
              <td>&nbsp;
                &nbsp;<i class="fa-solid fa-user-plus"></i>
                &nbsp;
                &nbsp;
                <i class="fa-solid fa-user-pen"></i>
              </td>
              <td> {
                users.map((e, i) => {
                  return <tr>
                    <td key={i}>{e.sname}</td>
                  </tr>
                })
              }</td>
            </tr>
            // {
            //   users.map((e, i) => {
            //     return <tr key={i}>
            //       <td>{e.sname}</td>
            //     </tr>
            //   })
            // }
          })
        }
        {/* <tr>
          <td>1</td>
          <td>Nagarajan</td>
          <tr><td>krishna</td>
          <td>deepan</td></tr>
        </tr>
        <tr>
          <td>2</td>
          <td>Mohan</td>
          <tr><td>viji</td>
          <td>karthi</td></tr>
        </tr>
        <tr>
          <td>3</td>
          <td>sangeetha</td>
          <tr><td>kumar</td>
          <td>udesh</td></tr>
          
        </tr> */}
      </tbody>
    </Table>
  </div>
}

export default Dashboard

// function add ()
// let {sname,setSname}=useState("")

//     let navigate = useNavigate()
//     let params = useParams()
//     //console.log(params)

//     useEffect(()=>{
//         if(params.id !==undefined){
//             setSname(users[params.id].sname)
//         }
//     },[params.id,users])