// const express = require('express');
// require('dotenv').config()
// const app = express();
// const port = process.env.PORT;
// const mongoose = require('mongoose');
// const myURI = process.env.myURI

// mongoose.connect(myURI)
// .then(() => {
//     console.log('connected');
    
// }).catch((err) => {
//     console.log("Error", err);
    
// })



// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// const allUsers = [];
// const loginUsers = [];
// app.listen(port, () => {
//     console.log({message: "Listening on port 2901"});
    
// })


// app.get('/', (req, res) =>{
//     const customers = ['kemi', 'dauda', 'fatai']
//     res.render('home.ejs', {customers, id: 4})
// })

// app.get('/up', (req, res) => {
//     res.render('signup.ejs')
// })

// app.post('/signup', (req, res) => {
//     const user = req.body;
//     allUsers.push(user);
//     console.log("AllUsers:", allUsers);
//     res.redirect('/in')
// })

// app.get('/in', (req, res) => {
//     res.render('login.ejs')
// })

// app.post('/login', (req, res)=>{
//     const lUser = req.body
//     loginUsers.push(lUser)
//     console.log("Login Users:", loginUsers);
//     res.redirect('/')
    

// })

















const express = require('express');
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

const port = process.env.PORT
const MONGO_URI = process.env.URI


mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('DB is connected');
    })
    .catch((err) => {
        console.log('DB failed to connect', err);
    })

