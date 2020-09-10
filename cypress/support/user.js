const user = {
  ADMIN: {
    email: Cypress.env('admin_email'),
    password: Cypress.env('admin_password'),
  },
};

export default user;
