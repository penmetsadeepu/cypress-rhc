describe('Dataingest creation ', () => {
    it('successfully loads', () => {
      cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
      cy.wait(5000);
      cy.get('#username').type('bb');
      cy.get('#password').type('bb');
      cy.get('.submit').click();
      cy.wait(30000);
    });
        describe('Verify Eligibility RHC by BB User', function() {
    var i = 0;
    for (var i = 0; i < 10 ; i++) {
    it('Verify Eligibility RHC by BB User', () =>{
   cy.get('mat-list-option.mat-list-item.mat-list-option.mat-focus-indicator.mat-accent.ng-star-inserted', { timeout: 5000}).find('.mat-list-item-content > .mat-list-text > [fxlayout="row"] > .taskalias').as('include.text',' Verify Eligibility RHC ')
   cy.wait(5000)
   cy.contains(' Verify Eligibility RHC ').click({ multiple: true });
   cy.wait(5000)
   cy.get('[type=checkbox]:eq(0)', { timeout: 5000}).check({force: true});
   cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
   cy.wait(10000)
   cy.get('#example-radio-group-label', { timeout: 2000}).contains('RHC Eligibility*')
   cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('.mat-radio-label-content').contains('No').click({ multiple: true });
   cy.get(':nth-child(2) > #example-radio-group-label', { timeout: 2000}).contains('Waiting on Insurance*')
   cy.get('.mat-radio-label-content:eq(2)').contains('Yes').click({ multiple: true });
   cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Commercial Insurance"]').click({force: true})
   cy.get('span.mat-button-wrapper', { timeout: 2000}).contains(' Complete').click({force: true});
   cy.wait(10000);
    })
    it('successfully loads', () => {
    cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
    cy.wait(5000);
    cy.get('#username').type('nicole');
    cy.get('#password').type('nicole');
    cy.get('.submit').click();
    cy.wait(30000);
        });
    it('Verify Eligibility RHH by nicole', () => {
    cy.get('mat-list-option.mat-list-item.mat-list-option.mat-focus-indicator.mat-accent.ng-star-inserted', { timeout: 5000}).find('.mat-list-item-content > .mat-list-text > [fxlayout="row"] > .taskalias', { timeout: 5000}).contains(' Verify Eligibility RHH ', { timeout: 2000}).click({ multiple: true })
    cy.wait(8000)
    cy.get('[type=checkbox]:eq(0)', { timeout: 5000}).check({force: true});
    cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
    cy.wait(10000);
    cy.get('#example-radio-group-label').contains('RHH Eligibility*')
    cy.get('mat-radio-button.mat-radio-button.mat-accent').find('.mat-radio-label-content').should('include.text','No')
    cy.contains('No').click({ force: true });
    cy.get('span.mat-button-wrapper', { timeout: 2000}).contains(' Complete').click({force: true});
    cy.wait(10000);
    })

    it('successfully loads', () => {
    cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
    cy.wait(5000);
    cy.get('#username').type('bb');
    cy.get('#password').type('bb');
    cy.get('.submit').click();
    cy.wait(30000);
    });
    it('complete full registration by bb user' , () => {
  cy.get('mat-list-option.mat-list-item.mat-list-option.mat-focus-indicator.mat-accent.ng-star-inserted', { timeout: 5000}).find('.mat-list-item-content > .mat-list-text > [fxlayout="row"] > .taskalias', { timeout: 5000}).contains(' Complete Full Registration ', { timeout: 2000}).click({ multiple: true })
  cy.wait(10000)
  cy.get('[type=checkbox]:eq(0)', { timeout: 5000}).check({force: true});
  cy.get('[mattooltip="Edit Patient Record"]').click({force: true})
  cy.get(10000);
  cy.get('label.ng-star-inserted', { timeout: 2000}).as('include.text' , 'Patient Type*')
  cy.get('.mat-radio-outer-circle:eq(1)', { timeout: 5000}).click({force: true});
  cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper', { timeout: 2000}).click({ multiple: true });
  cy.get(':nth-child(4) > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000}).click({force: true});
  cy.get(5000)
  cy.get('.mat-option-text:eq(1)', { timeout: 5000}).click({ multiple: true });
  cy.get(5000)
  cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000}).click({force: true});
  cy.get('.mat-option-text', { timeout: 2000}).contains( 'physician2', { timeout: 2000}).click({force: true});
  cy.get('label.ng-star-inserted', { timeout: 2000}).contains('Representative*')
  cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="No"]').click({force: true})
  cy.get('label.ng-star-inserted', { timeout: 2000}).contains('Guarantor Type*')
  cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Self"]').click({force: true})
  cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Commercial Insurance"]').click({force: true})
  cy.get('[formcontrolname="medicareNum"]', { timeout: 2000}).type('23');
  cy.get('span.mat-button-wrapper', { timeout: 2000}).contains('Submit').click({force: true});
  cy.wait(5000);
  cy.get('.mat-drawer-backdrop').click({force: true});
  cy.wait(2000);
  cy.get('[type=checkbox]:eq(0)', { timeout: 5000}).check({force: true});
  cy.get('div.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper > .mat-icon', { timeout: 2000}).click();
  cy.wait(8000)
  cy.get('.matbutton > .mat-button-wrapper', { timeout: 2000}).contains(' Complete').click({force: true});
  cy.wait(10000);
})
}
      })
    })
   



