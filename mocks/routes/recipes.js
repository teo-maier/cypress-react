
// recipes data

const RECIPES = [
  {
    id: "1",
    name: "Baked Shrimp Scampi",
    preptime: 0,
    waittime: 0,
    cooktime: 0,
    servings: 6,
    calories: 2565,
    instructions:
      "Preheat the oven to 425 degrees F.\r\n\r\nDefrost shrimp by putting in cold water, then drain and toss with wine, oil, salt, and pepper. Place in oven-safe dish and allow to sit at room temperature while you make the butter and garlic mixture.\r\n\r\nIn a small bowl, mash the softened butter with the rest of the ingredients and some salt and pepper.\r\n\r\nSpread the butter mixture evenly over the shrimp. Bake for 10 to 12 minutes until hot and bubbly. If you like the top browned, place under a broiler for 1-3 minutes (keep an eye on it). Serve with lemon wedges and French bread.\r\n\r\nNote: if using fresh shrimp, arrange for presentation. Starting from the outer edge of a 14-inch oval gratin dish, arrange the shrimp in a single layer cut side down with the tails curling up and towards the center of the dish. Pour the remaining marinade over the shrimp. ",
    ingredients: [
      "2/3 cup panko\r",
      "1/4 teaspoon red pepper flakes\r",
      "1/2 lemon, zested and juiced\r",
      "1 extra-large egg yolk\r",
      "1 teaspoon rosemary, minced\r",
      "3 tablespoon parsley, minced\r",
      "4 clove garlic, minced\r",
      "1/4 cup shallots, minced\r",
      "8 tablespoon unsalted butter, softened at room temperature\r",
      "<hr>",
      "2 tablespoon dry white wine\r",
      "Freshly ground black pepper\r",
      "Kosher salt\r",
      "3 tablespoon olive oil\r",
      "2 pound frozen shrimp",
    ],
    tags: ["seafood", "shrimp", "main"],
  },
  {
    id: "2",
    name: "Strawberries Romanov (La Madeleine copycat)",
    preptime: 0,
    waittime: 0,
    cooktime: 0,
    servings: 4,
    comments: "",
    calories: 0,
    instructions:
      "Wash strawberries and cut the tops off. Let strawberries drain.  Mix together heavy whipping cream, powdered sugar, and the brandy. Beat with a mixer till this becomes thick.  Place strawberries into glasses and spoon over the sauce.\r\n",
    ingredients: [
      "2 tbsp powdered sugar\r",
      "1/2 pt heavy whipping cream\r",
      "1 lb strawberries, (2 pints)\r",
      "4 tbsp brandy",
    ],
    tags: ["fruit", "dessert", "strawberries", "copycat", "untried"],
  },
];

module.exports = [
  {
    id: "get-recipes", // route id
    url: "/api/recipes", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: RECIPES, // body to send
        },
      },
      {
        id: "error", // variant id
        type: "json", // variant handler id
        options: {
          status: 400, // status to send
          // body to send
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-recipe-1", // route id
    url: `/api/recipes/${RECIPES[0].id}`, // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: RECIPES[0], // body to send
        },
      },
      {
        id: "real", // variant id
        type: "middleware", // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const userId = req.params.id;
            const user = USERS.find(
              (userData) => userData.id === Number(userId)
            );
            if (user) {
              res.status(200);
              res.send(user);
            } else {
              res.status(404);
              res.send({
                message: "User not found",
              });
            }
          },
        },
      },
    ],
  },
  {
    id: "get-recipe-2", // route id
    url: `/api/recipes/${RECIPES[1].id}`, // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: RECIPES[1], // body to send
        },
      },
      {
        id: "real", // variant id
        type: "middleware", // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const userId = req.params.id;
            const user = USERS.find(
              (userData) => userData.id === Number(userId)
            );
            if (user) {
              res.status(200);
              res.send(user);
            } else {
              res.status(404);
              res.send({
                message: "User not found",
              });
            }
          },
        },
      },
    ],
  },
];
