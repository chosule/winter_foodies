pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'ap-northeast-2'
        ECR_REPOSITORY_NAME = 'winter-foodies'
        ECS_CLUSTER_NAME = 'winter-foodies-cluster'
        ECS_SERVICE_NAME = 'winter-foodies-service'
        AWS_ACCOUNT_ID = '851725480061'  
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
        NODE_OPTIONS = '--max_old_space_size=8192'  
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Docker Buildx') {
            steps {
                script {
                    sh 'docker buildx rm mybuilder || true'
                    sh 'docker buildx create --name mybuilder --use || docker buildx use mybuilder'
                    sh 'docker buildx inspect --bootstrap'
                }
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    def dockerImage = "${env.AWS_ACCOUNT_ID}.dkr.ecr.${env.AWS_DEFAULT_REGION}.amazonaws.com/${env.ECR_REPOSITORY_NAME}:${env.BUILD_ID}"
                    env.DOCKER_IMAGE = dockerImage
                }
                sh '''
                aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com
                docker buildx build --platform linux/amd64,linux/arm64 -t ${DOCKER_IMAGE} --build-arg NODE_OPTIONS=${NODE_OPTIONS} --push .
                '''
            }
        }

        stage('Deploy to ECS') {
            steps {
                sh '''
                aws ecs update-service --cluster ${ECS_CLUSTER_NAME} --service ${ECS_SERVICE_NAME} --force-new-deployment
                '''
            }
        }
    }
}