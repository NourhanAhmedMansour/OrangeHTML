const fs = require('fs');
const path = require('path');

class StepLogger {
  constructor(testName) {
    this.steps = [];
    this.testName = testName;
    this.resultsDir = path.join(__dirname, 'Results');
    if (!fs.existsSync(this.resultsDir)) {
      fs.mkdirSync(this.resultsDir);
    }
  }

  async logStep(page, description) {
    const timestamp = Date.now();
    const screenshotPath = path.join(this.resultsDir, `${this.testName}_${timestamp}.png`);
    await page.screenshot({ path: screenshotPath });
    this.steps.push({ description, screenshotPath });
  }

  getSteps() {
    return this.steps;
  }
}

module.exports = { StepLogger };