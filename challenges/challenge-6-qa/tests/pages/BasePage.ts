import { Page, Locator } from '@playwright/test';

/**
 * Base Page Object class with common functionality
 * All page objects should extend this class
 */
export abstract class BasePage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }
  
  /**
   * Navigate to this page
   */
  abstract goto(): Promise<void>;
  
  /**
   * Wait for the page to be fully loaded
   */
  abstract waitForLoad(): Promise<void>;
  
  /**
   * Get the page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }
  
  /**
   * Get the current URL
   */
  getUrl(): string {
    return this.page.url();
  }
  
  /**
   * Take a screenshot with a descriptive name
   */
  async screenshot(name: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }
  
  /**
   * Wait for network to be idle (useful after navigation)
   */
  async waitForNetworkIdle(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
