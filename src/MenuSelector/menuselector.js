import * as React from "react";
import "./menuselector.css";
import { products as saticProducts } from "../data";

const PreferenceTitle = () => {
  return (
    <p className="preference-title">
      What's your
      <br />
      <span>Homemade food craving?</span>
    </p>
  );
};

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <div className="checker">
      <span>
        <input type={type} name={name} checked={checked} onChange={onChange} />
      </span>
    </div>
  );
};

const PreferenceCard = ({ setProducts}) => {
  const [checkbox, setCheckbox] = React.useState({
    breakfast: true,
    lunch: true,
    dinner: true,
  });

  const handleChange = (event) => {
    const obj = {...checkbox};
    obj[event.target.name] = !obj[event.target.name];
    setCheckbox(obj);
    const newProducts = []

    for (const [key, value] of Object.entries(obj)) {
      if (value) newProducts.push(saticProducts.filter(item => item.itemType === key)[0])
    }
    console.log("newProducts ===>", [...newProducts])
    setProducts([...newProducts])
  };
  return (
    <div className="preference-card">
      <p className="preference-text">Preference</p>
      <div className="checker-container">
        <label className="checkbox-label">
          <Checkbox
            name="breakfast"
            value="breakfast"
            checked={checkbox.breakfast}
            onChange={handleChange}
          />
          Breakfast
        </label>
        <label className="checkbox-label">
          <Checkbox
            name="lunch"
            value="lunch"
            checked={checkbox.lunch}
            onChange={handleChange}
          />
          Lunch
        </label>
        <label className="checkbox-label">
          <Checkbox
            name="dinner"
            value="dinner"
            checked={checkbox.dinner}
            onChange={handleChange}
          />
          Dinner
        </label>
      </div>
    </div>
  );
};

const MenuSelector = ({setProducts}) => {
  return (
    <div className="menu-selector">
      <PreferenceTitle />
      <PreferenceCard setProducts={setProducts}/>
    </div>
  );
};

export default MenuSelector;
export { MenuSelector };
