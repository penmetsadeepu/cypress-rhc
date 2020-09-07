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
    cy.wait(5000); 
    //Adding note to First patient in the list
    cy.get('tbody > :nth-child(3) > .cdk-column-first-Name').click({multiple: true});
    cy.get(':nth-child(4) > .mat-cell > .example-element-detail > .mat-card > .comment-add-section > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('cypressnote');
    cy.get('span.mat-button-wrapper').contains('Add').click({force: true});
    cy.wait(4000);
    /*//Adding note to the particular patient
    cy.get('.mat-form-field:eq(1)').type('X11').click({force: true});
    cy.wait(2000);
    cy.get('.example-element-row > .cdk-column-first-Name').click({multiple: true});
    cy.get('.comment-add-section > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('added cypress note again');
    //cy.get('mat-label').contains("Add Note").type('added new automation',{ parseSpecialCharSequences: false }).click({force: true});
    cy.get('span.mat-button-wrapper').contains('Add').click();
    cy.wait(2000);
    cy.get('.mat-form-field:eq(1)',{ parseSpecialCharSequences: false }).type('{enter}',{backspace});
    cy.wait(2000);*/
    cy.get('.mat-select-arrow').click();
    cy.wait(1000);
    cy.get('span.mat-option-text').contains('10').click({multiple: true});
    cy.wait(4000);

    //View the added notes
    //cy.get('tbody > :nth-child(1) > .cdk-column-first-name').click({force: true});
     cy.get('.example-element-row > .cdk-column-first-Name').click({multiple: true});
     cy.wait(2000);


     //Search for the notes
     cy.get('[placeholder = "User Name"]').type('bb').click({timeout: 2000});
     cy.wait(3000);
     
})

})
