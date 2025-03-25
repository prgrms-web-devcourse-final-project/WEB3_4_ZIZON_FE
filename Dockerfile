# 1. 기본 이미지 설정 (Node.js 18 버전 사용)
FROM node:23.4.0-alpine AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 lock 파일을 복사
COPY package.json package-lock.json ./

# 4. 의존성 설치 (단, production 모드에서는 devDependencies 설치 안함)
RUN npm ci

# 5. 소스 코드 복사
COPY . .

# 6. Next.js 빌드 실행
RUN npm run build

# 7. 실행을 위한 최적화된 환경 생성
FROM node:23.4.0-alpine

WORKDIR /app

# 8. 빌드된 파일과 필요한 모듈만 복사
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# 9. 환경 변수 설정 (Next.js 앱 실행)
ENV PORT=3000
EXPOSE 3000

# 10. Next.js 앱 실행
CMD ["npm", "run", "start"]
