import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as IO5 from "react-icons/io5";
import Footer from './Footer';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner';

function Gallery() {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleDelImg = async(id) => {
        await axios.get(`http://127.0.0.1:8000/api/delete/${id}`)
            .then(res => {
                if (res.status == 200) {
                    document.querySelector('#img-' + id).remove();
                    toast.success("عکس با موفقیت حذف شد", { position: 'bottom-right' })
                } else {
                    toast.error("خطایی رخ داد لطفا مجدد تلاش کنید", { position: 'bottom-right' })
                }
            })
    }
	
	const handleShowImg = async()=>{
		await axios.get('http://127.0.0.1:8000/api/gallery')
            .then(res => {
                setImages(res.data.images)
                setIsLoading(false)
        })
	}

    useEffect(() => {
        return () => {
			handleShowImg()
		};
    }, []);

    return (
        <>
            <Header />

            <ToastContainer />


            <div className='container gallery py-2 d-flex align-items-center justify-content-center'>
                {
                    isLoading && isLoading ?
                        <Spinner />
                        :
                        <div className="col-12 row">
                            {
                                images && images.map((item, index) => (
                                    <div className="col-4 my-3" key={index} id={`img-${item.id}`}>
                                        <div className="imgBox border border-1 position-relative overflow-hidden">
                                            <img src={`http://127.0.0.1:8000/galleries/${item.image}`} className="w-100" />
                                            <div className='imgBox-b position-absolute w-100 d-flex align-items-center justify-content-between p-2'>
                                                <span className='name'>{item.image}</span>
                                                <span onClick={() => handleDelImg(item.id)} role='button'>
                                                    <IO5.IoTrash className='delete' size={18} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                }

            </div>
            <Footer />
        </>
    )
}

export default Gallery