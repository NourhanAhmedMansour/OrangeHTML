pipeline {
  agent any
 
  options {
    timestamps()
    disableConcurrentBuilds()
  }
 
  stages {
 
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
 
    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
      }
    }
 
    stage('Install Playwright Browsers') {
      steps {
        bat 'npx playwright install'
      }
    }
 
    stage('Run Playwright Tests') {
      steps {
        bat 'npx playwright test'
      }
    }
 
    stage('Allure Report') {
    steps {
        allure([
            includeProperties: false,
            jdk: '',
            results: [[path: 'allure-results']]
        ])
    }
}
 
  }
 
  post {
  always {
 
    script {
 
      def r = junit testResults: 'test-results/junit/results.xml', allowEmptyResults: true
 
      def total = r.totalCount
      def failed = r.failCount
      def skipped = r.skipCount
      def passed = total - failed - skipped
 
      def summary = """Result: ${currentBuild.currentResult}
 
Total: ${total}
Passed: ${passed}
Failed: ${failed}
Skipped: ${skipped}
 
Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}
URL: ${env.BUILD_URL}
 
Allure Report: http://localhost:8080/job/OrangeHTML/${env.BUILD_NUMBER}allure/#

Playwright Report: ${env.BUILD_URL}artifact/playwright-report/index.html
"""
 
      emailext(
        to: 'nourhanaamansour@gmail.com',
        subject: "Jenkins: ${env.JOB_NAME} #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
        body: summary
      )
    }
 
    archiveArtifacts artifacts: 'playwright-report/**, allure-report/**, test-results/**', allowEmptyArchive: true
  }
}
}