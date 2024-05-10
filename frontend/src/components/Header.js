import React from 'react'

function Header() {
  return (
    <div className='header py-3 d-flex align-items-center'>
        <div className="container">
            <ul className='menu list-unstyled d-flex align-items-center gap-4 p-0 m-0'>
                <li><a href="http://">صفحه اصلی</a></li>
                <li><a href="http://">آپلود عکس</a></li>
                <li><a href="http://">گالری عکس</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header