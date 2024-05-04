import React, { useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { addExamDate } from '../../Services/examServices'
import { useParams } from 'react-router-dom'

const ExamDate = () => {

    const student_id = useParams()
    const id = student_id.sId;
    console.log('sdd :',id)
    
    const [examDate, setExamDate] = useState({
        exam_date:'',
        sid:id
    })
    const addDate = async (e) => {
        e.preventDefault();
        if(examDate){
            try{
                const response = await addExamDate(examDate)
                console.log('succesfully added')
            }
            catch(error){
                console.log('error :',error)
            }
        }
    }
    const handleDateChange = (e) => {
        setExamDate((prevState) => ({
            ...prevState, 
            exam_date: e.target.value 
        }));
    };
    console.log('fd :',examDate)
  return (
    <div style={{display:'flex', minHeight:'10vh', width:'10vw', backgroundColor:'var(--green)'}}>
        <div className='container studentsDetailsShow' style={{flex:'1'}}>
            <form onSubmit={addDate} className='d-flex'>
                <div className="form-group">
                    <input className="form-control" type="date" id='date' value={examDate.exam_date} onChange={handleDateChange} required />
                </div>
                    <input className="form-control" type="hidden" id='userId' value={examDate.sid}/>
                    <button className='btn' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ExamDate