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
    junit 'test-results/junit/results.xml'
    archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
 
    emailext(
      subject: "Playwright Test Results",
      body: "The Jenkins build has finished. Please check the results.",
      to: "nourhanaamansour@gmail.com"
    )
  }
}
}