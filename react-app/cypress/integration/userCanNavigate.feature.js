describe('User can navigate', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Successfully', () => {
    it('is expected to show the header container', () => {
      cy.get('[data-cy=header-navigation-container]').within(() => {
        cy.get('[data-cy=header-title]').should('contain.text', 'Course List');
        cy.get('[data-cy=header-navigation-buttons]')
          .children()
          .should('have.length', 6)
          .first()
          .should('contain.text', 'Workshops');
      });
    });
  });
});
