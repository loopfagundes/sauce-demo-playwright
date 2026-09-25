const { test, expect } = require("../../fixtures/basesTests/base.fixture");
const usuario = require("../../fixtures/usuarios.json");
const testData = require("../../fixtures/testData.json");
const urls = require("../../fixtures/urlTest.json");

let TIMEOUT = 10000;

test.describe("Login", () => {
  test("has title", async ({ page }) => {
    await page.goto(urls.login);
    await expect(page).toHaveTitle(testData.title.login);
  });

  test("login com sucesso", async ({ page, login, inventory }) => {
    await login.goto();
    await login.login(usuario.valido.usuario, usuario.valido.senha);

    await expect(page).toHaveURL(urls.inventory);
    await expect(inventory.getTitle()).toHaveText(testData.title.products);
  });

  test("login com credenciais inválidas", async ({ login }) => {
    await login.goto();
    await login.login(usuario.invalido.usuario, usuario.invalido.senha);

    await expect(login.getErrorMessage()).toBeVisible();
  });

  test("login com credenciais bloqueado", async ({ login }) => {
    await login.goto();
    await login.login(usuario.bloqueado.usuario, usuario.bloqueado.senha);

    await expect(login.getErrorMessage()).toBeVisible();
  });

  test("login com usuário problemático", async ({ page, login, inventory }) => {
    await login.goto();
    await login.login(usuario.problematico.usuario, usuario.problematico.senha);

    await expect(page).toHaveURL(urls.inventory);
    await expect(inventory.getTitle()).toHaveText(testData.title.products);
  });

  test("login com usuário performance glitch", async ({
    page,
    login,
    inventory,
  }) => {
    await login.goto();
    await login.login(
      usuario.performanceGlitch.usuario,
      usuario.performanceGlitch.senha,
    );

    await expect(page).toHaveURL(urls.inventory);
    await expect(inventory.getTitle()).toHaveText(testData.title.products, {
      timeout: TIMEOUT,
    });
  });

  test("login com usuário error", async ({ page, login, inventory }) => {
    await login.goto();
    await login.login(usuario.error.usuario, usuario.error.senha);

    await expect(page).toHaveURL(urls.inventory);
    await expect(inventory.getTitle()).toHaveText(testData.title.products);
  });

  test("login com usuário visual", async ({ page, login, inventory }) => {
    await login.goto();
    await login.login(usuario.visual.usuario, usuario.visual.senha);

    await expect(page).toHaveURL(urls.inventory);
    await expect(inventory.getTitle()).toHaveText(testData.title.products);
  });
});
