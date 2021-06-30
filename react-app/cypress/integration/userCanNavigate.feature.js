describe('User can navigate', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('is expected to show the header container', () => {
    cy.get('[data-cy=header-title]').should('contain.text', 'Course List');
    cy.get('[data-cy=header-navigation]')
      .children()
      .should('have.length', 6)
      .first()
      .should('contain.text', 'Workshops');
  });
  cy.get('[data-cy= course-category]').should('have.length', 7);
});
