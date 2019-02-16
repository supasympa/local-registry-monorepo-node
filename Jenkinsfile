pipeline {
    agent {
        dockerfile {
            filename './docker/dockerfile.node-agent'
            dir './docker/build'
            label 'node-agent'
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
                sh 'npm run publish'
            }
        }
    }
}
