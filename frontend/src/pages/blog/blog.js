import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [isMobile, setMobile] = useState(window.innerWidth <= 820);

    const updateScreenSize = () => {
        setMobile(window.innerWidth <= 820);
    }

    useEffect (() => {
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    })

    return (
        <>
            {/*Renders image and text below each other if mobile screen size*/}
            {isMobile ? (
                <>
                    <div className="author-spotlight row page-spacing">
                        <div className="col-blog-text">
                            <h1>Blog</h1> 
                            <h2 className='subheading'>Local Author Spotlight</h2>
                            <p className='subheading2'>Date Text</p>

                            <div className="p-30"></div>

                            <h2 className='subheading'>Title Text</h2>
                            <p className="description">
                                Description text description text description text description text description text description text
                                description text description text description text description text description text description text
                                description text description text description text description text description text description text
                                description text description text description text description text description text description text
                                description text description text description text description text description text description text
                                description text description text description text description text description text description text
                            </p>
                        </div>
                    </div>

                    <div className="p-20"></div>

                    <div className="col-image">
                        <h2 className="subheading">Author Name</h2>
                        <p className="author-description">Author Text</p>
                        <img className="img" src="./placeholder.jpg"/>

                        <Link to='/blog-read-more'>
                            <button className="btn">Read More</button>
                        </Link>
                    </div>

                    <div className="p-20"></div>

                    <div className="past-spotlights page-spacing">
                        <h2>See Past Spotlights</h2>

                        <div className="pb-30"></div>

                        <div>
                            <BookCard/>
                        </div>

                        <div className="pb-40"></div>
                    </div> 
                </>
                ) : (
                    <>
                        <div className="author-spotlight row page-spacing">
                            <div className="col-blog-text">
                                <h1>Blog</h1> 
                                <h2 className='subheading'>Local Author Spotlight</h2>
                                <p className='subheading2'>Date Text</p>

                                <div className="p-30"></div>

                                <h2 className='subheading'>Title Text</h2>
                                <p className="description">
                                    Description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                </p>
                            </div>

                            <div className="col-image">
                                <h2 className="subheading">Author Name</h2>
                                <p className="author-description">Author Text</p>
                                <img className="img" src="./placeholder.jpg"/>

                                <button className="btn">Read More</button>
                            </div>

                            <div className="p-20"></div>
                        </div>

                        <div className="past-spotlights page-spacing">
                            <h2>See Past Spotlights</h2>

                            <div className="pb-30"></div>

                            <div>
                                <BookCard/>
                            </div>

                            <div className="pb-40"></div>
                        </div>
                    </>
                )
            }
            
        </>
    )
}