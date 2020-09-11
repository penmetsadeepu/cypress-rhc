describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.19/dataken/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(7000);
    });

    it('Creating the BU users', () => {
    cy.get('button').contains('menu').click();
    cy.get('button').contains('Monitor').click();
    cy.get('span.mat-button-wrapper').contains('Settings').click();
    cy.wait(1000);
    cy.get('button.mat-menu-item').contains('Retina').click();
    cy.wait(2000);
    cy.get('button.mat-menu-item').contains('Applications').click();
    cy.wait(2000);
    cy.get('span.mat-button-wrapper').contains('Create').click();
    cy.wait(1000);
    cy.get('[placeholder = "Tool"]').type('Cypress1');
    cy.get('[placeholder = "Title"]').type('Cypress1');
    cy.get('[placeholder = "Category"]').type('Cypress1');
    cy.get('[placeholder = "Sub-Category"]').type('Cypress1');
    cy.get('[placeholder = "Game grouping"]').type('Cypress1');
    cy.get('[placeholder = "Game Points"]').type('Cypress1');
    cy.get('[placeholder = "Productivity"]').type('Cypress1');
    cy.get('div.mat-select-value').c
    cy.get('[placeholder = "Application Name"]').type('Cypress1');

    })
})
