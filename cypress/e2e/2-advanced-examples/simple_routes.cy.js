context("Test simple routes", () => {
  it("should display the text from routes", function () {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("body").contains("Best trending Now");
    cy.visit("http://localhost:3000/lifestyle");
    cy.get("body").contains("Lifestyle");
    cy.visit("http://localhost:3000/about");
    cy.get("body").contains("About");
    cy.visit("http://localhost:3000/blog");
    cy.get("body").contains("Blog");
  });
});
