describe("Games page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should visit and test the games page", () => {
    cy.get("h1").contains("Games");
    cy.get("select").select(0).should("have.value", "plus-score");
    cy.get("select").select(1).should("have.value", "minus-score");
    cy.get("select").select(2).should("have.value", "cheap");
    cy.get("select").select(3).should("have.value", "expensives");
    cy.get("select").select(4).should("have.value", "ascending");
    cy.get("select").select(5).should("have.value", "descending");

    cy.get(".cart__title > span").contains("0 itens");

    cy.get(".store > :nth-child(1)")
      .find(".game__info span")
      .invoke("css", "display", "none");

    cy.get(".store > :nth-child(1)")
      .find(".link")
      .invoke("css", "display", "flex")
      .dblclick();

    cy.get(".cart__title > span").contains("2 itens");

    cy.get('[data-cy="result-title"]').contains("subtotal");
    cy.get('[data-cy="result-description"]').contains("R$ 239,00");

    cy.get('[data-cy="result-title"]').contains("frete");
    cy.get('[data-cy="result-description"]').contains("R$ 20,00");

    cy.get('[data-cy="result-title"]').contains("total");
    cy.get('[data-cy="result-description"]').contains("R$ 259,00");
  });
});
