class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator(".title");
    this.inventoryList = page.locator(".inventory_list");
    this.addToCartButtons = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]',
    );
  }
}

module.exports = { InventoryPage };
