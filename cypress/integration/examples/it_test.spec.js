describe("Put a jacket up for sale", function() {
  it("Visits the sales form", function() {
    cy.visit("http://localhost:3000/");
    cy.contains("Sell").click();
  });

  it("Adds the name of the ad", function() {
    cy.get('[data-test-id="ad-name"]')
      .type("Coole Test Jacke")
      .should("have.value", "Coole Test Jacke");
  });

  it("Chooses the brand", function() {
    cy.get('[data-test-id="brand-name"]').select("Patagonia");
  });

  it("Sets the price of the jacket", function() {
    cy.get('[data-test-id="price"]').type(120);
  });

  it("Sets the condition of the jacket", function() {
    cy.get('[data-test-id="jacket-condition"]').select("Gut");
  });

  it("Sets the image of the jacket", function() {
    cy.get('[data-test-id="image-url"]').type(
      "https://img01.ztat.net/article/PA/94/2F/00/2Q/11/PA942F002-Q11@26.jpg?imwidth=1800"
    );
  });

  it("Sets the location of the jacket", function() {
    cy.get('[data-test-id="jacket-location"]').type("Montabaur");
  });

  it("Sets the size of the jacket", function() {
    cy.get('[data-test-id="jacket-size"]').select("XL");
  });

  it("Sets the description of the jacket", function() {
    cy.get('[data-test-id="jacket-description"]').type(
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    );
  });

  it("Sets the email of the seller", function() {
    cy.get('[data-test-id="seller-email"]').type("w@w.de");
  });

  it("Puts the jacket up for sale", function() {
    cy.get('[data-test-id="submit-button"]').click();
  });

  it("Checks if the jacket has been submitted", function() {
    cy.visit("http://localhost:3000/jackets");
    cy.get("main").scrollTo("bottom");
  });
});
