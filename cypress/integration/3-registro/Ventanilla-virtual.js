// .clear() --limpiar
//
// 
describe('Prueba eneida',function(){
    it ('prueba',function() {
        cy.viewport(1500,900) //Tamaño de pantalla
        cy.visit('https://plcolabv3-web-qa.azurewebsites.net/plataforma/login')
        cy.get('#mat-input-0').type('800546789') // ususario
        cy.get('#mat-input-1').type('Abc123$$') //contraseña
        cy.get('.mat-button > .mat-button-wrapper').click()
        cy.contains('Documentos').click()
        cy.get('#_home_virtual-accounting').click()//redireccion ventanilla virtual
        cy.get('#mat-select-6').click();//click proveedores
        cy.get(':contains("Wall Technologies").mat-option-text').click() //lista de proveedores
        cy.get('#mat-input-7').type('1070814200')//Identificacion
        cy.get('#mat-input-8').type('Eneida Edinson')//Nombreyapellido
        cy.get('#mat-input-10').click()
        cy.wait(3000) //tiempo de espera
        cy.contains('FACTURA DIGITAL').click()
        cy.get(':nth-child(3) > [fxlayout="column"] > .mat-icon-button > .mat-button-wrapper > .mat-icon').click()
        cy.get('#mat-input-11').type('FACT')//prefijo
        cy.get('#mat-input-12').type('102030455')//Identificacion
        cy.get('#mat-input-13').type('8525561516') // Orden de compra
        cy.get('#mat-input-14').clear().type('80000')//subtotal
        cy.get('#mat-input-15').clear().type('100000')//valor total
        cy.get('#mat-dialog-0 > app-emergente-digitado > mat-card > mat-card-content > app-default-dialog-digital-info > form > div > div:nth-child(1) > div:nth-child(6) > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-suffix.ng-tns-c8-36.ng-star-inserted > mat-datepicker-toggle').click()
        cy.get('.mat-datepicker-popup')
        .should('be.visible')
        .wait(500)
        .get('[aria-label="04 jul. 2022"] > .mat-calendar-body-cell-content').click()
        cy.get('#mat-input-19').clear().type('20000')//iva
        cy.wait(10000) //tiempo de espera
        cy.get('#mat-button-wrapper').click()

        
    })
})


