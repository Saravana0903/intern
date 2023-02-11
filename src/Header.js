import React from 'react'
import "./Header.css"
import {AiOutlineClockCircle,AiOutlineMail,AiOutlineTwitter,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
function Header() {
  return (
    <div className='bg-con'>
    <div className='container'>
        <div className='row'>
            <div className='col-12 header-con'>
                <div className='icons-con1'>
                    <div className='d-flex flex-row mr-4'>
                    <AiOutlineClockCircle color="white" className='mt-auto mb-auto'/>
                    <p className='icon-para text-light mt-auto mb-auto'>We are open 24/7</p>
                    </div>
                    <p className='mt-auto mb-auto text-light'> | </p>
                    <div className="d-flex flex-row">
                    <AiOutlineMail color="white" className='mt-auto mb-auto'/>
                    <p className='icon-para text-light mt-auto mb-auto'>xyz@gmail.com</p>
                    </div>
                </div>
                <div className='icons-con2'>
                    <AiOutlineTwitter className='mr-3'/>
                    <AiFillLinkedin className='mr-3'/>
                    <AiFillFacebook />
                </div>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Header
