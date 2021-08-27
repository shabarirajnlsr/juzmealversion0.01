import { RatingView } from "react-simple-star-rating";
import * as React from "react";
import { Icon } from "semantic-ui-react";
import "./Product.css";

const RadioButtons = ({ data, defaultName, updateName, productId }) => {
  const { values = [], name = "" } = data;
  const checkedObj = {};
  values.forEach(
    (key) => (checkedObj[key] = key === defaultName ? true : false)
  );

  const [checkState, setCheckState] = React.useState(checkedObj);

  const handleChange = (event) => {
    let newObj = {};
    for (const [key] of Object.entries(checkState)) {
      newObj[key] = key === event.target.value ? true : false;
    }
    setCheckState({ ...newObj });
    updateName(event.target.value);
  };

  const RadioButton = (value, index) => {
    return (
      <div
        key={`${productId}-${value}-${index}`}
        className="product-radio-item"
      >
        <input
          name={name}
          value={value}
          id={`${productId}-${value}`}
          checked={checkState[value]}
          type="radio"
          onChange={handleChange}
          className={"product-radio-btn"}
        />
        <label htmlFor={`${productId}-${value}`}>
          <span className="radio-text">{value}</span>
        </label>
      </div>
    );
  };

  return <div className="product-radio-wrapper">{values.map(RadioButton)}</div>;
};

const ProductPriceSelector = ({ priceDetails, productId, selectedMeal, setSelectedMeal }) => {
  
  const PriceCard = ({ data, handleOnClick, selected }) => {
    const { mealCount = 1, actualPrice = 65, sellingPrice = 0 } = data;

    return (
      <div
        className="product-price-item"
        focus={selected ? "true" : "false"}
        mealcount={mealCount}
        onClick={handleOnClick}
      >
        <div className="meal-count">{mealCount} Meals</div>
        <div className="actual-price">
          <Icon name="rupee" />{actualPrice}
        </div>
        <div className="current-price">
          <Icon name="rupee" />{sellingPrice}
        </div>
        <div className="per-meal-price">
          @&nbsp;{(sellingPrice / mealCount ).toFixed()}
        </div>
        <div className="meal-discount">Save <Icon name="rupee" />{actualPrice - sellingPrice}</div>
      </div>
    );
  };

  const handleOnClick = (event) => {
    const mealCount = event.currentTarget.getAttribute("mealcount");
    setSelectedMeal(+mealCount);
  };


  return (
    <div className="product-price-selector">
      {priceDetails.map((item, index) => {
        return (
          <PriceCard
            data={item}
            key={`${productId}-${index}`}
            selected={selectedMeal === item.mealCount}
            handleOnClick={handleOnClick}
          />
        );
      })}
    </div>
  );
};

export const ProductCard = ({ data }) => {

     console.log("data ===>", data)
  const {
    name = {},
    rating = {},
    reviews = {},
    image = {},
    productId = "",
    mealType: defaultMealType = "",
    mealTypes = [], 
    mealCategory: defaultMealCategory = "",
    mealCategories = [], 
    priceDetails = {}
  } = data;


  const [foodCategory, setFoodCategory] = React.useState(defaultMealCategory);
  const updateFoodCategory = (value) => setFoodCategory(value);

  const [mealType, setMealType] = React.useState(defaultMealType);
  const updateMealType = (value) => setMealType(value);

  const [basePriceDetails] = priceDetails[mealType].filter(item => item.mealCount === 1);

  const [selectedMeal, setSelectedMeal] = React.useState(priceDetails[mealType][0].mealCount);

  const onClickHandle = () => {
    console.log("generated Product ID ===>", `${productId}-0${mealCategories.indexOf(foodCategory)+1}-0${mealTypes.indexOf(mealType)+1}-${selectedMeal}`);
  };

  return (
    <div className="product-main">
      <div>
        <h3 className={"product-title"}>{name[mealType]}</h3>
        <div className="product-rr-main">
          <div className={"product-rr-container"}>
            <RatingView ratingValue={rating[mealType]} size={14} />
            <div className={"product-reviews"}>{reviews[mealType]} Reviews</div>
          </div>
          <a className="viewbutton">&nbsp;View Menu&nbsp;</a>
        </div>
        <div className="product-img-container">
          <img className="product-img" src={image[mealType]} alt={name[mealType]} />
        </div>
      </div>
      <div className="product-info-container">
        <div className="food-type">
          <RadioButtons
            data={{
              name: `${productId}-foodCategory`,
              values: mealCategories,
            }}
            defaultName={foodCategory}
            updateName={updateFoodCategory}
            productId={productId}
          />
          <RadioButtons
            data={{
              name: `${productId}-mealType`,
              values: mealTypes,
            }}
            defaultName={mealType}
            updateName={updateMealType}
            productId={productId}
          />
        </div>
        <div className="dishesandprices">
          <div className="basicmealinfo">
            <p>Starting from</p>
            <span style={{ color: "goldenrod" }}>
              <Icon name="rupee" />
              {basePriceDetails.sellingPrice} &nbsp;
            </span>
            <span style={{ textDecoration: "underline" }}>Per meal</span>
          </div>
        </div>
      </div>

      <div className="price-container">
        <ProductPriceSelector selectedMeal={selectedMeal} setSelectedMeal={setSelectedMeal} priceDetails={priceDetails[mealType]} productId={productId} />
      </div>
      <div className="button-container">
        <button onClick={onClickHandle} className="buynowbutton">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export const Product = ({products}) => {

     console.log("products ===>", products)
  return (
    <div className="product-wrapper">
      {products.length > 0 ? products.map((item, index) => {
           console.log('item ===>', item)
        return (
          <ProductCard
            key={`product-${item.productId}-${index}`}
            data={item}
          />
        );
      }): <div className="product-no-preference">No Preference Selected. Kindly Select a Preference. Thanks</div>}
    </div>
  );
};
