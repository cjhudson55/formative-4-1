import { useState, useEffect } from 'react'
import React from 'react'
import heroImage from '../assets/image1.jpg'
import { Link, useLocation } from 'react-router-dom'
import Helmet from 'react-helmet'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>KI Home Page</title>
                <meta name="description" content="This is my description of my home page" />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
            </Helmet>
            <div className='grad1 mt-1'></div>

            <div className='d-flex container'>
                <img src={heroImage} alt='Young Girl' className='hero-image' />
                <div className='hero-content  hero-border'>
                    <h1 className='title pt-2'>Welcome to Karunai Illam Trust </h1><br></br>
                    <p>
                        The Karunai Illam Trust is a New Zealand incorporated charitable trust set up to support the work of the late Jean Watson.<br></br><br></br>

                        In 1987, Wellington writer Jean established a children’s home in the rural town of Nilakottai, in the southern state of Tamil Nadu, India. The home is simply known as the Illam.
                    </p>
                    <div className='hero-buttons'>
                        <button className='button-secondary'>Read More</button>
                        <button className='button-primary'>
                            <Link to='/shop'>donate now </Link>
                        </button>

                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='d-flex'>
                    <div className='box box1'>
                        <div className='p-2'>
                            <h2>What do we do for the kids?</h2><br></br>
                            <p className='light-body'>India is a growing economy, yet most children get fewer than six years of schooling and one in nine is illiterate. Poor diets mean 38% of children under the age of five ...The Illam children receive education and whole child development in a caring environment. They stay in our home and study in nearby government or its aided schools.</p>
                        </div>
                    </div>
                    <div className='box box-pic box2'></div>
                    <div className='box box3'>
                        <div className='p-2'>
                            <h2>Why we do this work?</h2><br></br>
                            <p className='light-body'>India is a growing economy. Yet most children get fewer than six years of schooling and one in nine is illiterate. Poor diets mean that 38% of children under the age of five are so underfed as to damage their physical and mental capacity irreversibly, according to the Global Nutrition Report.” – Economist magazine Jan 13-19 2018.</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='box box-pic box4'></div>
                    <div className='box box5'>
                        <div className='p-2'>
                            <h2>How did this begin?</h2><br></br>
                            <p>Wellington writer, the late Jean Watson, founded the Illam (‘Home’ in Tamil) in 1987 to help poor children in Nilakottai, Tamilnadu, India. The DHAN KARUNAI ILLAM is now a model institution caringly built over 30 years with the support of mostly New Zealanders. The Illam is managed by DHAN a highly regarded Indian development organisation.</p>
                        </div>
                    </div>
                    <div className='box box-pic box6'></div>
                </div>
                <div>
                    <div className='donate-box d-flex'>
                        <div className='donate-box-content-1 p-2'>
                            <h2>Make a donation to Karunai Illam Trust</h2><br></br>
                            <p className='light-body'>You can help us provide access to education for children in need as well as support local initiatives and community development. We can process online donations by credit card and also single or regular donations through online banking.</p>
                        </div>
                        <div className='donate-box-content-2' >
                            <button className='button-primary-alt donate-box-content '>
                                <Link to='/shop'>DONATE NOW</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home 