describe("My First Test", function() {
  it("Visits the sales form", function() {
    cy.visit("http://localhost:3000/");
    cy.contains("Sell").click();
  });
});
