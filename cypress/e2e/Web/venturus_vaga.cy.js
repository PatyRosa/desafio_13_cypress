describe('Acessando a página venturus', () => {
    it('Abrir a página Aprendendo Testar', () => {
      cy.visit('https://www.venturus.org.br/')
      
    })
})

it('Validar o acesso do menu Inteligência Artificial através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('Inteligência Artificial').should('be.visible').click()
  })

  it('Validar o acesso do menu Visão computacional através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('Visão Computacional').should('be.visible').click()
  })

  it('Validar o acesso do menu Produtos Digitais através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('Produtos Digitais').should('be.visible').click()
  })

  it('Validar o acesso do menu Software Embarcado através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('Software Embarcado').should('be.visible').click()
  })

  it('Validar o acesso do menu Manufatura 4. através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('Manufatura 4.0').should('be.visible').click()
  })

  it('Validar o acesso do menu Robótica através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('Robótica').should('be.visible').click()
  })

  it('Validar o acesso do menu UX/UI Design através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('UX/UI Design').should('be.visible').click()
  })

  it('Validar o acesso do menu Ensaios de Telecom através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('Ensaios de Telecom').should('be.visible').click()
  })

  it('Validar o acesso do menu Blockchai através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('Blockchain').should('be.visible').click()
  })

  it('Validar o acesso do menu Computação Quântica através do menu serviços', () => {
    cy.visit('https://www.venturus.org.br/')
    cy.get('div.nav_dropdown-text-block[aria-hidden="true"]').contains('Serviços').click()
    cy.get('div.nav_dropdown-text').contains('Computação Quântica').should('be.visible').click()
  })

  
  
