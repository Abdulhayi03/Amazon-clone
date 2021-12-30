import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
            <div className="home__row">
                <Product
                id="1"
                title="The Weight of Silence (Nicole Foster Thriller Book 2)"
                price={120.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/51ek4YkZscL.jpg"
                />

                <Product
                id="2"
                title="The Sound of Rain (Nicole Foster Thriller Book 1)"
                price={199.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/51dd1ogsLGL.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                id="3"
                title="The Last Thing She ever did"
                price={230.0}
                rating={4}
                image="https://m.media-amazon.com/images/I/519H3L8E94L.jpg"
                />

                <Product
                id="4"
                title="Save Her Soul: An absolutely unputdownable crime"
                price={87.96}
                rating={3}
                image="https://m.media-amazon.com/images/I/51grGn+hQxL.jpg"
                />

                <Product
                id="5"
                title="Water's Edge: A totally gripping crime thriller"
                price={20.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/51wM-JD8FQL.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                id="6"
                title="The Girl in the Woods (A Waterman & Stark Thriller Book 3)"
                price={20.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/51tgbkYfk0L.jpg"
                />
            </div>
        </div>
    )
}

export default Home
