class  twigHomePage {
    elements = {
        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('.MuiButton-label')
    }

    typeUsername(username)  {
        this.elements.usernameInput().type(username)
        
    }

    typePassword(password)  {
        this.elements.passwordInput().type(password)
    }

    clicklogin(){
        this.elements.loginButton().click()
    }

}
module.exports = new twigHomePage();