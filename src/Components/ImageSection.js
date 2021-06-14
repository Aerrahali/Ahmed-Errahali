import React from 'react';
//import about from '../img/about.jpg';
//<div className="img">
//                <img src={about} alt="" />
//            </div>
//  <button className="btn">Download Cv</button>

function ImageSection() {
    return (
        <div className="ImageSection">

            <div className="about-info">
                <h4>I am<span> Ahmed Errahali</span></h4>
                <p className="about-text">
                    Multidisciplinary designer who focuses on telling my clients stories visually, through pleasant and meaningful experiences. Apart from having a last name that is difficult to pronounce, I am a student in the last multimedia career course at the Open University of Catalonia. I mainly specialize in web design and multimedia content creation for all platforms. My design philosophy is to combine usability, accessibility and creativity. I enjoy complex and consistent projects, as well as the most I would love to hear about interesting opportunities, feel free to contact me!
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Ahmed Errahali Badih</p>
                        <p>: 26</p>
                        <p>: Spanish</p>
                        <p>: Spanish, Catalan, English</p>
                        <p>: Pilar 62, 08330 Premià, Barcelona</p>
                        <p>: Spain</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
