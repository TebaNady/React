import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    
    <div className={`${style.content} fixed-bottom`}>
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='text-warning'>Copyright © 2018. All rights reserved by Designer</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
