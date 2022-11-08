import twigHomepage from './TwigHomepage';
import assessmentlibrary from './assessmentlibrary';

var val;
describe('Sorting', () => {
    before(() => {
        cy.visit('/login')
    })

    beforeEach(function() {
        cy.fixture('twig').then((data) => {
            val = data    
        })
        cy.restoreLocalStorage()
       
    })

    afterEach(() => {
        cy.saveLocalStorage()
    })

    it('Login', () =>{
        twigHomepage.typeUsername('adminteacher9')
        twigHomepage.typePassword('demouser@1')
        twigHomepage.clicklogin()
        cy.url().should('contain', 'teacher')
        cy.percySnapshot('test');
        cy.visit('/teacher/assessmentscenter')
        cy.url().should('contain', 'assessmentscenter')
        cy.percySnapshot('test1');
    })

    // it('Verify if sorting functionality is working or not when clicked on Status(descending order)', () => {

    //     assessmentlibrary.sort().contains('Status').click()
    //     let assessments = [val.AssessmentTitle[0], val.AssessmentTitle[3], val.AssessmentTitle[2],val.AssessmentTitle[1]]
    //     assessmentlibrary.assesmenttitle().each((item, index) => {
    //         cy.wrap(item).should('have.text', assessments[index])
    //     })
    //     assessmentlibrary.sortarrow().should('have.attr','aria-label')
    //     cy.percySnapshot('test');

    // })

    // it('Verify if sorting functionality is working or not when clicked on Status(ascending order)', () => {

    //     assessmentlibrary.sort().contains('Status').click()
    //     let assessments = [val.AssessmentTitle[1], val.AssessmentTitle[2],val.AssessmentTitle[3],val.AssessmentTitle[0]]
    //     assessmentlibrary.assesmenttitle().each((item, index) => {
    //         cy.wrap(item).should('have.text', assessments[index])
    //         cy.percySnapshot('test1');
    //     })
    // })

    // it('Verify if sorting functionality is working or not when clicked on Assessment(descending order)', () => {

    //     assessmentlibrary.sort().contains('Assessment').click()
    //     let assessments = [val.AssessmentTitle[1], val.AssessmentTitle[0],val.AssessmentTitle[3],val.AssessmentTitle[2]]
    //     assessmentlibrary.assesmenttitle().each((item, index) => {
    //         cy.wrap(item).should('have.text', assessments[index])
    //     })

    // })

    // it('Verify if sorting functionality is working or not when clicked on Assessment(ascending order)', () => {

    //     assessmentlibrary.sort().contains('Assessment').click()
    //     let assessments = [val.AssessmentTitle[2], val.AssessmentTitle[3],val.AssessmentTitle[0],val.AssessmentTitle[1]]
    //     assessmentlibrary.assesmenttitle().each((item, index) => {
    //         cy.wrap(item).should('have.text', assessments[index])
    //     })

    // })

    // it('Verify if sorting functionality is working or not when clicked on Created Date(descending order)', () => {

    //     assessmentlibrary.sort().contains('Created on').click()
    //     let assessments = [val.AssessmentTitle[0], val.AssessmentTitle[2],val.AssessmentTitle[1],val.AssessmentTitle[3]]
    //     assessmentlibrary.assesmenttitle().each((item, index) => {
    //         cy.wrap(item).should('have.text', assessments[index])
    //     })

    // })

    // it('Verify if sorting functionality is working or not when clicked on Created Date(ascending order)', () => {

    //     assessmentlibrary.sort().contains('Created on').click()
    //     let assessments = [val.AssessmentTitle[3], val.AssessmentTitle[1],val.AssessmentTitle[2],val.AssessmentTitle[0]]
    //     assessmentlibrary.assesmenttitle().each((item, index) => {
    //         cy.wrap(item).should('have.text', assessments[index])
    //     })

    // })

    // it('Verify if sorting functionality is working or not when clicked on Start date(descending order)', () => {

    //     assessmentlibrary.sort().contains('Start Date').click()
    //     let assessments = [val.AssessmentTitle[0], val.AssessmentTitle[2],val.AssessmentTitle[1],val.AssessmentTitle[3]]
    //     assessmentlibrary.assesmenttitle().each((item, index) => {
    //         cy.wrap(item).should('have.text', assessments[index])
    //     })

    // })

    // it('Verify if sorting functionality is working or not when clicked on Start date(ascending order)', () => {

    //     assessmentlibrary.sort().contains('Start Date').click()

    //     let assessments = [val.AssessmentTitle[3], val.AssessmentTitle[1],val.AssessmentTitle[2],val.AssessmentTitle[0]]
    //     assessmentlibrary.assesmenttitle().each((item, index) => {
    //         cy.wrap(item).should('have.text', assessments[index])
    //     })

    // })
})