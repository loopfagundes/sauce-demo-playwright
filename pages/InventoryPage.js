class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator(".title");
    this.inventoryItems = page.locator(".inventory_item");
  }
}

module.exports = { InventoryPage };
