import { test, expect } from '@playwright/test';

test.describe('Example Website Tests', () => {
  test('should display the page title correctly', async ({ page }) => {
    // Navigate to a publicly available website for testing
    await page.goto('https://example.com');
    
    // Verify the page title
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('should find and interact with elements', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Check if the main heading is visible
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Example Domain');
    
    // Check if the main paragraph is present
    const paragraph = page.locator('p');
    await expect(paragraph).toBeVisible();
    await expect(paragraph).toContainText('This domain is for use in illustrative examples');
  });

  test('should handle navigation', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Find and click the "More information..." link
    const moreInfoLink = page.locator('a[href*="iana.org"]');
    await expect(moreInfoLink).toBeVisible();
    
    // Click the link (this will navigate to a new page)
    await moreInfoLink.click();
    
    // Wait for navigation and verify we're on the IANA page
    await expect(page).toHaveURL(/.*iana\.org.*/);
  });
});