
describe('Login page test', () => {

  // beforeEach(() => {
  //   cy.viewport(2000, 2000)
  // })

    // it('Graph1', () => {
    //     cy.visit('https://demos.learnosity.com/authoring/item-list.php');
    //     cy.wait(5000)
    //     cy.get('[data-authorapi-selector="toolbar-new-item-btn"]').eq(0).click()
    //     cy.get('[class="lrn-author-widget-button"]').click()
    //     cy.wait(5000)
    //     cy.get('[aria-label="Graphing"]').click()
    //     cy.get('[aria-label="10 x 10 1st quadrant graph (600px x 600px canvas) with all drawing tools."]').click()
    //     cy.wait(5000)
    //     cy.get('[data-tool="line"]').eq(0).click()
    //     cy.get('[aria-label="You have entered the graph."]').eq(0).click().click(466, 190)
    //     cy.percySnapshot('name', { scope: '[class="lrn_toolbar"] li:nth-child(2)' })
    // })

    it('Graph2', {
        defaultCommandTimeout: 10000
      }, () => {
        cy.visit('https://twig-assessments-staging.zeuslearning.com/login')
        cy.get('[id="username"]').type('adminteacher1')
        cy.get('[id="password"]').type('demouser@1')
        cy.get('[data-at="Sign-in-button"]').click()
        cy.wait(10000)
        cy.visit('https://twig-assessments-staging.zeuslearning.com/teacher/assessmentslibrary/assessment/preview/53c80d07-b391-4dd1-b454-624aaaf75aa1')
        cy.get('[class*="LineGraphstyles__ForgroundCanvas-sc-1lh7n2l-2"]').eq(0).scrollIntoView().should('be.visible').dblclick()
        cy.wait(5000)
        // cy.percySnapshot('beaker', { scope: '[class*="LineGraphstyles__ForgroundCanvas-sc-1lh7n2l-2"]' })
        cy.percySnapshot('beaker', { scope: '[class*="fGeUBk"]' })

    })
})