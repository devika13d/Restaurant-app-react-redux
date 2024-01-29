import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({ selectedRestaurant }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className='btn btn-warning ms-3' onClick={() => setOpen(!open)}>Click Here To see Reviews</button>
            <Collapse in={open}>
                <div className='my-2 '>
                    <hr />
                    {
                        selectedRestaurant[0]?.reviews.length > 0 ?
                            selectedRestaurant[0].reviews.map((item) => (
                                <div className='mt-3'>
                                    <h6 className='text-warning'>Name: {item.name}</h6>
                                    <h6>Date: {item.date}</h6>
                                    <h6 className='text-success'>Rating: {item.rating}</h6>
                                    <i>Description: "{item.comments}"</i>
                                </div>
                            )) :
                            <p>No reviews found</p>

                    }

                </div>
            </Collapse>
        </>
    )
}

export default RestReview