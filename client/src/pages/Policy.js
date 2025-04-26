import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy-policy.jpg"
            alt="contactus"
            style={{ width: "100%"}}
          />
        </div>
        <div className="col-md-4">
          <p><b>Privacy policy: Our product is not refundable</b></p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;