pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile.node-agent'
            dir 'docker'
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
                sh 'npm run ci:test'
            }
        }
        stage('Compile') {
            steps {
                sh 'echo \'We will Compile here.\''
            }
        }
        stage('publish') {
            steps {
                sh 'npm run ci:publish'
            }
        }
    }
}
