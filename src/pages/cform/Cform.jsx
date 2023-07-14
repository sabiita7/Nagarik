
        
import React, { useState } from 'react';
import './cform.css'

const Cform = () => {
  const [paperWaste, setPaperWaste] = useState(false);
  const [eWaste, setEWaste] = useState(false);
  const [plasticWaste, setPlasticWaste] = useState(false);
  const [juteWaste, setJuteWaste] = useState(false);
  const [bottleWaste, setBottleWaste] = useState(false);
  const [metalWaste, setMetalWaste] = useState(false);
  const [quantity, setQuantity] = useState({
    paper: null,
    ewaste: null,
    plastic:null,
    jute: null,
    bottle:null,
    metal: null,
  });
  const [wantToDonate, setWantToDonate] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    switch (name) {
      case 'paperWaste':
        setPaperWaste(checked);
        break;
      case 'eWaste':
        setEWaste(checked);
        break;
      case 'plasticWaste':
        setPlasticWaste(checked);
        break;
      case 'juteWaste':
        setJuteWaste(checked);
        break;
      case 'bottleWaste':
        setBottleWaste(checked);
        break;
      case 'metalWaste':
        setMetalWaste(checked);
        break;
      default:
        break;
    }
  };

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [name]: parseInt(value),
    }));
  };

  const handleWantToDonateChange= (e) => {
    setWantToDonate(e.target.value === 'yes');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="form-box">
      <h1>Contribution Form</h1>

      <div className="subheading">
        <h2>Types of Waste Dumped</h2>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="paperWaste"
              checked={paperWaste}
              onChange={handleCheckboxChange}
            />
            Paper Waste
          </label>
          <label>
            <input
              type="checkbox"
              name="eWaste"
              checked={eWaste}
              onChange={handleCheckboxChange}
            />
            eWaste
          </label>
          <label>
            <input
              type="checkbox"
              name="plasticWaste"
              checked={plasticWaste}
              onChange={handleCheckboxChange}
            />
            Plastic Waste
          </label>
          <label>
            <input
              type="checkbox"
              name="juteWaste"
              checked={juteWaste}
              onChange={handleCheckboxChange}
            />
            Jute Waste
          </label>
          <label>
            <input
              type="checkbox"
              name="bottleWaste"
              checked={bottleWaste}
              onChange={handleCheckboxChange}
            />
            Bottle Waste
          </label>
          <label>
            <input
              type="checkbox"
              name="metalWaste"
              checked={metalWaste}
              onChange={handleCheckboxChange}
            />
            Metal Waste
          </label>
        </div>
      </div>

      <div className="subheading">
        <h2>Total Quantity of Waste Dumped</h2>
        <div className="quantity-group">
          <label>
            Paper Waste:
            <input
              type="number"
              name="paper"
              value={quantity.paper}
              onChange={handleQuantityChange}
              min="0"
              max="20"
            />
          </label>
          <label>
            eWaste:
            <input
              type="number"
              name="ewaste"
              value={quantity.ewaste}
              onChange={handleQuantityChange}
              min="1"
              max="20"
            />
          </label>
          <label>
            Plastic Waste:
            <input
              type="number"
              name="plastic"
              value={quantity.plastic}
              onChange={handleQuantityChange}
              min="1"
              max="20"
            />
          </label>
          <label>
            Jute Waste:
            <input
              type="number"
              name="jute"
              value={quantity.jute}
              onChange={handleQuantityChange}
              min="1"
              max="20"
            />
          </label>
          <label>
            Bottle Waste:
            <input
              type="number"
              name="bottle"
              value={quantity.bottle}
              onChange={handleQuantityChange}
              min="1"
              max="20"
            />
          </label>
          <label>
            Metal Waste:
            <input
              type="number"
              name="metal"
              value={quantity.metal}
              onChange={handleQuantityChange}
              min="1"
              max="20"
            />
          </label>
        </div>
      </div>

      <div className="subheading">
        <h2>Want to Donate?</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="wantToDonate"
              value="yes"
              checked={wantToDonate}
              onChange={handleWantToDonateChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="wantToDonate"
              value="no"
              checked={!wantToDonate}
              onChange={handleWantToDonateChange}
            />
            No
          </label>
        </div>
      </div>

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Cform;