// Comprehensive Nigerian Foods Data
const nigerianFoods = [
    {
        id: 1,
        name: "Jollof Rice",
        description: "A popular West African dish of rice cooked in a flavorful tomato-based sauce with spices",
        category: "Main Course",
        region: "All regions",
        ingredients: ["Rice", "Tomatoes", "Onions", "Red bell peppers", "Scotch bonnet peppers", "Tomato paste", "Curry powder", "Thyme", "Bay leaves", "Stock/Broth"],
        preparationTime: "45-60 minutes",
        difficulty: "Medium",
        isVegetarian: true,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 350,
        price: 1500
    },
    {
        id: 2,
        name: "Egusi Soup",
        description: "A thick nutritious soup made from ground melon seeds, vegetables, and meat or fish",
        category: "Soup",
        region: "All regions",
        ingredients: ["Egusi (Melon seeds)", "Palm oil", "Meat/Fish", "Ugu (Pumpkin leaves)", "Onions", "Crayfish", "Pepper", "Stockfish", "Stock cubes"],
        preparationTime: "60-75 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 420,
        price: 2500
    },
    {
        id: 3,
        name: "Pounded Yam",
        description: "A smooth, stretchy swallow made from boiled yam that has been pounded until smooth",
        category: "Swallow",
        region: "All regions",
        ingredients: ["Yam", "Water"],
        preparationTime: "30-40 minutes",
        difficulty: "Hard",
        isVegetarian: true,
        isSpicy: false,
        servingSize: "2-3 people",
        calories: 280,
        price: 800
    },
    {
        id: 4,
        name: "Suya",
        description: "Spicy grilled meat skewers coated with ground peanut spice mix (yaji)",
        category: "Snack/Street Food",
        region: "Northern Nigeria",
        ingredients: ["Beef/Chicken", "Groundnut/Peanut powder", "Ginger", "Garlic", "Cayenne pepper", "Onion powder", "Stock cubes", "Oil"],
        preparationTime: "30-40 minutes (plus marination)",
        difficulty: "Easy",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "2-3 people",
        calories: 380,
        price: 1200
    },
    {
        id: 5,
        name: "Akara",
        description: "Deep-fried bean cakes made from black-eyed peas, onions, and peppers",
        category: "Breakfast/Snack",
        region: "All regions",
        ingredients: ["Black-eyed beans", "Onions", "Scotch bonnet peppers", "Salt", "Vegetable oil"],
        preparationTime: "30-45 minutes",
        difficulty: "Medium",
        isVegetarian: true,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 180,
        price: 500
    },
    {
        id: 6,
        name: "Moi Moi",
        description: "Steamed bean pudding made from blended black-eyed peas with spices",
        category: "Side Dish/Main",
        region: "All regions",
        ingredients: ["Black-eyed beans", "Red bell peppers", "Onions", "Scotch bonnet peppers", "Vegetable oil", "Stock cubes", "Eggs", "Fish/Crayfish"],
        preparationTime: "60-90 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "6-8 people",
        calories: 220,
        price: 800
    },
    {
        id: 7,
        name: "Efo Riro",
        description: "A rich Yoruba vegetable soup made with spinach or other leafy greens",
        category: "Soup",
        region: "South-West Nigeria",
        ingredients: ["Spinach/Ugu", "Palm oil", "Assorted meat", "Fish", "Locust beans", "Peppers", "Onions", "Crayfish", "Stock cubes"],
        preparationTime: "45-60 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-5 people",
        calories: 400,
        price: 2000
    },
    {
        id: 8,
        name: "Fried Rice",
        description: "Colorful rice dish stir-fried with vegetables, meat, and spices",
        category: "Main Course",
        region: "All regions",
        ingredients: ["Rice", "Mixed vegetables (carrots, peas, green beans)", "Chicken/Beef", "Curry powder", "Thyme", "Onions", "Garlic", "Soy sauce", "Stock"],
        preparationTime: "40-50 minutes",
        difficulty: "Easy",
        isVegetarian: false,
        isSpicy: false,
        servingSize: "4-6 people",
        calories: 320,
        price: 1800
    },
    {
        id: 9,
        name: "Pepper Soup",
        description: "A spicy broth with meat or fish, flavored with traditional spices",
        category: "Soup",
        region: "All regions",
        ingredients: ["Goat meat/Fish/Chicken", "Pepper soup spice", "Scotch bonnet peppers", "Onions", "Uziza leaves", "Ehuru seeds", "Uda pods", "Salt"],
        preparationTime: "45-60 minutes",
        difficulty: "Easy",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 250,
        price: 2000
    },
    {
        id: 10,
        name: "Amala",
        description: "Dark brown swallow made from yam flour or plantain flour",
        category: "Swallow",
        region: "South-West Nigeria",
        ingredients: ["Yam flour (Elubo)", "Water"],
        preparationTime: "15-20 minutes",
        difficulty: "Easy",
        isVegetarian: true,
        isSpicy: false,
        servingSize: "2-3 people",
        calories: 180,
        price: 500
    },
    {
        id: 11,
        name: "Boli (Roasted Plantain)",
        description: "Grilled or roasted ripe plantain, often served with groundnut",
        category: "Snack/Street Food",
        region: "All regions",
        ingredients: ["Ripe plantains", "Palm oil", "Groundnuts"],
        preparationTime: "20-30 minutes",
        difficulty: "Easy",
        isVegetarian: true,
        isSpicy: false,
        servingSize: "2-3 people",
        calories: 200,
        price: 400
    },
    {
        id: 12,
        name: "Ofada Rice",
        description: "Indigenous unpolished brown rice, often served with ayamase (ofada sauce)",
        category: "Main Course",
        region: "South-West Nigeria",
        ingredients: ["Ofada rice", "Green bell peppers", "Scotch bonnet peppers", "Locust beans", "Assorted meat", "Palm oil", "Onions", "Stock cubes"],
        preparationTime: "60-75 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 380,
        price: 2500
    },
    {
        id: 13,
        name: "Edikang Ikong",
        description: "A nutritious vegetable soup from Cross River and Akwa Ibom states",
        category: "Soup",
        region: "South-South Nigeria",
        ingredients: ["Ugu (Pumpkin leaves)", "Water leaves", "Palm oil", "Assorted meat", "Dried fish", "Periwinkles", "Crayfish", "Pepper", "Onions"],
        preparationTime: "45-60 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 450,
        price: 3000
    },
    {
        id: 14,
        name: "Tuwo Shinkafa",
        description: "Soft rice swallow popular in Northern Nigeria",
        category: "Swallow",
        region: "Northern Nigeria",
        ingredients: ["Rice flour", "Water"],
        preparationTime: "20-30 minutes",
        difficulty: "Easy",
        isVegetarian: true,
        isSpicy: false,
        servingSize: "3-4 people",
        calories: 240,
        price: 600
    },
    {
        id: 15,
        name: "Puff Puff",
        description: "Sweet deep-fried dough balls, similar to doughnuts",
        category: "Snack/Dessert",
        region: "All regions",
        ingredients: ["Flour", "Sugar", "Yeast", "Salt", "Nutmeg", "Water", "Vegetable oil"],
        preparationTime: "45-60 minutes (including rising time)",
        difficulty: "Easy",
        isVegetarian: true,
        isSpicy: false,
        servingSize: "6-8 people",
        calories: 150,
        price: 300
    },
    {
        id: 16,
        name: "Oha Soup",
        description: "Traditional Igbo soup made with oha leaves and thickened with cocoyam",
        category: "Soup",
        region: "South-East Nigeria",
        ingredients: ["Oha leaves", "Cocoyam", "Palm oil", "Assorted meat", "Stockfish", "Uziza seeds", "Crayfish", "Pepper", "Onions"],
        preparationTime: "60-75 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 410,
        price: 2800
    },
    {
        id: 17,
        name: "Chin Chin",
        description: "Crunchy fried snack made from flour, sugar, and milk",
        category: "Snack/Dessert",
        region: "All regions",
        ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Milk", "Nutmeg", "Baking powder", "Vegetable oil"],
        preparationTime: "40-50 minutes",
        difficulty: "Easy",
        isVegetarian: true,
        isSpicy: false,
        servingSize: "8-10 people",
        calories: 140,
        price: 500
    },
    {
        id: 18,
        name: "Afang Soup",
        description: "Delicious vegetable soup made with afang leaves and water leaves",
        category: "Soup",
        region: "South-South Nigeria",
        ingredients: ["Afang leaves", "Water leaves", "Palm oil", "Assorted meat", "Dried fish", "Periwinkles", "Crayfish", "Stock cubes", "Pepper"],
        preparationTime: "60-75 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 440,
        price: 3200
    },
    {
        id: 19,
        name: "Nkwobi",
        description: "Spicy cow foot delicacy cooked in palm oil and potash sauce",
        category: "Appetizer/Side Dish",
        region: "South-East Nigeria",
        ingredients: ["Cow foot", "Palm oil", "Potash (Akanwu)", "Ehuru (Calabash nutmeg)", "Utazi leaves", "Habanero peppers", "Onions", "Stock cubes"],
        preparationTime: "90-120 minutes",
        difficulty: "Hard",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "3-4 people",
        calories: 480,
        price: 2500
    },
    {
        id: 20,
        name: "Ewa Agoyin",
        description: "Mashed beans served with spicy palm oil sauce",
        category: "Main Course",
        region: "South-West Nigeria",
        ingredients: ["Honey beans", "Palm oil", "Dried peppers", "Onions", "Salt"],
        preparationTime: "60-90 minutes",
        difficulty: "Easy",
        isVegetarian: true,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 280,
        price: 800
    },
    {
        id: 21,
        name: "Gizdodo",
        description: "Combination of gizzard and diced plantain in peppered sauce",
        category: "Appetizer/Side Dish",
        region: "All regions",
        ingredients: ["Gizzard", "Ripe plantains", "Red bell peppers", "Onions", "Tomatoes", "Vegetable oil", "Seasoning cubes", "Curry powder"],
        preparationTime: "45-60 minutes",
        difficulty: "Easy",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "3-4 people",
        calories: 340,
        price: 1500
    },
    {
        id: 22,
        name: "Okro Soup",
        description: "Slimy soup made with fresh okra, often enjoyed with swallow",
        category: "Soup",
        region: "All regions",
        ingredients: ["Fresh okra", "Palm oil", "Assorted meat", "Fish", "Crayfish", "Pepper", "Onions", "Ogiri/Iru (locust beans)", "Stock cubes"],
        preparationTime: "40-50 minutes",
        difficulty: "Easy",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 360,
        price: 1800
    },
    {
        id: 23,
        name: "Banga Soup",
        description: "Palm nut soup popular in the Niger Delta region",
        category: "Soup",
        region: "South-South Nigeria",
        ingredients: ["Palm fruit concentrate", "Banga spice", "Catfish/Beef", "Dried fish", "Periwinkles", "Scent leaves", "Onions", "Pepper"],
        preparationTime: "60-75 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 430,
        price: 2500
    },
    {
        id: 24,
        name: "Masa",
        description: "Fermented rice cakes popular in Northern Nigeria",
        category: "Breakfast/Snack",
        region: "Northern Nigeria",
        ingredients: ["Rice", "Yeast", "Sugar", "Salt", "Potash", "Water"],
        preparationTime: "45-60 minutes (plus fermentation)",
        difficulty: "Medium",
        isVegetarian: true,
        isSpicy: false,
        servingSize: "6-8 people",
        calories: 120,
        price: 500
    },
    {
        id: 25,
        name: "Abacha (African Salad)",
        description: "Shredded cassava salad with palm oil dressing and various toppings",
        category: "Appetizer/Side Dish",
        region: "South-East Nigeria",
        ingredients: ["Dried shredded cassava (Abacha)", "Palm oil", "Potash", "Garden eggs", "Ugba (oil bean)", "Dry fish", "Utazi leaves", "Crayfish", "Peppers"],
        preparationTime: "30-40 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 300,
        price: 1200
    },
    {
        id: 26,
        name: "Ofensala (White Soup)",
        description: "Light-colored soup made without palm oil, thickened with yam",
        category: "Soup",
        region: "South-East Nigeria",
        ingredients: ["Assorted meat", "Stockfish", "Yam", "Uziza seeds", "Ehuru", "Uda", "Crayfish", "Pepper", "Onions"],
        preparationTime: "60-75 minutes",
        difficulty: "Medium",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 380,
        price: 2200
    },
    {
        id: 27,
        name: "Dodo (Fried Plantain)",
        description: "Sweet fried ripe plantain slices",
        category: "Side Dish/Snack",
        region: "All regions",
        ingredients: ["Ripe plantains", "Vegetable oil", "Salt (optional)"],
        preparationTime: "15-20 minutes",
        difficulty: "Easy",
        isVegetarian: true,
        isSpicy: false,
        servingSize: "3-4 people",
        calories: 220,
        price: 400
    },
    {
        id: 28,
        name: "Miyan Kuka",
        description: "Baobab leaf soup popular in Northern Nigeria",
        category: "Soup",
        region: "Northern Nigeria",
        ingredients: ["Baobab leaf powder", "Meat", "Dried fish", "Palm oil", "Onions", "Peppers", "Locust beans", "Spices"],
        preparationTime: "45-60 minutes",
        difficulty: "Easy",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 320,
        price: 1800
    },
    {
        id: 29,
        name: "Asaro (Yam Porridge)",
        description: "Mashed yam cooked with palm oil and peppers",
        category: "Main Course",
        region: "South-West Nigeria",
        ingredients: ["Yam", "Palm oil", "Tomatoes", "Peppers", "Onions", "Crayfish", "Smoked fish", "Stock cubes", "Spinach/Ugu"],
        preparationTime: "40-50 minutes",
        difficulty: "Easy",
        isVegetarian: false,
        isSpicy: true,
        servingSize: "4-6 people",
        calories: 310,
        price: 1200
    },
    {
        id: 30,
        name: "Yamarita (Egg-coated Yam)",
        description: "Sliced yam coated in egg and flour, then fried",
        category: "Snack/Breakfast",
        region: "All regions",
        ingredients: ["Yam", "Eggs", "Flour", "Salt", "Pepper", "Vegetable oil"],
        preparationTime: "30-40 minutes",
        difficulty: "Easy",
        isVegetarian: true,
        isSpicy: false,
        servingSize: "3-4 people",
        calories: 280,
        price: 800
    }
];

