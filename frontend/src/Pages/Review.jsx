import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Components/Navbar';
import React, { useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { review_add } from '../Services/ReviewServices';


const Review = () => {
  const {user_id} = useParams()
  const navigate = useNavigate()
  console.log('user :', user_id)
  const [review, setReview] = useState('')

  const [rating, setRating] = useState(0);

  const handleStarClick = (star) => {
      if (rating === star) {
        const deleteRating = rating-1
        setRating(deleteRating);
    } else {
        setRating(star);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = {
      rating : rating,
      review : review,
      id : user_id
    }
    try{
      await review_add(data)
      navigate('/')
    }
    catch(error){
      console.log('error', error)

    }
  }
  
  return (
    <>
        <Navbar />
        <div className='container-fluid review'>
          <h1 className='text-center mt-5'>Please provide your valuable rating</h1>
          <div className="input">
            <div style={{ display: 'flex' }} className='stars'>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        style={{
                            cursor: 'pointer',
                            fontSize: '24px',
                        }}
                        onClick={() => handleStarClick(star)}
                    >
                        <FontAwesomeIcon
                            icon={star <= rating ? faStar : faStarEmpty}
                            style={{ color: star <= rating ? 'gold' : 'gold' }}
                            size='3x'
                        />
                    </span>
                ))}
            </div>
            <p className='rating'>Rating given: {rating} out of 5</p>

            <form onSubmit={(e) => handleSubmit(e)} className='d-flex flex-column justify-content-center align-items-center'>
              <textarea type="text" name="reviewMsg" id="reviewMsg" value={review} onChange={(e) => setReview(e.target.value)} placeholder='Write Something............'/>
              <button className='btn btn-warning mt-4 w-50' type='submit' >Submit</button>
            </form>
          </div>
        </div>
    </>
  )
}

export default Review