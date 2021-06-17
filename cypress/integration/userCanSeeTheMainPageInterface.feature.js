describe('User can see the main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Successfully', () => {
    it('is expected to show the header container', () => {
      cy.get('[data-cy=header-navigation-container]').within(() => {
        cy.get('[data-cy=header-title]').should('contain', 'Course List');
        cy.get('[data-cy=header-navigation-buttons]')
          .children()
          .should('have.length', 6)
          .first()
          .should('contain', 'Workshops');
      });
    });
  });
});
