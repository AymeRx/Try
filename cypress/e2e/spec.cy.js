describe('Test de 0Bank', () => {
  beforeEach(() => {
    cy.visit('http://151.80.32.16:8965/')
  })

  it('Test de la page d\'accueil', () => {
    cy.get('.navbar-collapse ul li:first-child a').should('have.text', 'Ouvrir mon compte')
    cy.get('.navbar-collapse ul li:last-child a').should('have.text', 'Connexion')
  })


  it('Test du bouton "Ouvrir mon compte"', () => {
    // Cliquer sur le bouton "Ouvrir mon compte"
    cy.get('a[onclick="setPage(\'sign\');"]').click();

    // Vérifier que la page d'ouverture de compte est affichée
    cy.url().should('include', '#openaccount');
  });

  it('Test du bouton "Retour"', () => {
    // D'abord, aller à une autre page pour tester le retour
    cy.get('a[onclick="setPage(\'sign\');"]').click();
    cy.wait(1000); // Attendre que la page se charge

    // Cliquer sur le bouton "Retour"
    cy.get('a[onclick="setPage(\'main\');"]').click();

    // Vérifier que la page principale est affichée
    cy.url().should('include', '#mainnoauth');
  });

  it('Test du bouton "Nos Tarifs"', () => {
    // Cliquer sur le bouton "Nos Tarifs"
    cy.contains('button', 'Nos Tarifs').click();

    // Vérifier que la page des tarifs est affichée (ajuster l'URL attendue selon votre application)
    // Assurez-vous que l'URL de la page des tarifs est correcte dans l'application
    cy.url().should('include', 'expected-tarif-page-url');
  });

  it('Test des boutons dans la zone Footer', () => {
    // Test du bouton "Ouvrir mon compte" dans le footer
    cy.get('footer a[href="#openaccount"]').click();
    cy.url().should('include', '#openaccount');
    
    // Retour à la page principale
    cy.visit('http://151.80.32.16:8965/');

    // Test du bouton "Me connecter" dans le footer
    cy.get('footer a[href="#connecttoaccount"]').click();
    cy.url().should('include', '#connecttoaccount');

    // Retour à la page principale
    cy.visit('http://151.80.32.16:8965/');

    // Test du bouton "Accès interne" dans le footer
    cy.get('footer a[href="#banker"]').click();
    cy.url().should('include', '#banker');
  });

  it('Test du bouton "Condition Générale de vente" dans le footer', () => {
    // Cliquer sur le bouton "Condition Générale de vente"
    cy.get('footer a[href="cgv.php"]').click();

    // Vérifier que la page des CGV est affichée (ajuster l'URL attendue selon votre application)
    cy.url().should('include', 'cgv.php');
  });

  it('Test du bouton "Condition tarifaire" dans le footer', () => {
    // Cliquer sur le bouton "Condition tarifaire"
    cy.get('footer a:contains("Condition tarifaire")').click();

    // Vérifier que la page des conditions tarifaires est affichée (ajuster l'URL attendue selon votre application)
    cy.url().should('include', 'expected-condition-tarifaire-page-url');
  });
});


// Test de connexion
describe('Test de connexion', () => {
  beforeEach(() => {
    cy.visit('http://151.80.32.16:8965/')
  })

      it("Test de connexion", () => {
        cy.get(".navbar-collapse ul li:last-child a").click()
        cy.get("#mailco").type("test@test.com")
        cy.get("#mailco").should("have.value", "test@test.com")
        cy.get("#connecttoaccount input[type=password]").type("test")
        cy.get("#connecttoaccount input[type=password]").should("have.value", "test")
        cy.get("#connecttoaccount input[type=submit]").click()
        cy.url().should("include", "/index.php")
      })
  })

