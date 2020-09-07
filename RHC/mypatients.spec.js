describe('My Patients Tab verification ', () => {
    it('successfully loads', () => {
      cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
      cy.wait(5000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin');
      cy.get('.submit').click();
      cy.wait(30000);
    })
    it('Patient Move to Mypatient tab by admin User', () =>{
      cy.get('mat-list-option.mat-list-item.mat-list-option.mat-focus-indicator.mat-accent.ng-star-inserted', { timeout: 5000}).find('.mat-list-item-content > .mat-list-text > [fxlayout="row"] > .taskalias').as('include.text',' Verify Eligibility RHC ')
      cy.wait(8000)
      cy.contains(' Verify Eligibility RHC ').click({ multiple: true });
   cy.get('[type=checkbox]:eq(0)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);

   cy.get('[type=checkbox]:eq(1)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);

   cy.get('[type=checkbox]:eq(2)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);

   cy.get('[type=checkbox]:eq(3)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);

   cy.get('[type=checkbox]:eq(4)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);

   cy.get('[type=checkbox]:eq(5)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);

   cy.get('[type=checkbox]:eq(6)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);

   cy.get('[type=checkbox]:eq(7)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);

   cy.get('[type=checkbox]:eq(8)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);

   cy.get('[type=checkbox]:eq(9)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Claim', { timeout: 5000}).click();
   cy.get('.mat-button-wrapper', { timeout: 5000}).contains('Save', { timeout: 5000}).click();
   cy.wait(10000);
  })
});
describe('My Patients Tab verification ', () => {
it('Mypatient tab of admin User', () =>{
cy.get('span.mat-button-wrapper').contains('Patients', { timeout: 5000}).click();
cy.wait(5000);
cy.get('[href="#/patients/mypatients"]', { timeout: 10000}).click({ multiple: true });
cy.wait(3000);
cy.get('.mat-paginator-page-size-label', { timeout: 5000}).should('include.text',' Items per page: ')
cy.get('.mat-select-value-text.ng-tns-c170-5.ng-star-inserted', { timeout: 5000}).click({force: true});
cy.get('.mat-option-text:eq(1)').click({ multiple: true });
cy.get('.mat-paginator-range-label').as('include.text' , ' 1 – 10 ')
cy.wait(5000);
});
});