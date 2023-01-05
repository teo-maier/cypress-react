
context("Recipe by id", () => {

  it("should display recipe's info by id 1", function () {
    cy.intercept("http://localhost:3100/api/recipes/1", (req) => {
      delete req.headers["if-none-match"];
    }).as("response");

    cy.visit("http://localhost:3000/recipes/1/view");


    cy.wait("@response")
      .its("response")
      .should("deep.include", {
        statusCode: 200,
        statusMessage: "OK",
      })
      .and("have.property", "body")
      .fixture('recipe_1')
      .then((body) => {
        expect(body['name']).to.eq("Baked Shrimp Scampi")
      });

  });

  it("should display recipe's info by id 2", function () {
    cy.intercept("http://localhost:3100/api/recipes/2", (req) => {
      delete req.headers["if-none-match"];
    }).as("response");

    cy.visit("http://localhost:3000/recipes/2/view");


    cy.wait("@response")
      .its("response")
      .should("deep.include", {
        statusCode: 200,
        statusMessage: "OK",
      })
      .and("have.property", "body")
      .fixture('recipe_2')
      .then((body) => {
        expect(body['name']).to.eq("Strawberries Romanov")
      });

  });
});