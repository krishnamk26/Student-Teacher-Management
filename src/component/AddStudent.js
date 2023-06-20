import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate,useParams } from 'react-router-dom';
import {useEffect} from 'react'

function AddStudent({users,setUsers}) {
    let [sname,setSname]=useState("")
    let [email,setEmail]=useState("")
    let [mobile,setMobile]=useState("")
    let [sex,setSex]=useState("")
    let [dob,setDob]=useState("")
    let [city,setCity]=useState("")
    let [zipcode,setZipcode]=useState("")

    let navigate = useNavigate()
    let params = useParams()
    //console.log(params)
    useEffect(()=>{
        if(params.id !== undefined)
        {
            setSname(users[params.id].sname)
            setEmail(users[params.id].email)
            setMobile(users[params.id].mobile)
            setSex(users[params.id].sex)
            setDob(users[params.id].dob)
            setCity(users[params.id].city)
            setZipcode(users[params.id].zipcode)
        }
    },[params.id,users]) //dependency array call for removing warning
    

    let handleSubmit = ()=>{
        let newUser = {sname,email,mobile,sex,dob,city,zipcode}
        let newArrays = [...users]
        if(params.id !== undefined){
            newArrays.splice(params.id,1,newUser)
        }
        else{newArrays.push(newUser)}
        setUsers(newArrays)
        navigate('/student-list')
    }
    return <div className='manage-content'>
        <div className='container'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control type="text" placeholder="Student Name" value={sname} onChange={(e)=>setSname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Sex</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Male"
                                    name="gender"
                                    type={type}
                                    value={"Male"}
                                    onChange={(e)=>setSex(e.target.value)}
                                    id={`inline-${type}-1`}
                                 />
                                <Form.Check
                                    inline
                                    label="Female"
                                    name="gender"
                                    type={type}
                                    value={"Female"}
                                    onChange={(e)=>setSex(e.target.value)}
                                    id={`inline-${type}-2`}
                                />
                            </div >
                        ))}
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>DOB</Form.Label>
                        <Form.Control type="date" placeholder="Enter Your dob" value={dob} onChange={(e)=>setDob(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="Zip Code" value={zipcode} onChange={(e)=>setZipcode(e.target.value)} />
                    </Form.Group>
                </Row>

                <Button variant="primary" onClick={(e)=>handleSubmit()}>
                    Add Student
                </Button>
            </Form>

        </div >
    </div>
}

export default AddStudent