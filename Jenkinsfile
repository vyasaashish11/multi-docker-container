pipeline {
  agent any

  environment {
    ECR_REGISTRY = "946133734414.dkr.ecr.ap-south-1.amazonaws.com"
    ECR_REPOSITORY = "myrepo"
    IMAGE_TAG = "latest"
  }

  stages {
    stage('Deploy') {
      steps {
        script {
          // Pull the latest image from ECR
            docker pull ${ECR_REGISTRY} ${ECR_REPOSITORY}:${IMAGE_TAG}
            
            // Stop and remove the running container
            docker stop my-container || true
            docker rm my-container || true

            // Run the new container from the updated image
            docker run -d --name my-container -p 8080:80 \${ECR_REGISTRY}/\${ECR_REPOSITORY}:\${IMAGE_TAG}
          """
        }
      }
    }
  }
}

