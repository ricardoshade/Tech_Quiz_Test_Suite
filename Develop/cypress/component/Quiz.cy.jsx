/// <reference types="cypress" />

import React from 'react';
import { Quiz } from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('should start the quiz and display the first question', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start').click();
    cy.get('.question').should('exist');
  });

  it('should display the next question after answering', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start').click();
    cy.get('.question').should('exist');
    cy.get('button').contains('Next').click();
    cy.get('.question').should('exist');
  });

  it('should display the score after the quiz is over', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start').click();
    cy.get('.question').should('exist');
    // Mock answering all questions
    cy.get('button').contains('Next').click({ multiple: true });
    cy.get('.score').should('exist');
  });
});