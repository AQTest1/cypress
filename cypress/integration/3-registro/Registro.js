import 'cypress-file-upload';
describe('example to-do app', () => {


     const correo = 'testqa2129bep@yopmail.com'
     const NIT = '900447713'
     const NOMBRE = 'CyTest'
     const contraseña = 'Facture2020$'
     const filepath = 'fixtu.png'

     it('Ingreso a registro', () => {
          cy.visit('https://plcolabv3-web-qa.azurewebsites.net/plataforma/login')
          cy.get('body > app-root > app-login > div > div > app-options > div > mat-card > div:nth-child(2) > div:nth-child(1) > div > span:nth-child(1)').click()
          cy.get('#mat-select-0').click()
          cy.get('#mat-option-1 > .mat-option-text').click()
          cy.wait(1000)
          cy.get('#mat-select-4').click()

          if (cy.get('#mat-select-4')) {
               cy.contains('Tipo de identificación *', { timeout: 10000 }).click({ force: true })
               if (cy.get('div.mat-select-panel').should('be.visible')) {
                    cy.contains('NIT').click()
               }
          } else {
               while (cy.get('#mat-select-4')) {
                    cy.get('#mat-select-4').click()
                    cy.contains('NIT').click()
               }
          }

          //cy.get('#mat-select-4').click()
          //cy.get('#mat-option-4').should('be.visible')
          //cy.get('#mat-option-4').click()
          cy.get('#mat-input-8').type(NIT)
          cy.get('#mat-input-9').type(NOMBRE)
          cy.get('#mat-input-10').type(NOMBRE)
          cy.get('#mat-input-11').type(correo)
          cy.get('#mat-select-5').click()
          //cy.contains('Solo recepcion').click
          cy.get('#mat-option-13').click()
          cy.get('[style="margin-right: 10px;"]').click()
          cy.wait(5000)
          cy.get('#select_5').click()
          cy.get('#select_option_10').click()
          cy.get('#start').click()
          cy.get('[ng-show="showFieldEstados"] > .col-md-6 > .col-xs-12 > .btn').click()
          cy.wait(5000)
          cy.get('#return').click({force: true})
          cy.wait(7000)
          cy.contains('CULMINAR REGISTRO').click()
          cy.wait(5000)
          cy.get('#mat-select-2').click()
          cy.contains('Impuesto sobre las ventas - IVA').click();
          cy.contains('Facturador electrónico').click()
          cy.get('#mat-input-9').type(correo)
          cy.get('#mat-input-10').type("Carrera #55")
          cy.get('#mat-input-12').type("Cartagena")
          cy.contains('CARTAGENA DE INDIAS - Bolívar').click()
          cy.get('#cdk-step-content-0-0 > .mat-vertical-content > [fxlayout="row"] > .mat-raised-button').click()
          cy.get('#mat-input-16').type("Alejandro")
          cy.get('#mat-input-17').type("Hernandez")
          cy.get('#mat-input-19').type("315839497")
          cy.get('#cdk-step-content-0-1 > div > user-register-additional-data > form > div:nth-child(3) > div > div:nth-child(1) > div:nth-child(2) > input[type=file]').attachFile("fixtu.png");
          cy.get('#cdk-step-content-0-1 > div > user-register-additional-data > form > div:nth-child(3) > div > div.container-box.ng-star-inserted > div:nth-child(2) > input[type=file]').attachFile("fixtu.png");
          cy.get('#cdk-step-content-0-1 > div > user-register-additional-data > form > div:nth-child(3) > div > div:nth-child(3) > div:nth-child(2) > input[type=file]').attachFile("fixtu.png");
          cy.get('#cdk-step-content-0-1 > div > user-register-additional-data > form > div:nth-child(3) > div > div:nth-child(4) > div:nth-child(2) > input[type=file]').attachFile("fixtu.zip", { mimeType: 'application/zip' });
          cy.get('#cdk-step-content-0-1 > .mat-vertical-content > [fxlayoutalign="end end"] > .mat-raised-button').click()
          cy.contains('Aceptar').should("be.visible").click()
          cy.wait(5000)
          cy.get('#mat-input-21').type(contraseña, { force: true })
          cy.get('#mat-input-22').type(contraseña, { force: true })
          cy.contains('Guardar contraseña').click({ force: true })
          
          cy.visit('https://plcolabv3-web-qa.azurewebsites.net/plataforma/login')
          cy.wait(2000)
          cy.get('#mat-input-0').type(NIT, { force: true })
          cy.get('#mat-input-1').type(`${contraseña}{enter}`, { force: true })



          
     })
    


})