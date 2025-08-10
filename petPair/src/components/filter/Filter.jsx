import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ onApply, onClose }) => {
  const [filters, setFilters] = useState({
    sex: [],
    age: [],
    size: [],
    fee: [],
    specialNeeds: [],
    other: [],
    time: 0
  });

  const handleCheckboxChange = (category, value) => {
    setFilters(prev => {
      const current = prev[category];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter(item => item !== value)
          : [...current, value]
      };
    });
  };

  const handleSliderChange = (e) => {
    setFilters(prev => ({ ...prev, time: e.target.value }));
  };

  return (
    <div className="filter-overlay">
      <div className="filter-container">
        <h3>Sex</h3>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("sex", "Male")} /> Male</label>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("sex", "Female")} /> Female</label>

        <h3>Age</h3>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("age", "Baby")} /> Baby</label>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("age", "Adult")} /> Adult</label>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("age", "Senior")} /> Senior</label>

        <h3>Size</h3>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("size", "Small")} /> Small</label>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("size", "Med")} /> Med</label>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("size", "Large")} /> Large</label>

        <h3>Adoption Fee</h3>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("fee", "$0")} /> $0</label>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("fee", "Under $20")} /> Under $20</label>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("fee", "$20+")} /> $20+</label>

        <h3>Open to special needs?</h3>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("specialNeeds", "Yes")} /> Yes</label>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("specialNeeds", "No")} /> No</label>

        <h3>Other</h3>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("other", "Hypoallergenic")} /> Hypoallergenic</label>
        <label><input type="checkbox" onChange={() => handleCheckboxChange("other", "Good with kids/other animals")} /> Good with kids/other animals</label>

        <h3>Time Commitment</h3>
        <div className="time-slider">
          <span>0 hrs</span>
          <input type="range" min="0" max="24" value={filters.time} onChange={handleSliderChange} />
          <span>24 hrs</span>
        </div>

        <div className="filter-buttons">
          <button onClick={() => onApply(filters)}>Apply Filter</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
