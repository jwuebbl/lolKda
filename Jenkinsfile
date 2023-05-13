pipeline {
    agent any
    stages {
        stage('Test Connection') {
            steps {
                sh 'nc -zv <server_address> <port>'
            }
        }
    }
}