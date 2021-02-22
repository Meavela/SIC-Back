pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm i -g jest'
                sh 'npm i'
            }
        }
        stage('Lint') {
            steps {
                echo 'Linting..'
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
        stage("build & SonarQube analysis") {
            agent any
            steps {
                withSonarQubeEnv('My SonarQube Server') {
                    sh 'sonar-scanner -Dsonar.projectKey=SIC-Back -Dsonar.sources=. -Dsonar.host.url=http://20.56.176.197/ -Dsonar.login=959a633fe15189cf6cbf06d2bf433306e7d361db'
                }
            }
        }
        stage("Quality Gate") {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

    post {
        always {
            sh 'zip -rv coverage.zip coverage/lcov-report/'
            archiveArtifacts artifacts: 'overage.zip', fingerprint: true
            archiveArtifacts artifacts: 'test-report.html', fingerprint: true
        }
    }
}