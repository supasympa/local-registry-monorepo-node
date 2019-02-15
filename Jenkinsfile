pipeline {
    agent {
        docker {
            image 'node:8-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
            CI = 'true'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm t'
            }
        }
        stage('Compile') {
            steps {
                sh 'echo \'We will Compile here.\''
            }
        }
        stage('publish') {
            steps {
                sh 'echo \'We will publish here.\''
            }
        }
    }
}
