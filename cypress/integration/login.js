let username = "tomsmith";
let password = "SuperSecretPassword!"
let wrongPassword = "WrongPassword!"
let wrongUsername = "quandoousername"


describe('A user can login on the application', () => {

    it('Given a registered user access the Herokuapp page', () => {
        cy.visit('/login')
    })

    it('When it sends the RIGHT login credentials', () => {
        cy.get('[id="username"]').type(username)
        cy.get('[id="password"]').type(password)
        cy.contains(' Login').click({ force:true })
        cy.url().should('include', 'secure')
    })

    it('Then the user is logged in the application', () => {
        cy.get('[id="flash"]').contains('You logged into a secure area!')
    })
})

describe('A user can log out from the application', () => {

    it('Given a registered user is logged in the Herokuapp page', () => {
        cy.visit('/login')
        cy.get('[id="username"]').type(username)
        cy.get('[id="password"]').type(password)
        cy.contains(' Login').click({ force:true })
        cy.url().should('include', 'secure')
    })

    it('When it clicks on the logout button', () => {

        cy.contains(' Logout').click({ force:true })
        cy.url().should('include', 'login')
    })

    it('Then the user is logged out the application', () => {
        cy.get('[id="flash"]').contains('You logged out of the secure area!')
    })
})

describe('A user can NOT login on the application with wrong password', () => {

    it('Given a user access the Herokuapp page', () => {
        cy.visit('/login')
    })

    it('When it sends the WRONG password', () => {
        cy.get('[id="username"]').type(username)
        cy.get('[id="password"]').type(wrongPassword)
        cy.contains(' Login').click({ force:true })
        cy.url().should('include', 'login')
    })

    it('Then the user is not logged in the application and sees an error message', () => {
        cy.get('[id="flash"]').contains('Your password is invalid!')
    })
})

describe('A user can NOT login on the application with wrong username', () => {

    it('Given a user access the Herokuapp page', () => {
        cy.visit('/login')
    })

    it('When it sends the WRONG username', () => {
        cy.get('[id="username"]').type(wrongUsername)
        cy.get('[id="password"]').type(password)
        cy.contains(' Login').click({ force:true })
        cy.url().should('include', 'login')
    })

    it('Then the user is not logged in the application and sees an error message', () => {
        cy.get('[id="flash"]').contains('Your username is invalid!')
    })
})