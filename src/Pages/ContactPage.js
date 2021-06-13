import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.4595762495696!2d2.355507416161357!3d41.49431459732125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b13466c04fc9%3A0x15906f11913dde1e!2sCarrer%20del%20Pilar%2C%2062%2C%2008330%20Premi%C3%A0%20de%20Mar%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1623499051740!5m2!1ses!2ses" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+34 602893352'} text2={''} title={'Phone'} />
                    <ContactItem icon={email} text1={'ahmed.erba@gmail.com'} text2={''} title={'Email'} />
                    <ContactItem icon={location} text1={'Calle del Pilar 62, 08330 Premià'} text2={'Barcelona, España'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
