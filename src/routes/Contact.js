import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import HeroProject from '../components/heropoject/HeroProject';
import Form from '../components/form/Form';

const Contact = () => {
  return (
    <div>
       <Navbar />
       <HeroProject heading="CONTACT." text="Laissez moi un message" />
       <Form />
       <Footer />
    </div>
  )
}

export default Contact;