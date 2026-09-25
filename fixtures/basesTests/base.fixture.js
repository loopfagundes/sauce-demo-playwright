const base = require('@playwright/test');
const { LoginInteractions } = require('../../interactions/LoginInteractions');
const { InventoryInteractions } = require('../../interactions/InventoryInteractions');

exports.test = base.test.extend({
  login: async ({ page }, use) => {
    await use(new LoginInteractions(page));
  },
  inventory: async ({ page }, use) => {
    await use(new InventoryInteractions(page));
  },
});
exports.expect = base.expect;