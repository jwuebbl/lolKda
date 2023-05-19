pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'ng build'
            }
            
            post {
                success {
                    archiveArtifacts artifacts: 'dist/**'
                }
                failure {
                    echo 'A test error occured during the build.'
                }
            }
        }
    }
}
