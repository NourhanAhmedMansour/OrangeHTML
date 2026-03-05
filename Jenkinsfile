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
 
        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate test-results/allure-results -o allure-report --clean'
            }
        }
    }
 
   post {
  always {
    script {
      def passed = 0
      def failed = 0
      def skipped = 0
      def total = 0
 
      if (fileExists('test-results/results.json')) {
        def json = readJSON file: 'test-results/results.json'
 
        json.suites.each { suite ->
          suite.specs.each { spec ->
            spec.tests.each { t ->
              total++
              def status = t.results[0]?.status
              if (status == 'passed') passed++
              else if (status == 'failed') failed++
              else skipped++
            }
          }
        }
      }
 
      def summary = """
Result: ${currentBuild.currentResult}
Total: ${total}
Passed: ${passed}
Failed: ${failed}
Skipped: ${skipped}
 
Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}
URL: ${env.BUILD_URL}
Report (if archived): ${env.BUILD_URL}artifact/playwright-report/index.html
"""
 
      emailext(
        to: 'nourhanaamansour@gmail.com',
        subject: "Jenkins: ${env.JOB_NAME} #${env.BUILD_NUMBER} - ${currentBuild.currentResult} | P:${passed} F:${failed} S:${skipped}",
        body: summary
      )
    }
     junit 'test-results/junit/results.xml'
    archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
  }
}