import { defineConfig, devices } from '@playwright/test';
 
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 30 * 1000,
  expect: { timeout: 10 * 1000 },
 
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 0,
 
  use: {
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
 
 reporter: [
  ['list'],
  ['junit', { outputFile: 'test-results/junit/results.xml' }],
  ['json',  { outputFile: 'test-results/results.json' }],
  ['html',  { outputFolder: 'playwright-report', open: 'never' }],
   ['allure-playwright',  { outputFolder: 'allure-results', open: 'never' }]
],
 
  outputDir: 'test-results/artifacts',
 
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },

  ]
});