
export const breakFast = {
    itemType: "breakfast",
    productId: 1234,
    mealType: "lavish",
    mealTypes: ["lavish", "budget"],
    mealCategory: "veg",
    mealCategories: ["veg", "non-veg"],
    image: {
        lavish: "/products/breakfast/lavish.png",
        budget: "/products/breakfast/budget.png",
    },
    name: {
        lavish: "Lavish BreakFast",
        budget: "Budget BreakFast",
    },
    rating: {
        lavish: "4",
        budget: "4",
    },
    reviews: {
        lavish: "224",
        budget: "274",
    },
    priceDetails: {
        lavish: [
            {
                mealCount: 1,
                actualPrice: 65,
                sellingPrice: 65
            },
            {
                mealCount: 5,
                actualPrice: 325,
                sellingPrice: 310
            },
            {
                mealCount: 15,
                actualPrice: 975,
                sellingPrice: 870
            },
            {
                mealCount: 30,
                actualPrice: 1950,
                sellingPrice: 1650
            }
        ],
        budget: [
            {
                mealCount: 1,
                actualPrice: 45,
                sellingPrice: 45
            },
            {
                mealCount: 5,
                actualPrice: 225,
                sellingPrice: 210
            },
            {
                mealCount: 15,
                actualPrice: 675,
                sellingPrice: 570
            },
            {
                mealCount: 30,
                actualPrice: 1350,
                sellingPrice: 1050
            }
        ]
    }   
}


export const lunch = {
    itemType: "lunch",
    productId: 1235,
    mealType: "lavish",
    mealTypes: ["lavish","budget","mini"],
    mealCategory: "veg",
    mealCategories: ["veg","non-veg"],
    image: {
        lavish: "/products/lunch/lavish.png",
        budget: "/products/lunch/budget.png",
        mini: "/products/lunch/mini.png",
    },
    name: {
        lavish: "Lavish Lunch Meal",
        budget: "Budget Lunch Meal",
        mini: "Mini Lunch Meal",
    },
    rating: {
        lavish: "4",
        budget: "4",
        mini: "4",
    },
    reviews: {
        lavish: "230",
        budget: "254",
        mini: "274",
    },
    priceDetails: {
        lavish: [
            {
                mealCount: 1,
                actualPrice: 85,
                sellingPrice: 85
            },
            {
                mealCount: 5,
                actualPrice: 425,
                sellingPrice: 410
            },
            {
                mealCount: 15,
                actualPrice: 1275,
                sellingPrice: 1170
            },
            {
                mealCount: 30,
                actualPrice: 2550,
                sellingPrice: 2250
            }
        ],
        budget: [
            {
                mealCount: 1,
                actualPrice: 75,
                sellingPrice: 75
            },
            {
                mealCount: 5,
                actualPrice: 375,
                sellingPrice: 360
            },
            {
                mealCount: 15,
                actualPrice: 1125,
                sellingPrice: 1020
            },
            {
                mealCount: 30,
                actualPrice: 2250,
                sellingPrice: 1950
            }
        ],
        mini: [
            {
                mealCount: 1,
                actualPrice: 65,
                sellingPrice: 65
            },
            {
                mealCount: 5,
                actualPrice: 325,
                sellingPrice: 310
            },
            {
                mealCount: 15,
                actualPrice: 975,
                sellingPrice: 870
            },
            {
                mealCount: 30,
                actualPrice: 1950,
                sellingPrice: 1650
            }
        ]
    }  
}




export const dinner = {
    itemType: "dinner",
    productId: 1236,
    mealType: "lavish",
    mealTypes: ["lavish","budget"],
    mealCategory: "veg",
    mealCategories: ["veg","non-veg"],
    image: {
        lavish: "/products/dinner/lavish.png",
        budget: "/products/dinner/budget.png",
    },
    name: {
        lavish: "Lavish Dinner",
        budget: "Budget Dinner",
    },
    rating: {
        lavish: "4",
        budget: "4",
    },
    reviews: {
        lavish: "254",
        budget: "214",
    },
    priceDetails: {
        lavish: [
            {
                mealCount: 1,
                actualPrice: 65,
                sellingPrice: 65
            },
            {
                mealCount: 5,
                actualPrice: 325,
                sellingPrice: 310
            },
            {
                mealCount: 15,
                actualPrice: 927,
                sellingPrice: 870
            },
            {
                mealCount: 30,
                actualPrice: 1950,
                sellingPrice: 1650
            }
        ],
        budget: [
            {
                mealCount: 1,
                actualPrice: 45,
                sellingPrice: 45
            },
            {
                mealCount: 5,
                actualPrice: 225,
                sellingPrice: 210
            },
            {
                mealCount: 15,
                actualPrice: 675,
                sellingPrice: 570
            },
            {
                mealCount: 30,
                actualPrice: 1350,
                sellingPrice: 1050
            }
        ]
    }  
}


export const products = [breakFast, lunch, dinner]