const { InventoryPage } = require("../pages/InventoryPage");

class InventoryInteractions {
  constructor(page) {
    this.page = page;
    this.inventoryPage = new InventoryPage(page);
  }

  getTitle() {
    return this.inventoryPage.title;
  }

  async getItemCount() {
    return this.inventoryPage.inventoryItems.count();
  }
}

module.exports = { InventoryInteractions };
