/// <reference types="Cypress" />

import { AppConfig } from "../../../config";

["iphone-6+","iphone-3","macbook-16"].forEach(VP=>{
    it("view port",()=>{
        cy.viewport(VP);
        cy.visit(AppConfig.URL)
        cy.log(1);
    })

})
describe("aa",()=>{
    it("a",()=>{
        cy.viewport('macbook-16')
        cy.log(1);
    })
    it("ab",()=>{
        cy.log(1);
    })
})
