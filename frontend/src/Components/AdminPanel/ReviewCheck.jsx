import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminVerticalNav from './AdminVerticalNav'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { reviewCheck } from '../Styles';
import { get_review } from '../../Services/ReviewServices';

const ReviewCheck = () => {
    const [getReview, setGetReview] = useState([])

    useEffect(() => {
        const fetchReview = async() => {
            try{
                const review = await get_review()
                setGetReview(review.data)
            }
            catch(error){
                console.log('error :', error)
            }
        }
        fetchReview()
    },[])
    console.log(getReview)

  return (
        <div style={{flex:1}} className='container reviews'>
            <h1>CUSTOMER MANAGEMENT</h1>
            {
                getReview &&
                <div className='details mt-5' style={{ backgroundColor:'var(--green)' ,minHeight:'120vh'}}>
                    {
                        getReview.map((review) => (
                            <div className="row m-0 d-flex justify-content-center mt-2" >
                                <p className='col-lg-2 col-md-3 col-3'>{review.id}</p>
                                <p className='col-lg-6 col-md-6 col-6 name'>{review.review}</p>
                                <div style={{ display: 'flex' }} className='col-lg-4 stars'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: '24px',
                                            }}
                                            // onClick={() => handleStarClick(star)}
                                        >
                                            
                                            <FontAwesomeIcon
                                                icon={star <= review.rating ? faStar : faStarEmpty}
                                                style={{ color: star <= review.rating ? 'gold' : 'gold' }}
                                                size='xl'
                                            />
                                        </span>
                                    ))}
                                </div>  
                                {/* <Link className='btn col-lg-2 col-md-3 col-3 delete'>delete</Link> */}
                            </div>
                        ))
                    }
                </div>
            }
        </div>
  )
}

export default ReviewCheck