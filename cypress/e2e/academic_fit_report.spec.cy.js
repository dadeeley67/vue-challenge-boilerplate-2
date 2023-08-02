/* eslint-disable no-undef */
describe("AcademicFitReport", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("renders correctly", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("h2", "Academic Fit Report").should("be.visible");
  });

  it("renders input fields", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-cy="submit-athlete-name"]').should("be.visible");
  });

  it("edits input fields", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Doe").blur();
    cy.get('[data-cy="submit-athlete-name"]').should("have.value", "John Doe");
  });

  it("validates input fields", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-cy="submit-athlete-name"]').clear().type("John 3Doe").blur();
    cy.get('[data-cy="submit-athlete-name"]').should("have.value", "John Doe");
    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Doe ").blur();
    cy.get('[data-cy="submit-athlete-name"]').should("have.value", "John Doe");
  });
});
