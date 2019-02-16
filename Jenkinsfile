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
        stage('Install & Compile') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run ci:test'
            }
        }
        stage('publish') {
            steps {
                sh 'git status'
                sh 'git update-index --assume-unchanged package-lock.json'
                sh 'npm run ci:publish'
            }
        }
    }
}
