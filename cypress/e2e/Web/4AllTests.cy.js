describe('Site 4AllTests', () => {
  it('Abrir a página 4AllTests', () => {
    cy.visit('https://4alltests.com.br/index')
    
  })

  it('acessar o menu Ferramentas ', () => {
    cy.visit('https://4alltests.com.br/index')
    cy.get('#nav > :nth-child(1) > :nth-child(2) > :nth-child(1)').click()
    cy.get('.level-0 > :nth-child(1) > a').click();
    
  })

 it('Abrir menu Eventos', () => {
    cy.visit('https://4alltests.com.br/index')
    cy.get('#nav > :nth-child(1) > :nth-child(3) > a').click()
    
  })

  it('Abrir o menu vagas', () => {
    cy.visit('https://4alltests.com.br/index')
    cy.get('#nav > :nth-child(1) > :nth-child(4) > a').click()
     
  })

  it('Abrir o menu Comunidades', () => {
    cy.visit('https://4alltests.com.br/index')
    cy.get(':nth-child(1) > :nth-child(5) > a').click()
     
  })

  it('Abrir o menu Cursos', () => {
    cy.visit('https://4alltests.com.br/index')
    cy.get(':nth-child(6) > a').click()
    
  })

  it('Abrir o menu Referências', () => {
    cy.visit('https://4alltests.com.br/index')
    cy.get(':nth-child(7) > a').click()
     
  })



})