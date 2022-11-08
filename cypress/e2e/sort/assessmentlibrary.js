class assessmentlibrary {

    sort = () => cy.get('div[class*="AssignmentListTablestyles__ComponentWrapper"]')
    assesmenttitle = () => cy.get('.assignment-title')
    sortarrow = () => cy.get('div[class*="TableHeaderstyles__FlexWrapper"]').within(() => {
        cy.get('svg[class*="MuiSvgIcon-root"]')
    })
   // sortarrow = () => cy.get('.TableHeaderstyles__FlexWrapper-o2wmry-3 > .MuiSvgIcon-root-4700')
}
module.exports = new assessmentlibrary();
