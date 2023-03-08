
describe('My first Test ', function()
{
    it('verify title. Posible', function() 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
    }
    )

    it('verify title. Negative', function() 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM1')
    }
    )
}

)