app.get('/', (req, res) => {
    res.status(200).send({ message: "Slash has been accessed" })
})

// Get all Nigerian foods
app.get('/api/foods', (req, res) => {
    try {
        res.json({
            success: true,
            status: 201,
            count: nigerianFoods.length,
            data: nigerianFoods
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            data: error
        });
    }
});

// Get food by ID
app.get('/api/foods/:id', (req, res) => {
    const food = nigerianFoods.find(f => f.id === parseInt(req.params.id));
    if (!food) {
        return res.status(404).json({ success: false, message: 'Food not found' });
    }
    res.json({ success: true, data: food });
});

// Get foods by category
app.get('/api/foods/category/:category', (req, res) => {
    const foods = nigerianFoods.filter(f =>
        f.category.toLowerCase() === req.params.category.toLowerCase()
    );
    res.json({ success: true, count: foods.length, data: foods });
});

// Get foods by region
app.get('/api/foods/region/:region', (req, res) => {
    const foods = nigerianFoods.filter(f =>
        f.region.toLowerCase().includes(req.params.region.toLowerCase())
    );
    res.json({ success: true, count: foods.length, data: foods });
});

// Get vegetarian foods
app.get('/api/foods/filter/vegetarian', (req, res) => {
    const foods = nigerianFoods.filter(f => f.isVegetarian === true);
    res.json({ success: true, count: foods.length, data: foods });
});

// Get spicy foods
app.get('/api/foods/filter/spicy', (req, res) => {
    const foods = nigerianFoods.filter(f => f.isSpicy === true);
    res.json({ success: true, count: foods.length, data: foods });
})


app.listen(port, () => {
    console.log(`Lift off! Server started at ${port}`);
})