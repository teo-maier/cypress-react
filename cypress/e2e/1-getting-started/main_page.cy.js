
context("Open secure articles", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display application name", function () {
    cy.get(".nav-container").contains("Recipes");
    cy.get(".nav-container").contains("How to");
    cy.get(".nav-container").contains("Lifestyle & Event");
    cy.get(".nav-container").contains("Blog");
    cy.get(".button").contains("Get started");
    cy.get('.list > li').should('have.css', 'font-family', 'Outfit, sans-serif')
  });
});
