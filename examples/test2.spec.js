describe('RHC Login ', () => {
  it('successfully loads', () => {
      //cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
      cy.visit('https://192.168.70.19/dataken/');
      cy.wait(2000);
      cy.get('#username').type('admin ');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(10000);
    });
    it('=={Creating File DataSource CSV Upload }==', () => {
      cy.get('button').contains('menu').click();
      cy.get('button').contains('Intelligence').click();
      cy.get('span.mat-button-wrapper').contains('Data Ingest').click();
      cy.get('span.mat-button-wrapper').contains('Create').click();
      cy.get('img[src="../../dataken/assets/images/csv.png"]').trigger('mouseover');
      cy.contains('Connect').click();
      cy.wait(4000);
      const yourFixturePath = 'user.csv';
      cy.get('input[type=file]').attachFile(yourFixturePath);
      cy.wait(10000);
      cy.get('[placeholder="Name"]').type('csvtest');
      cy.get('[placeholder="Description"]').type('csvtest');
      cy.get('[placeholder="Field Separator"]').click();
      cy.contains(',').click();
      cy.get('[placeholder="Quote"]').click();
      cy.contains('"').click();
      cy.wait(10000);
      cy.get('table').should('be.visible');
      cy.get('p-table').should('have.class','prime-table');
      cy.get('span.mat-button-wrapper').contains('Save').click();
      cy.wait(10000);
      cy.get('input[placeholder="Search & enter"]').type('csvtest').type('{enter}');
      cy.wait(5000);
      cy.get('td.mat-cell').should('include.text', 'csvtest');
      cy.wait(8000);
  })
})