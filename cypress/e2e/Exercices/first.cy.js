///<reference types="cypress"/>
import { AppConfig } from "../../../config";

beforeEach(() => {
  cy.visit(AppConfig.URL);
  cy.contains("Elements").click();
});

it("Text BOX", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
//   cy.wait(2000);
  cy.contains("Text Box").click();
//   cy.wait(2000);

  cy.get("#userEmail").type("test01");
  cy.get("#currentAddress").type("test02");
  cy.get("#permanentAddress").type("test03");
  cy.get("#submit").click();
});

it("Check Box", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
  cy.get("#item-1").click();
  cy.get('[type="button"]').should('have.length', 4).eq(3).click();
  cy.wait(2000);
//   cy.get('.rct-checkbox').should('have.have.length',4).eq(1).check();
cy.get('[type="checkbox"]').first().check({force: true}) ;
// Sélectionnez l'élément <span> par son sélecteur
cy.get('#result > :nth-child(1)').invoke('text').then((valeurSpan) => {
  // Utilisez la valeur textuelle du <span> comme nécessaire
  cy.log(`La valeur du <span> est : ${valeurSpan}`);
  expect(valeurSpan).to.contain('You have selected :');
});
});;


it("Radio button", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  cy.get("#item-2").click();
  cy.get(':nth-child(3) > .custom-control-label').click();
  // Sélectionnez l'élément <span> par son sélecteur
cy.get('.mt-3').invoke('text').then((valeurSpan) => {
  // Utilisez la valeur textuelle du <span> comme nécessaire
  cy.log(`La valeur du <span> est : ${valeurSpan}`);
  expect(valeurSpan).to.contain('You have selected');
});
});
it.only ("Web Tables",()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  cy.get("#item-3").click();
  cy.get("#addNewRecordButton").click();
  cy.get('[id="firstName"]').type("test00");
  cy.get('[id="lastName"]').type("test01");
  cy.get('[id="userEmail"]').type("test01@gmail.com");
  cy.get('[id="age"]').type("27");
  cy.get('[id="salary"]').type("2200");
  cy.get('[id="department"]').type("testing");
  cy.get('[id="submit"]').click();
  // const list = cy.get(".rt-td");
  // list.forEach((li)=>{
  //   if (li.invoke('text')==="test00"){
  //     const i = true;
  //     break;
  //   }
  // })
  let found = false;

cy.get(".rt-td").each((li) => {
  cy.wrap(li).invoke('text').then((text) => {
    // if (text === "test00" && text[i+1]==="test01" && text[i+2]==="test01@gmail.com" && text) {
    //   found = true;
    // }
    cy.log(text)
  });
}).then(() => {
  expect(found).to.be.true;
  // if (found) {
  //   // Le texte "test00" a été trouvé dans au moins un élément
  //   cy.log("Le texte test00 a été trouvé !");
  // } else {
  //   // Le texte "test00" n'a pas été trouvé dans aucun élément
  //   cy.log("Le texte test00 n'a pas été trouvé.");
  // }
});

  })








