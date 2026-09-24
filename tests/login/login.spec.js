const { test, expect } = require("@playwright/test");
const { LoginInteractions } = require("../../interactions/LoginInteractions");
const {
  InventoryInteractions,
} = require("../../interactions/InventoryInteractions");

test.describe("Login", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Swag Labs");
  });

  test("login com sucesso", async ({ page }) => {
    const login = new LoginInteractions(page);
    const inventory = new InventoryInteractions(page);

    await login.goto();
    await login.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL("inventory.html");
    await expect(inventory.getTitle()).toHaveText("Products");
  });

  test("login com credenciais inválidas", async ({ page }) => {
    const login = new LoginInteractions(page);

    await login.goto();
    await login.login("usuario_invalido", "senha_errada");

    await expect(login.getErrorMessage()).toBeVisible();
  });
});
