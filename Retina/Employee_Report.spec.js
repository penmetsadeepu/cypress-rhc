describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.21/dataken/');
      cy.wait(2000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(5000);
    })
    it('Plotting Table chart on employee table', () => {
      cy.get('[mattooltip="Visualize"]').click();
      cy.wait(4000);
      cy.get('span.mat-button-wrapper').contains('Report').click();
      cy.wait(4000);
      cy.get('span.mat-button-wrapper').contains('Create').click();
      cy.wait(4000);
      cy.get('button.mat-menu-item').contains('Table').click({force:true});
      cy.wait(3000);
      cy.contains('EMPLOYEE').trigger('dragstart');
      cy.get('[placeholder = "Drag and Drop Data Model (Table)"]').trigger('drop');
      cy.wait(1500);
      cy.get('[placeholder = "Search"]').type('First Name').click();
      cy.get('[placeholder = "Search"]').clear();
      cy.wait(1000);
      cy.get('.mat-chip').contains('Employee').click();
      cy.wait(3000);
      cy.get('td.ng-star-inserted').contains('EmployeeAlias').click();
      cy.get('.pi.pi-angle-right.ui-clickable.ui-button-icon-left.ng-star-inserted').click();
      //cy.get('[icon="pi pi-angle-right"] > .ui-button > .pi').click();
      cy.wait(4000);
      cy.get('span.mat-button-wrapper').contains('APPLY').click();
      cy.wait(4000);
      cy.get('span.mat-button-wrapper').contains('Render').click();
      cy.wait(5000);
      cy.get('table').should('be.visible');
      cy.get('th').should('include.text', 'EmployeeAlias');
      cy.get('span.mat-button-wrapper').contains('Chart Data').click();
      cy.wait(8000);
      cy.get('th').should('include.text', 'EmployeeAlias');
      cy.wait(2000);
  })
  
 /*it('Plotting Table chart on vtEmp_ActMetrics_App table', () => {
    cy.get('[mattooltip="Visualize"]').click();
    cy.wait(4000);
    cy.get('span.mat-button-wrapper').contains('Report').click();
    cy.wait(4000);
    cy.get('span.mat-button-wrapper').contains('Create').click();
    cy.wait(4000);
    cy.get('button.mat-menu-item').contains('Table').click({force:true});
    cy.wait(3000);
    cy.get('[placeholder = "Search"]').type('EmployeeID').click();
    cy.get('[placeholder = "Search"]').clear();
    cy.wait(2000);
    cy.contains('VTEMP_ACTMETRICS_APP').trigger('dragstart');
    cy.get('[placeholder = "Drag and Drop Data Model (Table)"]').trigger('drop');
    cy.wait(1500);
    cy.get('.mat-chip').contains('vtEmp_ActMetrics_App').click();
    cy.wait(3000);
    cy.get('th.ng-star-inserted[placeholder = "Search Columns"]').contains('All Columns').type('EmployeeAlias');
   //cy.get('[placeholder = "Search Columns"]').type('EmployeeAlias')
    cy.get('td.ng-star-inserted').contains('EmployeeAlias',{timeout: 3000}).click();
    cy.wait(3000);
    cy.get('.pi.pi-angle-right.ui-clickable.ui-button-icon-left.ng-star-inserted').click();
    cy.wait(4000);
    cy.get('span.mat-button-wrapper').contains('APPLY').click();
    cy.wait(4000);
    cy.get('span.mat-button-wrapper').contains('Render').click();
    cy.wait(5000);
    cy.get('table').should('be.visible');
    cy.get('th').should('include.text', 'EmployeeAlias');
    cy.get('span.mat-button-wrapper').contains('Chart Data').click();
    cy.wait(8000);
    cy.get('th').should('include.text', 'EmployeeAlias');
    cy.wait(2000);
})
/*it('Plotting Table chart on  AgentDailyConsolidation table', () => {
  cy.get('[mattooltip="Visualize"]').click();
  cy.wait(4000);
  cy.get('span.mat-button-wrapper').contains('Report').click();
  cy.wait(4000);
  cy.get('span.mat-button-wrapper').contains('Create').click();
  cy.wait(4000);
  cy.get('button.mat-menu-item').contains('Table').click({force:true});
  cy.wait(3000);
  cy.get('[placeholder = "Search"]').type('Last Name').click();
  cy.get('[placeholder = "Search"]').clear();
  cy.wait(1000);
  cy.contains('AGENTDAILYCONSOLIDATION').trigger('dragstart');
  cy.get('[placeholder = "Drag and Drop Data Model (Table)"]').trigger('drop');
  cy.wait(1500);
  cy.get('.mat-chip').contains('AgentDailyConsolidation').click();
  cy.wait(3000);
  cy.get('td.ng-star-inserted').contains('EmployeeAlias').click();
  cy.get('.pi.pi-angle-right.ui-clickable.ui-button-icon-left.ng-star-inserted').click();
  cy.wait(4000);
  cy.get('span.mat-button-wrapper').contains('APPLY').click();
  cy.wait(4000);
  cy.get('span.mat-button-wrapper').contains('Render').click();
  cy.wait(5000);
  cy.get('table').should('be.visible');
  cy.get('th').should('include.text', 'EmployeeAlias');
  cy.get('span.mat-button-wrapper').contains('Chart Data').click();
  cy.wait(8000);
  cy.get('th').should('include.text', 'EmployeeAlias');
  cy.wait(2000);
})*/



})