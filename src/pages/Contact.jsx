import { useState, useEffect } from 'react'
import React from 'react'
import { Helmet } from 'react-helmet'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>KI Contact Page</title>
                <meta name="description" content="This is my description of my home page" />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
            </Helmet>

            <h1 className='header-styles'>Contact Karunai Illam</h1>
            {/* <div id="homeCont" className='d-flex-wrap'>
                <Posts posts={posts} />
            </div> */}
        </>
    )
}

export default Contact