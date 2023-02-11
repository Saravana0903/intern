import React from 'react'
import {MdOutlineConstruction} from "react-icons/md"
import {FcMoneyTransfer,FcServices} from "react-icons/fc"
import {GrAnalytics,GrAnnounce} from "react-icons/gr"
import {SiMarketo,SiHomeadvisor} from "react-icons/si"
import './Home.css'

function Home() {
  return (
    <div>
    <div className='home-con1'>
      <div className='container'>
        <div className='row'>
            <div className='col-12 des-div order-2 order-lg-1 col-lg-6'>
                <h1 className='head-con1'>
                    We are Consulting For Your Business Finances
                </h1>
                <p className='text-dark'>
                    we offer business finance services to the community on a large scale.
                </p>
                <button className="btn btn-primary">Start Now</button>
            </div>
            <div className='col-12 col-lg-6 order-1 order-lg-2 img-div'>
                <img src="https://img.freepik.com/free-photo/businessman-showing-changes-report_1098-3504.jpg?w=740&t=st=1676100935~exp=1676101535~hmac=b9dcab013ea1711f4feba8b1319b571fb14031d04e09281433844a69ed15937c" className='con1-pic' />
            </div>
        </div>
    </div>
    </div>
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-12 des-div order-2 order-lg-1 col-lg-6'>
                <h1 className='head-con2'>
                    We have Many Year Experience in Consultant Business
                </h1>
                <p className='text-dark'>
                    we offer business finance services to the community on a large scale.
                </p>
                <button className="btn btn-primary">Know more</button>
            </div>
            <div className='col-12 col-lg-6 order-1 order-lg-2 img-div'>
                <img src="https://img.freepik.com/free-photo/successful-entrepreneurs-analyzing-perspectives_1163-5270.jpg?w=740&t=st=1676101196~exp=1676101796~hmac=3fe0e80ee1f949304aa402a327ccf87e8240d5ce74a53099475443dd3a7f51d3" className='con1-pic' />
            </div>
        </div>
    </div>  
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-12 col-lg-3'>
                <div className='icon-div'>
                    <FcMoneyTransfer className='icons-sec'/>
                    <p className='icon-des'>Random <span className='span-ele'>Brand</span> </p>
                </div>
            </div>
            <div className='col-12 col-lg-3'>
                <div className='icon-div'>
                    <GrAnalytics className='icons-sec'/>
                    <p className='icon-des'><span className='span-ele'>Construct</span>ion</p>
                </div>
            </div>
            <div className='col-12 col-lg-3'>
                <div className='icon-div'>
                    <FcServices className='icons-sec'/>
                    <p className='icon-des'><span className='span-ele'>Random</span> Logo </p>
                </div>
            </div>
            <div className='col-12 col-lg-3'>
                <div className='icon-div'>
                    <MdOutlineConstruction className='icons-sec'/>
                    <p className='icon-des'>Dummy <span className='span-ele'>Logo</span></p>
                </div>
            </div>
        </div>
    </div>
    <div className='con-3 pt-5 pb-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='text-center'>Our Services</h1>
                <p className='text-primary text-center'>________________</p>
                <p  className='text-center'>We offer many services in the business and consultancy sector.</p>
            </div>
        </div>
        <div className='row pb-4 mt-3'>
            <div className='col-12 mt-3 col-lg-4'>
                <div className='card-con p-4' >
                    <SiMarketo  className='features' />
                    <h5 className='mt-3'>Financial Consulting</h5>
                    <p className='mt-3'>we offer financial consulting services</p>
                </div>
            </div>
            <div className='col-12 mt-3 col-lg-4'>
                <div className='card-con p-4'>
                    <GrAnnounce  className='features' />
                    <h5 className='mt-3'>Content Marketing</h5>
                    <p className='mt-3'>we offer marketing services </p>
                </div>
            </div>
            <div className='col-12 mt-3 col-lg-4'>
                <div className='card-con p-4'>
                    <SiHomeadvisor  className='features' />
                    <h5 className='mt-3'>Finance Advice</h5>
                    <p className='mt-3'>we give financial advices </p>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 text-center'>
                <button className='btn btn-primary'>All Services</button>
            </div>
        </div>
    </div>
    </div>
    <div className='footer-con pt-4 pb-4 mb-3'>
       <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-6'>
               <h1 className='text-light'>subsribe Our Newsletter</h1>
               <h1 className='text-light'>For More Update</h1>
               <p className='text-light'>Do subscribe for Newsletter to recieve more notifications on updates.</p>
            </div>
            <div className='col-12 d-flex flex-column col-lg-6'>
                <input type="email" placeholder="Enter your Email" className='inp-ele' />
                <button className='btn btn-primary sub-btn mt-4' >Subscribe</button>
            </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Home
