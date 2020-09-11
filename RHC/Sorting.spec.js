describe('RHC Login ', () => {
    it('successfully loads', () => {
      cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
      //cy.visit('https://192.168.70.21/rhc/');
      cy.wait(2000);
      cy.get('#username').type('bb');
      cy.get('#password').type('bb');
      cy.get('.submit').click();
      cy.wait(4000);
    });
it('Search for a  Patients with FirstName', () => {
    cy.get('span.mat-button-wrapper').contains('Patient').click();
    cy.wait(1000);
    cy.get('a[href*="#/patients/allpatients"]').click({force: true});
    cy.wait(2000);  
    ode
    
    /*//Searching with Patient Name
    cy.get('.mat-form-field:eq(0)').type('RHH').click({force: true});
    cy.wait(2000);
    
    //Searching with First Name
    //cy.get('.mat-form-field:eq(1)').type('rvFd913').click({force: true});
    //cy.wait(2000);
    //cy.get('[type=checkbox]:eq(0)').check({force: true});

    //Searching with Second Name
    cy.get('.mat-form-field:eq(2)').type('s20').click({force: true});
    cy.wait(2000);*/
    
    
    //Searching with Date
    cy.viewport(1280, 800)
    cy.get('[placeholder = "From"]').type('Aug 15, 2010');
    cy.get('.mat-form-field:eq(4)').type('Aug 15, 2020').click({force: true});
    cy.wait(3000);
    
            
    //Searching with username & note
    cy.viewport(1280, 800);
    cy.get('[placeholder = "User Name"]').type('bb').click();
    cy.wait(1000);
    cy.get('.mat-form-field:eq(9)').type('new note').click({force: true});
   
    //cy.wait(2000);
    
    
    //Searching with Payment Type
    //cy.get('.mat-form-field:eq(10)').type('Private Pay').click();
    //cy.wait(2000); 

})



//Sorting on available columns
/*it('Sorting', () => {
    cy.get('span.mat-button-wrapper').contains('Patient').click();
    cy.wait(1000);
    cy.get('a[href*="#/patients/allpatients"]').click({force: true});
    cy.wait(5000);  

    //Sorting with Patient Type
    cy.get('.cdk-column-patient-type > .mat-sort-header-container > .mat-sort-header-button').contains('Patient Type').click();
    cy.wait(2000);
    
    //Sorting with First Name
    cy.get('.cdk-column-first-Name > .mat-sort-header-container > .mat-sort-header-button').contains('First Name').click();
    cy.wait(2000);

    //Sorting with Last Name
    cy.get('.cdk-column-last-Name > .mat-sort-header-container > .mat-sort-header-button').contains('Last Name').click();
    cy.wait(2000);

    //Sorting with Date of Birth
    cy.get('.cdk-column-date-Of-Birth > .mat-sort-header-container > .mat-sort-header-button').contains('Date of Birth').click();
    cy.wait(2000);

    //Sorting with Sex
    cy.get('.cdk-column-sex > .mat-sort-header-container > .mat-sort-header-button').contains('Sex').click();
    cy.wait(2000);

    //Sorting with Medicare Number
    cy.get('.cdk-column-medicareNum > .mat-sort-header-container > .mat-sort-header-button').contains('Medicare Num').click();
    cy.wait(2000);

    //Sorting with First Name
    cy.get('.cdk-column-Notes > .mat-sort-header-container > .mat-sort-header-button').contains('Notes').click({force: true});
    cy.wait(2000);

    //Sorting with First Name
    cy.get('.cdk-column-payment > .mat-sort-header-container > .mat-sort-header-button').contains('Payment').click();
    cy.wait(2000);
})*/



/*it('Items per page & Pagnation', () => {



    cy.get('span.mat-button-wrapper').contains('Patient').click();
    cy.wait(1000);
    cy.get('a[href*="#/patients/allpatients"]').click({force: true});
    cy.wait(5000);  
    cy.get('.mat-select-arrow').click();
    cy.wait(1000);
    cy.get('span.mat-option-text').contains('10').click({multiple: true});

    cy.get('.mat-paginator-range-label').should('include.text',' 1 – 10 of 126 ');
    cy.get('.mat-paginator-navigation-next').click();
    cy.get('.mat-paginator-range-label').should('include.text',' 11 – 20 of 126 ');
    cy.get('.mat-paginator-navigation-previous').click();
    cy.get('.mat-paginator-range-label').should('include.text',' 1 – 10 of 126 ');

})*/





})




