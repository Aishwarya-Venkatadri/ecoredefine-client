
import React from 'react';
import '../OurStory/OurStory.scss'; 
import ecoRedefineImage from '../../assets/Images/ourstory.gif'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function OurStory() {
  return (<>
  <Header />
    <div className="our-story-container">
      <h1 className="story-title">Our Story: Eco Redefine</h1>
      <div className="story-wrapper">
        <div className="image-wrapper">
          <img src={ecoRedefineImage} alt="Eco Redefine" />
        </div>
        <div className="text-wrapper">
          <p>
            Welcome to Eco Redefine, a platform founded by me, Aishwarya Venkatadri with a profound
            vision and commitment to redefine our relationship with the environment. As an advocate
            for sustainability and a greener planet, Eco Redefine aims to inspire positive change
            and encourage individuals to adopt eco-friendly practices in their daily lives.  As you explore our platform, you'll find a wealth of information on eco-friendly living,
          sustainable practices, and the latest developments in environmental conservation. Whether you're
          interested in reducing your carbon footprint, adopting zero-waste practices, or staying informed
          about environmental issues, Eco Redefine is your go-to resource.  Together, let's embark on a journey to redefine our impact on the planet. Join us in creating a
          world where sustainability is not just a choice but a way of life. Thank you for being a part of
          our story and contributing to the greater narrative of a greener, more sustainable future.
          </p>
          
        </div>
      </div>
    </div>
    <Footer />
    </>);
};

export default OurStory;
