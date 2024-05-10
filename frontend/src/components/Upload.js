import React from 'react'
import * as IO5 from "react-icons/io5";

function Upload() {
    return (
        <div className='container upload py-5'>
            <div className="row">
                <div className="col-8">
                    <form action="">
                        <div className="form-group d-flex flex-column gap-2">
                            <label htmlFor="fileInput" className='text-muted'>انتخاب عکس</label>
                            <div className='d-flex align-items-center gap-2'>
                                <input type="file" name="" id="fileInput" className='form-control' />
                                <button className='btn btn-primary' >
                                    آپلود عکس
                                </button>
                            </div>
                            <div className="progress progress-sm" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width: '75%'}}>
                                    75%
                                </div>
                            </div>
                        </div>
                        <div className='fileName my-3 d-flex gap-2'>
                            <span>نام عکس:</span>
                            <span className='text-muted'>test.jpg</span>
                        </div>
                    </form>
                </div>
                <div className="img-box col-4 d-flex justify-content-center position-relative overflow-hidden">
                    <div className='w-75 img-fake d-flex justify-content-center align-items-center position-absolute'>
                        <IO5.IoImageOutline size={60} className='text-muted' />
                    </div>
                    <img src="" alt="" className='w-75' />
                </div>
            </div>
        </div>
    )
}

export default Upload