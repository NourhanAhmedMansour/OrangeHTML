import { defineConfig, devices } from '@playwright/test';
 
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 30 * 1000,
  expect: { timeout: 10 * 1000 },
 
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 0,
 
  use: {
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
 
  reporter: [
    ['html', { outputFolder: 'test-results/playwright-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'test-results/allure-results' }],
    ['junit', { outputFile: 'test-results/junit/results.xml' }]
  ],
 
  outputDir: 'test-results/artifacts',
 
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },

  ]
});