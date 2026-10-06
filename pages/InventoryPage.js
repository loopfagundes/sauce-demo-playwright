class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator(".title");
    this.inventoryList = page.locator(".inventory_list");
    this.adicionaCarrinhoButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]',
    );
    this.quantidadeCarrinho = page.locator('[data-test="shopping-cart-link"]');
  }
}

module.exports = { InventoryPage };
