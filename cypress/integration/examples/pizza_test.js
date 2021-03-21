describe('My Pizza Form Tests', function () {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Are Your rendering?', () => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Can you use the checkboxes, submit buttons, and text inputs?', () => {
        cy.get('form > :nth-child(3) > input').type('Nathan')
        cy.get(':nth-child(2) > input').click()
        cy.get(':nth-child(5) > :nth-child(3) > input').click()
        cy.get(':nth-child(4) > input').click()
        cy.get(':nth-child(5) > input').click()
        cy.get(':nth-child(7) > input').click()
        cy.get(':nth-child(8) > input').click()
        cy.get(':nth-child(5) > :nth-child(6) > input').click()
        cy.get('select').select('10-inch')
        cy.get('form > button').click()
    })

});