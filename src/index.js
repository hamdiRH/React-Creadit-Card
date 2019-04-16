import React from "react";
import ReactDOM from "react-dom";
import CreditCard from "./card";
import "./styles.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditcardTitle: "Credit Card",
      creditcardNumber: "0000 0000 0000 0000",
      creditcardValidThru: "00/00",
      creditcardValidCode: "0000",
      creditcardHoldName: "HOLDERNAME"
    };
  }

  render() {
    return (
      <div>
        <CreditCard
          creditcardTitle={this.state.creditcardTitle}
          creditcardNumber={this.state.creditcardNumber}
          creditcardHoldName={this.state.creditcardHoldName}
          creditcardValidThru={this.state.creditcardValidThru}
          creditcardValidCode={this.state.creditcardValidCode}
        />
        <form style={{ marginTop: "50px" }}>
          <input
            maxLength="16"
            type="text"
            placeholder="Card Number"
            onChange={event => {
              this.setState({
                creditcardNumber: renderCardNumber(event.target.value)
              });
            }}
          />
          <input
            maxLength="4"
            type="text"
            placeholder="Card Code"
            onChange={event => {
              this.setState({
                creditcardValidCode: rendercodenumber(event.target.value)
              });
            }}
          />
          <input
            type="text"
            
            placeholder="Holder Name"
            onChange={event => {
              this.setState({
                creditcardHoldName: renderholername(event.target.value)
              });
            }}
          />
          <input
            maxLength="4"
            type="text"
            placeholder="Valid thru"
            onChange={event => {
              this.setState({
                creditcardValidThru: renderValidThru(event.target.value)
               
              });
            }}
          />
        </form>
      </div>
    );
  }
}

const renderholername = name => {
  if (!isNaN(name)) return 'Error'
  return name.toUpperCase()

}
const rendercodenumber = number =>{
  if (isNaN(number)) return 'Error'
  return number
}
const renderCardNumber = number => {
  if (isNaN(number)) {
    return 'Error';
  }
  number = number.toString();
  let resultStr = "";
  for (let i = 0; i < number.length; i += 4) {
    resultStr += number.slice(i, i + 4) + " ";
  }
  if(resultStr === ""){resultStr="0000 0000 0000 0000"} 
  return resultStr.trim();
};

const renderValidThru = number => {
  if (isNaN(number)) {
    return 'Error';
  }
  number = number.toString();
  let test=number[0]+number[1]
  if(test>12) return 'Error'
  let test2=number[2]+number[3]
  if(test2<19) return 'Error'

  if(number.length===0) return ''
  return number.slice(0, 2) + "/" + number.slice(2);
};

let Inputform = () => {
  return <div />;
};

ReactDOM.render(<Card />, document.getElementById("root"));
