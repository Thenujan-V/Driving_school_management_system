import React, { useState } from 'react'
import EmployeeVerticalNav from './EmployeeVerticalNav'
import { assignDateTime } from '../../Services/practiceService'
import { useParams } from 'react-router-dom'

const AssignDate = () => {
    const sId = useParams()
    const [submit, setSubmit] = useState('')
    const [formData, setFormData] = useState({
        practice_date:'',
        practice_time:'',
        sid:sId.sId
    })
    const handleChange = (e) => {
        setFormData(
            {...formData, [e.target.name] : [e.target.value]}
        )
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await assignDateTime(formData)
            setSubmit(response.data)
        }
        catch(error){
            setSubmit(error)
        }
    }
  return (
    <div style={{display:'flex', Height:'90vh'}}>
        <EmployeeVerticalNav />
        <div className='container assignDate' style={{flex:'1', height:'100vh'}}>
            <h1>Assign Practice Date & Time</h1>
            <form onSubmit={handleSubmit} className='form'>
                <div className="form-control">
                    <label htmlFor="Date" className='form-group'>Practice Date -</label>
                    <input className='form-group' type="date" name='practice_date' id='Date' value={formData.practice_date} onChange={handleChange} required />
                </div>
                <div className="form-control">
                    <label className='form-group' htmlFor="Time">Practice Time -</label>
                    <input className='form-group' type="time" name='practice_time' id='Time' value={formData.practice_time} onChange={handleChange} required/>
                </div>
                <button className='btn form-group' type='submit'>Assign</button>
            </form>
        </div>
    </div>
  )
}

export default AssignDate