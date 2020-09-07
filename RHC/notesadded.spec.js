describe('RHC Login ', () => {
    it('successfully loads', () => {
      cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
      //cy.visit('https://192.168.70.21/rhc/');
      cy.wait(2000);
      cy.get('#username').type('bb');
      cy.get('#password').type('bb');
      cy.get('.submit').click();
      cy.wait(5000);
    });
it('Adding Notes to Patients', () => {
    cy.get('span.mat-button-wrapper').contains('Patient').click();
    cy.wait(1000);
    cy.get('a[href*="#/patients/allpatients"]').click({force: true});
    cy.wait(1000); 
    //Adding note to First patient in the list
    cy.get('tbody > :nth-child(1) > .cdk-column-first-Name').click({force: true});
    cy.get(':nth-child(2) > .mat-cell > .example-element-detail > .mat-card > .comment-add-section > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('new note');
    cy.get('span.mat-button-wrapper').contains('Add').click();
    //cy.get('mat-label').contains("Add Note").click({force: true});
    //Adding note to the particular patient
    cy.get('.mat-form-field:eq(1)').type('T24').click({force: true});
    cy.wait(2000);
    cy.get('.example-element-row > .cdk-column-first-Name').as('T24').click();
    cy.get('.comment-add-section > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('added again');
    //cy.get('mat-label').contains("Add Note").type('added new automation',{ parseSpecialCharSequences: false }).click({force: true});
    cy.get('span.mat-button-wrapper').contains('Add').click();
})



it('view the added notes', () => {
  cy.get('span.mat-button-wrapper').contains('Patient').click();
  cy.wait(1000);
  cy.get('a[href*="#/patients/mypatients"]').click({force: true});
  cy.wait(1000); 
  //Adding note to First patient in the list
  cy.get('tbody > :nth-child(1) > .cdk-column-last-name').click({force: true});
  //cy.get('tbody > :nth-child(3) > .cdk-column-first-name').click();
  //Adding note to the particular patient
  //cy.get('.mat-form-field:eq(1)').click({force: true});
  //cy.wait(2000);
  //cy.get('.example-element-row > .cdk-column-first-name',{timeout: 2000}).as('ETHHD10').click();
  //cy.wait(2000);
})


/*it('Search for added notes', () => {
  cy.get('span.mat-button-wrapper').contains('Patient').click();
  cy.wait(1000);
  cy.get('a[href*="#/patients/mypatients"]').click({force: true});
  cy.wait(1000); 
  //cy.get('[placeholder = "User Name"]').type('linda').click({timeout: 2000});
  //cy.get('[placeholder = "Notes"]').type('hi').click();
  //cy.get('#mat-input-327').type('hi').click();
  cy.get('.mat-form-field:eq(8)').type('linda').click({force: true});
  
})*/
})
