describe('Site Aprendendo Testar', () => {
    it('Abrir a página Aprendendo Testar', () => {
      cy.visit('http://aprendendotestar.com.br/')
      
    })

    it('Abrir menu sobre', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(2) > a').click()
        
      })

      it('Abrir menu Guia Inicial', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(3) > a').click()
        
      })

      it('Abrir menu Guia Automação', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(4) > a').click()
        
        
      })

      it('cadastro realizado com sucesso', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(4) > a').click()
        cy.get(':nth-child(61) > a').click()
        cy.get(':nth-child(2) > td > input').type('paty@yahoo.com.br')
        cy.get(':nth-child(4) > td > input').type('1234')
        cy.get(':nth-child(6) > td > input').type('PAtricia')
        cy.get('td > .btn').click();
        
        
        
      })

      it('Cadastro realizado com sucesso', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(4) > a').click()
        cy.get(':nth-child(61) > a').click()
        cy.get(':nth-child(2) > td > input').type('paty@yahoo.com.br')
        cy.get(':nth-child(4) > td > input').type('1234')
        cy.get(':nth-child(6) > td > input').type('PAtricia')
        cy.get('td > .btn').click()
        cy.get('[border="1"] > tbody > :nth-child(2)').click()
        
        
      })

      it('Validar cadastro realizado com sucesso', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(4) > a').click()
        cy.get(':nth-child(61) > a').click()
        cy.get(':nth-child(2) > td > input').type('paty@yahoo.com.br')
        cy.get(':nth-child(4) > td > input').type('1234')
        cy.get(':nth-child(6) > td > input').type('PAtricia')
        cy.get('td > .btn').click()
        cy.get('[border="1"] > tbody > :nth-child(2)').click()
        
      })
      it('Apagar cadastro realizado com sucesso', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(4) > a').click()
        cy.get(':nth-child(61) > a').click()
        cy.get(':nth-child(2) > td > input').type('paty@yahoo.com.br')
        cy.get(':nth-child(4) > td > input').type('1234')
        cy.get(':nth-child(6) > td > input').type('PAtricia')
        cy.get('td > .btn').click()
        cy.get('[border="1"] > tbody > :nth-child(2)').click()
       
        
      })

      it('Validar cadastro sem informar senha', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(4) > a').click()
        cy.get(':nth-child(61) > a').click()
        cy.get(':nth-child(2) > td > input').type('paty@yahoo.com.br')
        cy.get(':nth-child(6) > td > input').type('PAtricia')
        cy.get('td > .btn').click()
        cy.get(':nth-child(4) > td > input').click();
        cy.get('input[name="form_senha"]:invalid').should('exist')
      })

      it('Validar cadastro sem informar nome', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(4) > a').click()
        cy.get(':nth-child(61) > a').click()
        cy.get(':nth-child(2) > td > input').type('paty@yahoo.com.br')
        cy.get(':nth-child(4) > td > input').type('1234')
        cy.get('td > .btn').click()
        cy.get(':nth-child(4) > td > input').click();
        cy.get('td[style="color: red;"]').should('contain.text', 'Existem campos em branco.')
      })

      it('Validar cadastro sem informar usuário', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(4) > a').click()
        cy.get(':nth-child(61) > a').click()
        cy.get(':nth-child(4) > td > input').type('1234')
        cy.get(':nth-child(6) > td > input').type('PAtricia')
        cy.get('td > .btn').click()
        cy.get('[border="1"] > tbody > :nth-child(2)').click()
        cy.get('input[name="form_usuario"]:invalid').should('exist')
       
        
      })

      it('Abrir menu Ver e Ouvir', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(5) > a').click()
        
      })

      it('Abrir menu E-book', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(6) > a').click()
      })

      it('Verificar a presença do botão de doação do PagSeguro', () => {
        cy.visit('http://aprendendotestar.com.br/')
        cy.get('#menu_icon').click()
        cy.get('.show_menu > :nth-child(6) > a').click()
        cy.get('h1.title').should('contain.text', 'Os caminhos do Testador')
        cy.get('input[alt="Pague com PagSeguro - é rápido, grátis e seguro!"]').should('be.visible')
      }) 
}) 