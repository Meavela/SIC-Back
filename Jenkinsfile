pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'node --version'
                sh 'npm --version'
               /* sh 'npm i'*/
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'run lint'
                sh 'run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}