import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as IO5 from "react-icons/io5";

function Gallery() {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/gallery')
        .then(res=>{
            setImages(res.data.images)
            console.log(res.data.images)
        })
    }, []);

    return (
        <div className='container gallery py-5'>
            <div className="col-12 row">
                {
                    images && images.map((item,index) => (
                        <div className="col-4">
                            <div className="imgBox border border-1 position-relative overflow-hidden" key={index}>
                                <img src={`http://127.0.0.1:8000/galleries/${item.image}`} className="w-100" />
                                <div className='imgBox-b position-absolute w-100 d-flex align-items-center justify-content-between p-2'>
                                    <span className='name'>{item.image}</span>
                                    <IO5.IoTrash className='delete' size={18} role='button' />
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default Gallery