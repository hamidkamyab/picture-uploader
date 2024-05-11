import React from 'react'
import * as FA6 from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home d-flex align-items-center vh-100 vw-100 position-relative'>
            
            <div className="uploderSec col-6 h-100" role='button'>
            <Link to={'upload'} className='w-100 h-100 d-flex justify-content-center align-items-center'>
                <div className="uploaderBtn d-flex gap-3 align-items-center text-white">
                    <span className='fs-4'>Image Uploader</span>
                    <FA6.FaUpload size={32} />
                </div>
            </Link>
            </div>
            <div className="gallerySec col-6 h-100" role='button'>
            <Link to={'gallery'}  className='w-100 h-100 d-flex justify-content-center align-items-center'>
                <div className="galleryBtn d-flex gap-3 align-items-center text-white">
                    <span className='fs-4'>Image Gallery</span>
                    <FA6.FaImages size={32} />
                </div>
            </Link>    
            </div>
        </div>
    )
}

export default Home