describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.19/dataken/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(5000);
    })
it('Import Application', () => { 
    cy.get('button').contains('menu').click();
    cy.get('button').contains('Monitor').click();
    cy.get('span.mat-button-wrapper').contains('Settings').click();
    cy.wait(1000);
    cy.get('button.mat-menu-item').contains('Retina').click();
    cy.wait(2000);
    cy.get('button.mat-menu-item').contains('Applications').click();
    cy.wait(2000);
    cy.get('span.ui-button-text.ui-clickable').contains('Import').click({force: true});
    cy.wait(3000);
    const yourFixturePath = 'application-profiles-1600059383374.csv';
    cy.get('input[type=file]').attachFile(yourFixturePath);
    cy.wait(8000);
    cy.get('input[placeholder="Search & enter"]').type('safari.exe').type('{enter}');
    cy.wait(3000);
    cy.get('td.mat-cell').should('include.text', 'safari.exe');
    cy.wait(3000);
})
})