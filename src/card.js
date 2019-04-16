import React from "react";
import ReactDOM from "react-dom";

export default function CreditCard(props) {
  return (
    <div className="CreditCard-font">
      <img
        className="CreditCard-font-img"
        alt="Credit Card Background"
        src="https://dca63207795f5f80ce60-6ccb201fe2c97fe2f6941c803aa0e29f.ssl.cf2.rackcdn.com/predesign/cobrand/GC16-Omni-4_1.jpg"
      />
      <div className="creditcard-title">
        <h1>{props.creditcardTitle}</h1>
      </div>
      <div className="creditcard-chip">
        <img alt="chip-logo" src="https://i.imgur.com/Acy0O91.png" />
      </div>
      <div className="creditcard-number">
        <div className="transparent" />
        <h1>{props.creditcardNumber}</h1>
      </div>

      <div className="creditcard-sec-validation">
        <div className="creditcard-code">
          <h1>{props.creditcardValidCode}</h1>
        </div>
        <div className="creditcardvalidation">
          <div className="fontwight">MONTH/YEAR</div>
          <div className="df">
            <div className="fontwight mt">VALID THRU </div>
            <div className="dateExp">
              <h1>{props.creditcardValidThru}</h1>
            </div>
          </div>
          <div />
        </div>
      </div>

      <div className="creditcard-logo">
        <img
          className="logo"
          alt="logo"
          src="https://q7h8y4i2.stackpathcdn.com/wp-content/uploads/2013/12/visa-mastercard-logo.jpg"
        />
      </div>
      <div className="creditcardholname">
        <h1>{props.creditcardHoldName}</h1>
      </div>
    </div>
  );
}
