/// <reference types="Cypress" />

describe('Create restaurant', () => {
  beforeEach(() => {
    cy.visit('/#/restaurants/create')
  })

  it('should show error message when missing required fields or fields are invalid', () => {
    cy.get('[data-test=save]').click()

    cy.get('[data-test=title-error]').should('have.text', 'O título é um campo obrigatório.')
    cy.get('[data-test=date-error]').should('have.text', 'A data é um campo obrigatório.')

    cy.get('[data-test="ratings.service-error"]').should('have.text', 'A nota para o serviço é um campo obrigatório.')
    cy.get('[data-test="ratings.food-error"]').should('have.text', 'A nota para a comida é um campo obrigatório.')
    cy.get('[data-test="ratings.environment-error"]').should('have.text', 'A nota para o ambiente é um campo obrigatório.')
    cy.get('[data-test="ratings.price-error"]').should('have.text', 'A nota para o preço é um campo obrigatório.')

    cy.get('[data-test="ratings.service"]').type('test')
    cy.get('[data-test=save]').click()
    cy.get('[data-test="ratings.service-error"]').should('have.text', 'A nota para o serviço precisa ser um número.')
  })
})
