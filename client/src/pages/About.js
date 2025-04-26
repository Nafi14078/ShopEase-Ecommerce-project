import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-ShopEase"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contact"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            ShopEase is a leading e-commerce platform that connects buyers and sellers from all over the world. Our mission is to provide a seamless shopping experience for our customers while empowering small businesses to thrive in the digital marketplace. With a wide range of products and services, we strive to meet the diverse needs of our customers and help them find exactly what they are looking for. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;