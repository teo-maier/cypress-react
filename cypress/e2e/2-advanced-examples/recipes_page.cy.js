
context("Recipes page", () => {

  it("should display recipes", function () {
    cy.intercept("http://localhost:3100/api/recipes", (req) => {
      delete req.headers["if-none-match"];
    }).as("response");

    cy.visit("http://localhost:3000/recipes");


    cy.wait("@response")
      .its("response")
      .should("deep.include", {
        statusCode: 200,
        statusMessage: "OK",
      })
      .and("have.property", "body")
      .then((body) => {
        expect(body).to.be.an("array");
      });

    cy.get("button").contains("See recipe");
  });
});
