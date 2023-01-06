context("Recipes page", () => {
  it("should display recipes", function () {
    cy.visit("http://localhost:3000/recipes/new");

    cy.get("#id").type(4);
    cy.get("#name").type("Chec");
    cy.get("#prepTime").type(15);
    cy.get("#waitTime").type(30);
    cy.get("#cookTime").type(20);
    cy.get("#noServings").type(8);
    cy.get("#calories").type(750);
    cy.get("#ingredients").type("faina lapte oua");
    cy.get("#tags").type("chec ciocolata");
    cy.get("#instructions").type("lorem ipsum");

    cy.get("button").contains("Create recipe").click();

    cy.intercept("http://localhost:3100/api/recipes/new", (req) => {}).as(
      "response"
    );

    cy.visit("http://localhost:3000/recipes/dashboard");
  });
});
