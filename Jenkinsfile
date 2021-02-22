pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm i -g jest eslint'
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
        stage("SonarQube analysis") {
            steps {
                sh 'sonar-scanner -Dsonar.projectKey=SIC-Back -Dsonar.sources=. -Dsonar.host.url=http://20.56.176.197/ -Dsonar.login=959a633fe15189cf6cbf06d2bf433306e7d361db'
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
            archiveArtifacts artifacts: 'coverage.zip', fingerprint: true
            archiveArtifacts artifacts: 'test-report.html', fingerprint: true
        }
    }
}