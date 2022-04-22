describe('Page title', () => {
    beforeEach(() => {
      cy.visit('https://www.officemate.co.th/en')
    })
  
    it('looks inside the head content using `cy.document()` to validate the <title>', () => {
      cy.document()
    })
  
    it('contains the correct title of the page', () => {
      cy.get('head title').should('contain', 'ออฟฟิศเมท (OfficeMate) ที่เดียวครบ ตอบโจทย์ทุกธุรกิจ')
    })

    it('search a product',() => {
        cy.get('[data-testid="txt-SearchBar"]')
        .should('be.visible')
        .type('dog')
        .should('have.value','dog')
    
        cy.get('#btn-searchResultPage._3yhJv.nAPfO._1wTN0._1V0ys')
        .should('be.visible')
        .click()

    })

})



