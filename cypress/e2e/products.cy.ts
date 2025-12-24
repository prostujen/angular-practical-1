describe('Product Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('1. Має відображати список товарів', () => {
    cy.contains('Каталог товарів');
    cy.get('.card').should('have.length.at.least', 1);
  });

  it('2. Пошук має працювати', () => {
    cy.get('input[placeholder="Пошук товарів..."]').type('Samsung');
    cy.get('.card').should('contain.text', 'Samsung');
  });

  it('3. Перехід на логін', () => {
    cy.contains('Увійти').click();
    cy.url().should('include', '/login');
  });
});