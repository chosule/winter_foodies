# 베이스 이미지 설정
FROM node:18.17.0-alpine as build

# 기본 디렉토리 설정
WORKDIR /app

# 빌드 시 힙 메모리 크기 설정
ENV NODE_OPTIONS=--max_old_space_size=8192

# npm 레지스트리 설정 및 네트워크 타임아웃 설정
RUN npm config set registry http://registry.npmjs.org/
RUN npm set network-timeout 600000


# 종속성 파일 복사
COPY package.json package-lock.json ./

# 종속성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 빌드 명령어 실행
RUN npm run build

# 프로덕션 이미지 설정
FROM node:18.17.0-alpine as production

# 기본 디렉토리 설정
WORKDIR /app

# 빌드 단계에서 생성된 파일을 프로덕션 단계의 작업 디렉토리로 복사
COPY --from=build /app ./

# 필요한 종속성만 설치
RUN npm ci --only=production

# 환경 변수 설정
ENV NEXTAUTH_URL=http://localhost:3000
ENV AUTH_SECRET=YR5aDBkUoDEXcM7euJbQT+RQN787Ycb7+PBp+BsOhew=
ENV NEXT_PUBLIC_BASE_URL=https://asia-northeast3-winter-foodis-new.cloudfunctions.net/projectAPI/api
ENV AUTH_TRUST_HOST=http://localhost:3000

# 컨테이너 포트 설정
EXPOSE 3000

# 애플리케이션 시작 명령어
CMD ["npm", "start"]



