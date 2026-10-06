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

  getAdicionaParaCarrinho() {
    return this.inventoryPage.adicionaCarrinhoButton.click();
  }

  getQuantidadeCarrinho() {
    return this.inventoryPage.quantidadeCarrinho;
  }

  getAcessarCarrinho() {
    return this.inventoryPage.quantidadeCarrinho.click();
  }
}

module.exports = { InventoryInteractions };
