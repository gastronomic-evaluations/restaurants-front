/// <reference types="Cypress" />

describe('Create Wish', () => {
  beforeEach(() => {
    cy.visit('/#/wishlist/create')
  })

  it('when missing name show error message', () => {
    cy.get('[data-test=save]').click()

    cy.get('[data-test=name]').as('nameInput')
    cy.get('[data-test=name-error]').should('have.text', 'O nome é um campo obrigatório.')
  })
})
