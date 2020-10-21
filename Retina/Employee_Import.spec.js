describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.19/dataken/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(15000);
    })
    //Import users
    it('Import the Hierarchy_employees ', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Employees').click();
        cy.wait(3000);  
        cy.get('p-fileupload.ng-star-inserted').contains('Import').click({force: true});
        cy.wait(3000);
        const yourFixturePath = 'Hierarchy_employees.csv';
        cy.get('input[type=file]').attachFile(yourFixturePath);
        cy.wait(8000);
        cy.get('input[placeholder="Search & enter"]').type('deepthi_cypress').type('{enter}');
        cy.wait(2000);
        cy.get('td.mat-cell').should('include.text', 'deepthi_cypress');
        cy.wait(5000);
      })
      
  
      //Import Hierarchy
      it('Import Hierarchy', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Employees').click();
        cy.wait(3000);
        cy.get('p-fileupload.ng-star-inserted').contains('Import Hierarchy').click({force: true});
        cy.wait(3000);
        const yourFixturePath1 = 'Hierarchy_Mapping.csv';
        cy.get('input[type=file]').attachFile(yourFixturePath1);
        cy.wait(4000);
      })
  
  
      //Export
      it('Export Employess', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina').click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Employees').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Export').click();
      })
})