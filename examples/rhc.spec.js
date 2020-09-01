describe('RHC Login ', () => {
    it('successfully loads', () => {
      cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
      //cy.visit('https://192.168.70.21/rhc/');
      cy.wait(5000);
      cy.get('#username').type('bb');
      cy.get('#password').type('bb');
      cy.get('.submit').click();
      cy.wait(5000);
    });
/*it('Edit to new Episode to Patients', () => {
    cy.get('span.mat-button-wrapper').contains('Patient').click();
    cy.wait(1000);
    cy.get('a[href*="#/patients/mypatients"]').click({force: true});
    cy.wait(10000); 
    cy.get('[type=checkbox]:eq(0)', { timeout: 10000}).check({force: true});
    cy.wait(10000);
    cy.get('[mattooltip="Edit Patient Record"]').click();
    //cy.get('label.ng-star-inserted').as('include.text','Patient Type*')
    //cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="RHC"]').click({force: true})
    //cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="RHH"]').click({force: true})
    cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000}).click({multiple: true});
    cy.get('.mat-option-text', { timeout: 2000}).contains( 'Hyderabad', { timeout: 2000}).click({force: true});
    //cy.get('.mat-option-text', { timeout: 2000}).contains( 'Bangalore', { timeout: 2000}).click({force: true});
    cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000}).click({force: true});
    //cy.get('.mat-option-text', { timeout: 2000}).contains( 'physician1', { timeout: 2000}).click({force: true});
    cy.get('.mat-option-text', { timeout: 2000}).contains( 'physician2', { timeout: 2000}).click({force: true});
    cy.get('label.ng-star-inserted').as('include.text','Representative*')
    cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="No"]').click({force: true});
    //cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Yes"]').click({force: true});
    //cy.get('[formcontrolname="lasName"]',{timeout: 2000} ).type('newlastname');
    //cy.get('[formcontrolname="firName"]').type('newfirstname');
    //cy.get(':nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000}).click({multiple: true});
    //cy.get('.mat-option-text', { timeout: 2000}).contains('Spouse',{timeout: 2000}).click({force: true}); 
    //cy.get('label.ng-star-inserted').as('include.text','Representative Type*')
    //cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Patient Selected"]').click({force: true})
    //cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Legally Authorized"]').click({force: true}) 
    cy.get('label.ng-star-inserted').as('include.text','Guarantor Type*')
    cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Self"]').click({force: true})
    //cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Spouse"]').click({force: true})
    //cy.get('[formcontrolname="LastName"]',{timeout: 2000} ).type('newlastname');
    //cy.get('[formcontrolname="FirstName"]').type('newfirstname');
    //cy.get('[formcontrolname="address1"]').type('newaddress');
    //cy.get('[formcontrolname="zipCode"]').type('3020');
    //cy.get('[formcontrolname="city"]').type('newcity');
    //cy.get('[formcontrolname="state"]').type('newstate');
    //cy.get('[formcontrolname="phone"]').type('9441285727');
    cy.get('label.ng-star-inserted').as('include.text','Payment')
    cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Commercial Insurance"]').click({force: true})
    //cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Private Pay"]').click({force: true})
   //cy.get('[formcontrolname="medicareNum"]').clear();
    //cy.get('[formcontrolname="medicareNum"]').type('5342879');
    cy.get('span.mat-button-wrapper').contains('Submit').click({force: true});
    cy.wait(2000);  
})*/


   /* it('uploading file',() => {
    cy.get('span.mat-button-wrapper').contains('Patient').click();
    cy.wait(1000);
    cy.get('a[href*="#/patients/mypatients"]',{ timeout: 10000}).click({force: true});
    cy.wait(7000); 
    cy.get('[type=checkbox]:eq(0)', { timeout: 10000}).check({force: true});
    cy.wait(10000);
    cy.get('[mattooltip="Upload File"]').click();
    cy.wait(3000);
    //cy.get('span.pbutton.ui-fileupload-choose.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-icon-left',{timeout: 4000}).contains('Choose',{timeout: 2000}).click({force: true})
    const yourFixturePath = 'user.pdf';
    cy.get('input[type=file]').attachFile(yourFixturePath);
    cy.wait(4000);
    //cy.get('button.ng-star-inserted',{timeout: 5000}).contains('Upload').click();
    cy.get('span.ui-button-text.ui-clickable').contains('Upload').click();
    cy.wait(5000);
    cy.get('[mattooltip="Click to Download"]').click({multiple: true});
    //cy.get('[mattooltip="Click to Delete"]').click({multiple: true});   
})*/


it('Export csv',() => {
    cy.get('span.mat-button-wrapper').contains('Patient').click();
    cy.wait(1000);
    cy.get('a[href*="#/patients/mypatients"]',{ timeout: 10000}).click({force: true});
    cy.wait(7000); 
    cy.get('[type=checkbox]:eq(0)', { timeout: 10000}).check({force: true});
    cy.wait(10000);
    cy.get('[mattooltip="Export CSV"]').click();
    cy.wait(3000);
    cy.get('div.mat-radio-label-content').contains('Export all rows (maximum 10000)').click();
    //cy.get('div.mat-radio-label-content').contains('Export rows present in current view').click();
    //cy.get('span.mat-button-wrapper').contains('Cancel').click();
    cy.get('span.mat-button-wrapper').contains('Export').click({force: true});
   
})
})


