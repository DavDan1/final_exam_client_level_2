describe('User can navigate by clicking on the navigation buttons', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('is expected to navigate by buttons', () => {
    cy.get('[data-cy=workshops-btn]')
      .click()
      .within(() => {
        cy.get('[data-cy=workshops-main-container]').within(() => {
          cy.get('[data-cy=workshops-title]').should('contain', 'Work The Web');
          cy.get('[data-cy=workshops-category]').should('contain', 'workshops');
        });
      });
  });
});
