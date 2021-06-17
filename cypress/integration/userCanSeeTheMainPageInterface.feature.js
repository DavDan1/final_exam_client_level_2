describe('User can see the main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Successfully', () => {
    it('is expected to show the header', () => {
      cy.get('[data-cy=header-navigation-container]').within(() => {
        cy.get('[data-cy=header-title]').should('contain', 'Course List');
        cy.get('[data-cy=header-navigation-buttons]')
          .eq(6)
          .within(() => {
            cy.get('[data-cy=workshops-btn]').click();
          });
      });
    });
  });
});
