import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header py-3 d-flex align-items-center'>
        <div className="container">
            <ul className='menu list-unstyled d-flex align-items-center gap-4 p-0 m-0'>
                <li><Link to={'/'}>صفحه اصلی</Link></li>
                <li><Link to={'/upload'}>آپلود عکس</Link></li>
                <li><Link to={'/gallery'}>گالری عکس</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header