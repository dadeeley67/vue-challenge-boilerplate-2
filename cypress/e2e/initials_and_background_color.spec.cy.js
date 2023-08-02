/* eslint-disable no-undef */
describe("Initials and Background Color", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
    cy.window().then((win) => {
      win.document.querySelector('[id="athleteImage"]').style.display = "none";
      win.document.querySelector('[id="avatarPlaceholder"]').style.display =
        "inline-flex";
    });
  });

  it("should display initials when no image is provided", () => {
    cy.get('[id="athleteImage"]').should("not.be.visible");
    cy.get('[id="avatarPlaceholder"]').should("be.visible");
    cy.get('[id="avatarPlaceholder"]').should("have.text", "MC");
  });

  it("should change initials when name is edited", () => {
    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Doe").blur();
    cy.get('[id="avatarPlaceholder"]').should("have.text", "JD");
  });

  it("should display the inital of first and last name, regardless of how many names are present", () => {
    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Doe").blur();
    cy.get('[id="avatarPlaceholder"]').should("have.text", "JD");
    cy.get('[data-cy="submit-athlete-name"]')
      .clear()
      .type("John Doe Smith")
      .blur();
    cy.get('[id="avatarPlaceholder"]').should("have.text", "JS");
  });

  it("should change background color to the correct color based on last name when edited", () => {
    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Doe").blur();
    cy.get('[id="avatarPlaceholder"]').should(
      "have.class",
      "bg-avatarPlaceholder"
    );

    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Foe").blur();
    cy.get('[id="avatarPlaceholder"]').should(
      "have.class",
      "bg-avatarPlaceholder2"
    );

    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Koe").blur();
    cy.get('[id="avatarPlaceholder"]').should(
      "have.class",
      "bg-avatarPlaceholder3"
    );

    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Poe").blur();
    cy.get('[id="avatarPlaceholder"]').should(
      "have.class",
      "bg-avatarPlaceholder4"
    );

    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Uoe").blur();
    cy.get('[id="avatarPlaceholder"]').should(
      "have.class",
      "bg-avatarPlaceholder5"
    );

    cy.get('[data-cy="submit-athlete-name"]').clear().type("John Zoe").blur();
    cy.get('[id="avatarPlaceholder"]').should(
      "have.class",
      "bg-avatarPlaceholder6"
    );
  });
});
