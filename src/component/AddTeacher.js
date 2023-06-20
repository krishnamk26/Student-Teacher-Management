import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function AddTeacher({teachers,setTeachers}) {
    let [tname,setTname]=useState("")
    let [email,setEmail]=useState("")
    let [mobile,setMobile]=useState("")
    let [sex,setSex]=useState("")
    let [dob,setDob]=useState("")
    let [city,setCity]=useState("")
    let [zipcode,setZipcode]=useState("")

    let navigate = useNavigate()
    let params = useParams()
    useEffect(()=>{
        if(params.id !== undefined)
        {
            setTname(teachers[params.id].tname)
            setEmail(teachers[params.id].email)
            setMobile(teachers[params.id].mobile)
            setSex(teachers[params.id].sex)
            setDob(teachers[params.id].dob)
            setCity(teachers[params.id].city)
            setZipcode(teachers[params.id].zipcode)
        }
    },[params.id,teachers]) //dependency array call for removing warning
    let handleSubmit = () => {
        let newUser = {tname,email,mobile,sex,dob,city,zipcode}
        let newArrays = [...teachers]
        if(params.id !== undefined){
            newArrays.splice(params.id,1,newUser)
        }
        else{
            newArrays.push(newUser)
        }
        setTeachers(newArrays)
        navigate('/teachers-list')
    }
    return <div className='manage-content'>
        <div className='container'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Teacher Name</Form.Label>
                    <Form.Control type="text" placeholder="Teacher Name" value={tname} onChange={(e) => setTname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
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
                                    onChange={(e) => setSex(e.target.value)}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    name="gender"
                                    type={type}
                                    value={"Female"}
                                    onChange={(e) => setSex(e.target.value)}
                                    id={`inline-${type}-2`}
                                />
                            </div >
                        ))}
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>DOB</Form.Label>
                        <Form.Control type="date" placeholder="Enter Your dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="Zip Code" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                    </Form.Group>
                </Row>


                <Button variant="primary" onClick={(e) => handleSubmit()}>
                    Add Teacher
                </Button>
            </Form>
        </div>
    </div>
}

export default AddTeacher