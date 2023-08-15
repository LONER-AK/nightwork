import React from "react";
import "../CSS/Listing.css";
import Carsection from "./carsection";
const Listing = () => {
  return (
    <>
      <div className="headersection">
        <div className="rowheader">
          <div className="col-4">
            <div className="firstpart">
                <div className="previouscar">
                    <text>Previous car</text>
                </div>
                <div className="arrbenz">
              <div className="imagepart">
                <img src="./asset/icon arrow.png"></img>
              </div>
              <div className="benz">
                <text>1973 Mercedez Benz</text>
              </div>
             
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="firstpart">
              <div className="closeimage">
                <img src="./asset/Group 16.png"></img>
              </div>
              <div className="benz">
                <text>close</text>
              </div>
             
            </div>
          </div>
          <div className="col-4">
            <div className="firstpart">
            <div className="nextcar">
                    <text>Next car</text>
                </div>
              <div className="arrbenz">
              <div className="benz">
                <text>Porsche 911 Carrera</text>
              </div>
              <div className="imagenextcar">
                <img src="./asset/rightarrow.png"></img>
              </div>
             
             
              </div>
            </div>
          </div>
        </div>
        <section className="pt-4">
        <div class="container mt-5">
<h1 className="fira-sans">1967 Mercedes-Benz 250 SL Pagoda</h1>
<div className="founders">
<h1 className="
Founders-Grotesk">A largely original example of this stylish 1970s coupe, refinished in a classic period colour.</h1>
<div className="row">
  <div className="rounded-full">
    <div className="rowcol">
      <div className="col-3">
        <h1 className="text-current	">ENDS IN</h1>
        <h1 className="timeperiod">6:05:35</h1>
      </div>
      <span className="line"></span>
      <div className="col-3">
        <h1 className="text-current	">CURRENT BID</h1>
        <h1 className="price">£35,000</h1>
      </div>
      <span className="line"></span>
      <div className="col-3">
        <h1 className="text-current	">BIDS</h1>
        <h1 className="timeperiod">11</h1>
      </div>
     <div className="bgcolor">
      <div className="col-3 ">
        <h1 className="text-current bidnow	">Bid Now</h1>
        <h1 className="site">(collectingcars.com)</h1></div>
      </div>
    </div>
  </div>
</div>
</div></div></section>
      </div>
<Carsection/>

    
     
    </>
  );
};

export default Listing;
