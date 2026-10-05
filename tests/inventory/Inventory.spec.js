const { test, expect } = require("../../fixtures/basesTests/base.fixture");
const usuario = require("../../fixtures/usuarios.json");
const testData = require("../../fixtures/testData.json");
const urls = require("../../fixtures/urlTest.json");

test.describe("Adiciona itens ao carrinho", () => {
  test("has title", async ({ page }) => {
    await page.goto(urls.login);
    await expect(page).toHaveTitle(testData.title.login);
  });

  test("Adiciona um item ao carrinho", async ({ page, login, inventory }) => {
    await login.goto();
    await login.login(usuario.valido.usuario, usuario.valido.senha);

    await expect(page).toHaveURL(urls.inventory);
    await expect(inventory.getTitle()).toHaveText(testData.title.products);
    await expect(inventory.getInventoryList()).toBeVisible();
    await inventory.getAddToCartButton();
  });
});
