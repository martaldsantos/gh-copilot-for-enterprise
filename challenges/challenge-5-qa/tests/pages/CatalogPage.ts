import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Catalog Page Object skeleton
 * Extend BasePage and follow the same pattern as LoginPage.
 */
export class CatalogPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    throw new Error('Not implemented');
  }

  async waitForLoad(): Promise<void> {
    throw new Error('Not implemented');
  }
}
