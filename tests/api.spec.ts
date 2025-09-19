import { test, expect } from '@playwright/test';

test.describe('API Testing Examples', () => {
  test('should make HTTP GET request', async ({ request }) => {
    // Test making API requests with Playwright
    const response = await request.get('https://httpbin.org/get');
    
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    
    const responseBody = await response.json();
    expect(responseBody.url).toBe('https://httpbin.org/get');
  });

  test('should make HTTP POST request', async ({ request }) => {
    const testData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello from Playwright automation test'
    };

    const response = await request.post('https://httpbin.org/post', {
      data: testData
    });
    
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    
    const responseBody = await response.json();
    expect(responseBody.json).toEqual(testData);
  });

  test('should handle HTTP headers', async ({ request }) => {
    const response = await request.get('https://httpbin.org/headers', {
      headers: {
        'User-Agent': 'Playwright-Test-Agent',
        'Custom-Header': 'test-value'
      }
    });
    
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(responseBody.headers['User-Agent']).toBe('Playwright-Test-Agent');
    expect(responseBody.headers['Custom-Header']).toBe('test-value');
  });

  test('should handle query parameters', async ({ request }) => {
    const params = {
      name: 'playwright',
      version: '1.55.0',
      type: 'automation'
    };

    const response = await request.get('https://httpbin.org/get', {
      params: params
    });
    
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(responseBody.args).toEqual(params);
  });
});