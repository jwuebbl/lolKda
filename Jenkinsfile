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
                    echo 'A error occured during the build.'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'call the flask build pipeline here. Flask will pull the latest artifact everytime?'
            }
        }
    }
}
