pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'ap-northeast-2'
        ECR_REPOSITORY_NAME = 'winter-foodies'
        ECS_CLUSTER_NAME = 'winter-foodies-cluster'
        ECS_SERVICE_NAME = 'winter-foodies-service'
        DOCKER_IMAGE = ''
        AWS_ACCOUNT_ID = '851725480061'  
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    DOCKER_IMAGE = "${env.AWS_ACCOUNT_ID}.dkr.ecr.${env.AWS_DEFAULT_REGION}.amazonaws.com/${env.ECR_REPOSITORY_NAME}:${env.BUILD_ID}"
                }
                sh """
                $(aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin ${env.AWS_ACCOUNT_ID}.dkr.ecr.${env.AWS_DEFAULT_REGION}.amazonaws.com)
                docker build -t ${DOCKER_IMAGE} .
                docker push ${DOCKER_IMAGE}
                """
            }
        }

        stage('Deploy to ECS') {
            steps {
                sh """
                aws ecs update-service --cluster ${ECS_CLUSTER_NAME} --service ${ECS_SERVICE_NAME} --force-new-deployment
                """
            }
        }
    }
}