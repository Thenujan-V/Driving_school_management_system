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

    const handleReset = () => {
        setFormData({
            practice_date:'',
            practice_time:'',
            sid:sId.sId
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const datas = {
                practice_date: formData.practice_date[0],
                practice_time: formData.practice_time[0],
                sid:formData.sid
            }
            const response = await assignDateTime(datas)
            setSubmit(response.data)
            alert('successfully assign time')
            handleReset();
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