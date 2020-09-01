// <reference types="cypress" />

describe('my first test',function()
{
    it('my first case',function(){
        //cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.visit("https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');")

    })
    
})