const { InventoryPage } = require("../pages/InventoryPage");

class InventoryInteractions {
  constructor(page) {
    this.page = page;
    this.inventoryPage = new InventoryPage(page);
  }

  getTitle() {
    return this.inventoryPage.title;
  }

  getInventoryList() {
    return this.inventoryPage.inventoryList;
  }

  getAddToCartButton() {
    return this.inventoryPage.addToCartButtons.click();
  }
}

module.exports = { InventoryInteractions };
