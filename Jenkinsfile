pipeline {
  agent {
    docker {
      image 'node'
    }
    
  }
  stages {
    stage('Initialize') {
      steps {
        echo 'Minimal Pipeline'
        sh 'echo PATH=${PATH}'
      }
    }
    stage('Build') {
      steps {
        sh 'echo \'Say hi\''
      }
    }
  }
}