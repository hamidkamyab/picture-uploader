import axios from 'axios';
import React, { useState } from 'react'
import * as IO5 from "react-icons/io5";
import ProgressBar from './ProgressBar';

function Upload() {
    const [fileName, setFileName] = useState('-')
    const [file, setFile] = useState([])
    const [isActive, setIsActive] = useState(false)
    const [UploadProgress, setUploadProgress] = useState(0)
    const [imgSrc, setImgSrc] = useState(null)
    const [alert, setAlert] = useState(false);
    const [error, setError] = useState(false);
    const [isUpload, setIsUpload] = useState(false);


    const handleSelect = (e) => {
        setFileName(e.target.files[0].name)
        setFile(e.target.files[0])
        setIsActive(true)
    }


    const handleUpload = e => {
        e.preventDefault();
        setIsUpload(true)
        setImgSrc(null)
        const formData = new FormData();
        formData.append('image', file);
        axios.post('http://127.0.0.1:8000/api/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                setUploadProgress(
                    parseInt(Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total))
                )
            }
        })
            .then(res => {
                setError(false)
                if(res.data.status == 200){
                    setImgSrc(res.data.image)
                    setAlert(['عکس با موفقیت آپلود شد :)'])
                }else{
                    setAlert(res.data.msg)
                    setError(true)
                }
                setIsUpload(false)
                setTimeout(() => {
                    setAlert(false)
                }, 5000);
            })
    }

    return (
        <>
            {
                alert &&
                <ul className={`alert ps-5 rounded-0 ${error?'alert-danger':'alert-success'}`}>
                    {alert.map((msg,index)=>(
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            }
            <div className='container upload py-5'>
                <div className="row">
                    <div className="col-8">
                        <form onSubmit={handleUpload} >
                            <div className="form-group d-flex flex-column gap-2">
                                <label htmlFor="fileInput" className='text-muted'>انتخاب عکس</label>
                                <div className='d-flex align-items-center gap-2'>
                                    <input type="file" name="" id="fileInput" className='form-control' onChange={handleSelect} disabled={isUpload} />
                                    <button className='btn btn-primary' disabled={!isActive} >
                                        آپلود عکس
                                    </button>
                                </div>
                                <ProgressBar UploadProgress={UploadProgress} />
                            </div>
                            <div className='fileName my-3 d-flex gap-2'>
                                <span>نام عکس:</span>
                                <span className='text-muted name'>{fileName}</span>
                            </div>
                        </form>
                    </div>
                    <div className="img-box col-4 d-flex justify-content-center position-relative overflow-hidden">
                        {
                            imgSrc == null ?
                                <div className='w-75 img-fake d-flex justify-content-center align-items-center position-absolute'>
                                    <IO5.IoImageOutline size={60} className='text-muted' />
                                </div>
                                :
                                <img src={`http://127.0.0.1:8000/galleries/${imgSrc}`} alt="" className='w-75 border border-2' />
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Upload