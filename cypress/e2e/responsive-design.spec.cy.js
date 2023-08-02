/* eslint-disable no-undef */
describe("Responsive Design", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("should display desktop layout correctly", () => {
    cy.viewport(1920, 1080);

    cy.get('[id="athleteImage"]').should("be.visible");
    cy.get('[id="athleteImage"]').should("have.css", "order", "1");

    cy.get('[id="athleteStats"]').should("be.visible");
    cy.get('[id="athleteStats"]').should("have.css", "order", "2");

    cy.get('[id="srLogo"]').should("be.visible");
    cy.get('[id="srLogo"]').should("have.css", "order", "3");
  });

  it("should display mobile layout correctly", () => {
    cy.viewport("iphone-x");

    cy.get('[id="srLogo"]').should("be.visible");
    cy.get('[id="srLogo"]').should("have.css", "order", "1");

    cy.get('[id="athleteImage"]').should("be.visible");
    cy.get('[id="athleteImage"]').should("have.css", "order", "2");

    cy.get('[id="athleteStats"]').should("be.visible");
    cy.get('[id="athleteStats"]').should("have.css", "order", "3");
  });

  it("should have scrollable table with fixed first column", () => {
    cy.viewport("iphone-x");

    cy.get('[id="report').should("be.visible");
    cy.get('[id="schoolNameColumn"]').should("be.visible");
    cy.get('[id="athleticDiv"').should("be.visible");

    cy.get('[id="report').scrollTo("right", { duration: 1000 });

    cy.get('[id="schoolNameColumn"]').should("be.visible");
    cy.get('[id="athleticDiv"').should("not.be.visible");
  });
});
