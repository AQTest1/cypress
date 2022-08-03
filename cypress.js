const { defineConfig} = require("cypress");
 module.exports = defineConfig({
     chromeWebSecurity: false,
     e2e: {
        defaultCommandTimeout: 25000,
         setupNodeEvents(on, config){

         },
     },
 })   