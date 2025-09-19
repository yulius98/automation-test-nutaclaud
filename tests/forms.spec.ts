import { test, expect } from '@playwright/test';

test.describe('Form Interaction Tests', () => {
  test('should fill and submit a contact form', async ({ page }) => {
    // Navigate to a test form page
    await page.goto('https://httpbin.org/forms/post');
    
    // Fill out the form fields
    await page.fill('input[name="custname"]', 'John Doe');
    await page.fill('input[name="custtel"]', '+1-234-567-8900');
    await page.fill('input[name="custemail"]', 'john.doe@example.com');
    
    // Select from dropdown
    await page.selectOption('select[name="size"]', 'large');
    
    // Select radio button
    await page.check('input[name="topping"][value="bacon"]');
    
    // Fill textarea
    await page.fill('textarea[name="comments"]', 'This is a test comment for automation testing.');
    
    // Submit the form
    await page.click('input[type="submit"]');
    
    // Verify form submission was successful
    await page.waitForLoadState('networkidle');
    
    // Check that we received the form data back (httpbin.org echoes form data)
    await expect(page.locator('body')).toContainText('John Doe');
    await expect(page.locator('body')).toContainText('john.doe@example.com');
    await expect(page.locator('body')).toContainText('large');
  });

  test('should validate form fields', async ({ page }) => {
    await page.goto('https://httpbin.org/forms/post');
    
    // Try to submit form without filling required fields
    await page.click('input[type="submit"]');
    
    // Verify that required field validation works
    const nameField = page.locator('input[name="custname"]');
    
    // Fill only the name field
    await nameField.fill('Test User');
    
    // Verify the field contains the expected value
    await expect(nameField).toHaveValue('Test User');
    
    // Clear the field to test empty state
    await nameField.clear();
    await expect(nameField).toHaveValue('');
  });

  test('should handle multiple selections', async ({ page }) => {
    await page.goto('https://httpbin.org/forms/post');
    
    // Test multiple checkbox selections
    await page.check('input[name="topping"][value="bacon"]');
    await page.check('input[name="topping"][value="cheese"]');
    
    // Verify both checkboxes are checked
    await expect(page.locator('input[name="topping"][value="bacon"]')).toBeChecked();
    await expect(page.locator('input[name="topping"][value="cheese"]')).toBeChecked();
    
    // Uncheck one option
    await page.uncheck('input[name="topping"][value="bacon"]');
    await expect(page.locator('input[name="topping"][value="bacon"]')).not.toBeChecked();
    await expect(page.locator('input[name="topping"][value="cheese"]')).toBeChecked();
  });
});