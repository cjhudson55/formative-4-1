import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

// import React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

// Get location / taxonomy

const Location = ({ event }) => {

    const [taxonomies, setTaxonomies] = useState([])

    useEffect(() => {
        if (!event) {
            return;
        }
        const taxonomyEndpoint = event._links["wp:term"][0].href;

        axios.get(`${taxonomyEndpoint}`)
            .then((res) => {
                console.log('calling the event taxonomy');
                setTaxonomies(res.data)
            })
            .catch((err) => console.log(err))

    }, [event])

    const renderedTaxonomies = taxonomies.map((taxonomy, index) => {
        return (
            <Link to={`/location/${taxonomy.id}`} key={index}>
                <span className='taxonomy-term-pill'>
                    {taxonomy.name}
                </span>
            </Link>
        )
    })

    return (
        <div>
            {renderedTaxonomies}
        </div>
    )

}







const Events = () => {

    const [posts, setPosts] = useState(null)
    const { id } = useParams();

    const endpoint = `${baseUrl}/events?_embed`

    // perform axios call to get all posts of category type 'events'
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

    // render the posts to the EVENTS page

    const Posts = ({ posts }) => {


        if (!posts) {
            return <div className='loading-styles'>Loading...</div>
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
                    <Location event={posts} />
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
                <title>KI Events Page</title>
                <meta name="description" content="This is my description of my home page" />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
            </Helmet>

            <h1 className='header-styles'>Karunai Illam Events</h1>
            <div id="homeCont" className='d-flex-wrap'>
                <Posts posts={posts} />
            </div>
        </>
    )
}

export default Events