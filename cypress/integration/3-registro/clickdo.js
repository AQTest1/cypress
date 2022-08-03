/// <reference types="cypress" />

describe('date component works', () => {
    after(() => {
      cy.visit('https://gray-water-03ddfba0f.azurestaticapps.net/#/login')
    })
  
    // context('calendar opens on click', () => {
    //   beforeEach(() => {
    //     // open the calendar modal
    //     // StackBlitz takes a while to load, thus we need
    //     // to give "cy.get" a longer timeout for the element to appear
    //     cy.get('[data-context="container"]', { timeout: 20000 })
    //       .find('input')
    //       .click()
    //   })
  
      it('calendar auto closes on click', () => {
        cy.get('#mat-input-0').type('900192832')
        cy.get('#mat-input-1').type('Facture2021$')
        cy.get('[fxlayout="column"] > .mat-focus-indicator').click()
        cy.wait(3000)
        cy.contains('Orden de compra').should('be.visible').click()
        cy.get('.mat-card-title > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
        cy.get('body > app-root > app-home > mat-sidenav-container > mat-sidenav-content > div > div > app-orden-compra > app-orden-compra-detail > div > form > div > div:nth-child(1) > mat-card > mat-card-content > div > div:nth-child(2) > mat-form-field.mat-form-field.ng-tns-c84-25.mat-primary.mat-form-field-type-mat-input.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid > div > div.mat-form-field-flex.ng-tns-c84-25 > div.mat-form-field-suffix.ng-tns-c84-25.ng-star-inserted > mat-datepicker-toggle').click()
        
        const day = 5
        const dayRegex = new RegExp(`^\\b${day}\\b$`)
    
        cy.get('.mat-datepicker-popup')
        .should('be.visible')
        .wait(500)
        .get('[aria-label="14 jul. 2022"] > .mat-calendar-body-cell-content')
        .click()

        cy.contains('Orden de compra').assert


  
        // calendar should close on the user click
      })
    })
  