import React, { useEffect, useState } from 'react'
import AdminVerticalNav from './AdminVerticalNav'
import { examEligibleStudents } from '../../Services/paymentService'
import { Link } from 'react-router-dom'
import ExamDate from './ExamDate'
import { addExamDate, show_exam_details } from '../../Services/examServices'
import { addTrialDate, show_trial_details } from '../../Services/TrialServices'


const TrialDate = ({student_id}) => {
    const id = student_id;

    const [examDate, setExamDate] = useState({
        exam_date: '',
        sid: ''
    });

    const [examRes, setExamRes] = useState(null);

    const [attempt, setAttempt] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        examRes && examRes.length > 0 && examRes.map((res) => {
            const attempt = res.attempt
            setAttempt(attempt)

            const trialResult = res.result
            setResult(trialResult)
        })    
    }, [examRes])

    useEffect(() => {
            setExamDate((prevData) => ({
                ...prevData,
                sid: id,
                attempt: attempt + 1
            }));
    }, [id, attempt])


    useEffect(() => {
        const fetchExamDetails = async (id) => {
            try {
                const examResponse = await show_trial_details(id);
                setExamRes(examResponse.data);

            } catch (error) {
                console.log('error:', error);
            }
        };
        fetchExamDetails(id);
    }, [id]);

    const addDate = async (e) => {
        e.preventDefault();
        if (examDate) {
            try {
                await addTrialDate(examDate);
                console.log('Successfully added');

                const updatedExamResponse = await show_trial_details(id)
                setExamRes(updatedExamResponse);
            } catch (error) {
                console.log('error:', error);
            }
        }
    };

    const handleDateChange = (e) => {
        setExamDate((prevState) => ({
            ...prevState,
            exam_date: e.target.value
        }));
    };


  return (
    <div style={{ display: 'flex', minHeight: '10vh', width: '10vw', backgroundColor: 'var(--green)'}}>
            <div className="container studentsDetailsShow" style={{  backgroundColor:'var(--green)' }}>
                {!examRes || (examRes && examRes.length === 0) ? (
                    <form onSubmit={addDate} className="d-flex" style={{ gap: '20px' }}>
                        <div className="form-group">
                            <input
                                className="form-control"  
                                type="date"
                                id="date"
                                value={examDate.exam_date}
                                onChange={handleDateChange}
                                required
                            />
                        </div>
                        <input className="form-control" type="hidden" id="userId" value={examDate.sid} />
                        <button className="btn btn-warning" type="submit">
                            Submit
                        </button>
                    </form>
                ) : (
                    (
                        <div>
                            
                            {
                                attempt < 3 && result === 0 &&
                                <form onSubmit={addDate} className="d-flex" style={{ gap: '20px' }}>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="date"
                                            id="date"
                                            value={examDate.exam_date}
                                            onChange={handleDateChange}
                                            required
                                        />
                                    </div>
                                    <input className="form-control" type="hidden" id="userId" value={examDate.sid} />
                                    <button className="btn btn-warning" type="submit">
                                        Submit
                                    </button>
                                </form>
                            }
                        
                            {examRes && examRes.length > 0 && examRes.map((examRes) => (
                                <div className='text-center' style={{gap:'30px'}}>
    
                                    <p>{new Date(examRes.trial_date).toLocaleDateString()}</p>
                                    {
                                        examRes && (
                                            examRes.result === 1 ? (
                                                <p style={{ color: 'yellow' }}>PASS</p>
                                            ) : examRes.result === 0 ? (
                                                <div className='d-flex flex-column justify-content-center align-items-center mb-3'>
                                                    <p style={{ color: '#B31312', width: '10vw' }}>
                                                        FAIL 
                                                        <span style={{ color: '#071952' }}> 
                                                            (Attempt {examRes.attempt})
                                                        </span>
                                                    </p>
                                                    
                                                </div>
                                            ) : (
                                                <p className='text-center' style={{ color: 'wheat', width: '18vw',  }}>NOT ASSIGNED</p>
                                            )
                                        )
                                    }
    
                                </div>
                            ))}
                        
                        </div>
    
                    )
                )}
            </div>
        </div>
  )
}

export default TrialDate