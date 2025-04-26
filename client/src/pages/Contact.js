import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpeg"
            alt="contact"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
           Feel free to reach out to us.
          </p>
          <p className="mt-3">
            <BiMailSend /> : shopease@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> :01723456789
          </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Contact;