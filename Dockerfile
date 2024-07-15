# 베이스 이미지 설정
FROM node:18.17.0-alpine AS builder


# 기본 디렉토리 설정
WORKDIR /app

# 빌드 시 힙 메모리 크기 설정
ENV NODE_OPTIONS=--max_old_space_size=8192

# npm 레지스트리 설정 및 네트워크 타임아웃 설정
RUN npm config set registry https://registry.npmjs.org/
RUN npm config set fetch-timeout 600000


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


# Copy builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./app/.next/static
COPY --from=builder /app/public ./public  


# 컨테이너 포트 설정
EXPOSE 3000

# 애플리케이션 시작 명령어
CMD ["node", "server.js"]



