/// <reference types="cypress" />

import user from "../../support/user";
import env from "../../support/env";
import dash_locator from "../../support/dash_locator";

context("Twygo Website", () => {
  beforeEach(() => {
    cy.login(env.url, user.ADMIN.email, user.ADMIN.password);
  });

  it("should be able to login as admin and find the 'Usuários' option", () => {
    cy.get(dash_locator.dash_perfil_btn).click();
    cy.get(dash_locator.admin_option_modal).click();
    cy.get(dash_locator.users_option_sidebar).should(
      "contain.text",
      "Usuários"
    );
  });
});
