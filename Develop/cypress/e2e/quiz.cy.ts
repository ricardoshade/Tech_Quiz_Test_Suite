/// <reference types="cypress" />

describe('Tech Quiz E2E Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should start the quiz and display the first question', () => {
    cy.get('button').contains('Start').click();
    cy.get('.question').should('exist');
  });

  it('should display the next question after answering', () => {
    cy.get('button').contains('Start').click();
    cy.get('.question').should('exist');
    cy.get('button').contains('Next').click();
    cy.get('.question').should('exist');
  });

  it('should display the score after the quiz is over', () => {
    cy.get('button').contains('Start').click();
    cy.get('.question').should('exist');
    // Mock answering all questions
    cy.get('button').contains('Next').click({ multiple: true });
    cy.get('.score').should('exist');
  });
});