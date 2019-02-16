pipeline {
    agent {
        dockerfile {
            filename 'dockerfile.node-agent'
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
