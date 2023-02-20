context("Main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should check header words in english and font", function () {
    cy.get(".nav-container").contains("Recipes");
    cy.get(".nav-container").contains("About");
    cy.get(".nav-container").contains("Lifestyle & Event");
    cy.get(".nav-container").contains("Blog");
    cy.get(".button").contains("Get started");
    cy.get(".list > li").should(
      "have.css",
      "font-family",
      "Outfit, sans-serif"
    );
    cy.get(".logo").click()
    cy.get("body").contains("Best trending Now.")
  });

  it("should check romanian translation", function () {
    cy.get("select").select("Romanian");
    cy.get(".nav-container").contains("Retete");
    cy.get(".nav-container").contains("Despre noi");
    cy.get(".nav-container").contains("Stil de viata & evenimente");
    cy.get(".nav-container").contains("Blog");
    cy.get(".button").contains("Incepe");
  });
});
