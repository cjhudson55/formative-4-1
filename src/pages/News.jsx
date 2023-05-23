import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const News = () => {

    const [posts, setPosts] = useState(null)
    // const endpoint = `${baseUrl}/posts?categories=16&_embed`
    const endpoint = `${baseUrl}/news?_embed`

    // perform axios call to get all posts of category type 'news'
    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                console.log(res.data);
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    // render the posts to the NEWS page

    const Posts = ({ posts }) => {

        // display loading message until the post is returned 
        if (!posts) {
            return <div className='loading-styles'>Loading ...</div>
        }

        const mappedPosts = posts.map((post, index) => {
            function getFeaturedImage(post) {
                if (post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
                    console.log('success');
                    return post._embedded['wp:featuredmedia'][0].source_url;
                } else {
                    console.log('failure');
                    return 'https://via.placeholder.com/150';
                }
            }
            return (
                <div key={post.slug + "-" + index} className="indiv-item">
                    <h4 className="title py-1">{post.title.rendered}</h4>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    <img src={getFeaturedImage(post)} alt="Post featured image" className='featured-image' />

                </div>
            )
        })
        return (
            <>
                {mappedPosts}
            </>
        )
    }

    return (
        <>
            <Helmet>
                <title>KI News Page</title>
                <meta name="description" content="This is my description of my home page" />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
            </Helmet>

            <div>
                <h1 className='header-styles'>News from Karunai Illam</h1>
                <div id="homeCont" className='d-flex-wrap'>
                    <Posts posts={posts} />
                </div>
            </div>
        </>
    )
}

export default News