import { chromium, defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout : 30*1000,
  expect: {
    timeout: 10000},
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: 'html',
  use: { headless: false,
    browserName: 'chromium',
       trace: 'on-first-retry',
       screenshot: 'on',
       video:"on"
  }
  ,
});

