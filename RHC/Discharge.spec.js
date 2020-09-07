describe('RHC Login ', () => {
    it('successfully loads', () => {
      cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
      //cy.visit('https://192.168.70.21/rhc/');
      cy.wait(2000);
      cy.get('#username').type('nicole');
      cy.get('#password').type('nicole');
      cy.get('.submit').click();
      cy.wait(5000);
    });
it('Discharge Patients', () => {
    cy.get('span.mat-button-wrapper').contains('Patient').click();
    cy.wait(1000);
    cy.get('a[href*="#/patients/allpatients"]').click({force: true});
    cy.wait(1000); 
    //Searching for firstname
    cy.get('.mat-form-field:eq(1)').type('testf4').click({force: true});
    cy.get('[type=checkbox]:eq(1)', { timeout: 10000}).check({force: true});
    cy.wait(1000);
    cy.get('[mattooltip="Discharge Patient"]').click();
    cy.get('.mat-form-field:eq(1)').click({force: true});
    //Clicking on button Include Discharged Patients
    //cy.get('.mat-slide-toggle-thumb').click();
})
})