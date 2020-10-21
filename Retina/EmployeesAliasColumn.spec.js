describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.21/dataken/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(5000);
    });

it('Verify if EmployeeAlias column is not displayed', () => {
      cy.get('button').contains('menu').click();
      cy.get('button').contains('Monitor').click();
      cy.get('span.mat-button-wrapper').contains('Settings').click();
      cy.wait(1000);
      cy.get('button.mat-menu-item').contains('Retina').click();
      cy.wait(3000);
      cy.get('button.mat-menu-item').contains('Employees').click();
      cy.wait(3000);
      //cy.get('.ng-star-inserted').contains('EmployeeID').click();
      cy.get('.ng-star-inserted').should('not.have.value', 'EmployeeID');
      //cy.get('.ng-star-inserted').contains('EmployeeID').should('not.Exists');
     // cy.get('.ng-star-inserted').contains('EmployeeID');
 
    })
 
})

