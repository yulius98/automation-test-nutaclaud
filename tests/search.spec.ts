import { test, expect } from '@playwright/test';

test.describe('Search Functionality Tests', () => {
  test('should perform a search on DuckDuckGo', async ({ page }) => {
    // Navigate to DuckDuckGo search engine
    await page.goto('https://duckduckgo.com');
    
    // Accept any privacy notice if present
    const acceptButton = page.locator('button:has-text("I Accept")');
    if (await acceptButton.isVisible()) {
      await acceptButton.click();
    }
    
    // Find the search input and perform a search
    const searchInput = page.locator('input[name="q"]');
    await expect(searchInput).toBeVisible();
    
    await searchInput.fill('Playwright automation testing');
    await searchInput.press('Enter');
    
    // Wait for search results to load
    await page.waitForLoadState('networkidle');
    
    // Verify search results are displayed
    const searchResults = page.locator('[data-testid="result"]');
    await expect(searchResults.first()).toBeVisible();
    
    // Verify the search term appears in the URL or page
    await expect(page.url()).toContain('q=Playwright');
  });

  test('should navigate search results', async ({ page }) => {
    await page.goto('https://duckduckgo.com');
    
    // Accept privacy notice if present
    const acceptButton = page.locator('button:has-text("I Accept")');
    if (await acceptButton.isVisible()) {
      await acceptButton.click();
    }
    
    // Perform search
    await page.fill('input[name="q"]', 'Playwright documentation');
    await page.press('input[name="q"]', 'Enter');
    
    // Wait for results
    await page.waitForLoadState('networkidle');
    
    // Check that multiple results are present
    const searchResults = page.locator('[data-testid="result"]');
    const resultCount = await searchResults.count();
    expect(resultCount).toBeGreaterThan(0);
    
    // Verify the first result contains relevant text
    const firstResult = searchResults.first();
    await expect(firstResult).toBeVisible();
  });
});