import React, { useEffect, useState } from 'react';
import AdminVerticalNav from './AdminVerticalNav';
import { addExamDate, show_exam_details } from '../../Services/examServices';
import { useParams } from 'react-router-dom';

const ExamDate = ({ student_id }) => {
    const id = student_id;

    const [examDate, setExamDate] = useState({
        exam_date: '',
        sid: ''
    });

    const [examRes, setExamRes] = useState(null);

    useEffect(() => {
        setExamDate((prevData) => ({
            ...prevData,
            sid: id
        }));
    }, [id]);

    useEffect(() => {
        const fetchExamDetails = async (id) => {
            try {
                const examResponse = await show_exam_details(id);
                setExamRes(examResponse);
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
                await addExamDate(examDate);
                console.log('Successfully added');
                // Fetch the updated exam details after adding the date
                const updatedExamResponse = await show_exam_details(id);
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

    console.log('exam res:', id);

    return (
        <div style={{ display: 'flex', minHeight: '10vh', width: '10vw', backgroundColor: 'var(--green)' }}>
            <div className="container studentsDetailsShow" style={{ flex: '1' }}>
                {!examRes || !examRes.exam_date ? (
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
                    <div className='d-flex' style={{gap:'30px'}}>
                        <p>{new Date(examRes.exam_date).toLocaleDateString()}</p>
                        {
                            examRes && examRes.result === 1 ? (<p style={{color:'yellow'}}>PASS</p>) : examRes && examRes.result === 0 ? (<p style={{color:'red'}}>FAIL</p>) :  (<p style={{color:'wheat'}}>NOT ASSIGND</p>)

                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExamDate;
