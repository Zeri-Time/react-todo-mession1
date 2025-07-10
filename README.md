# Todo App mini-project


### 프로젝트 소개
React를 이용해 Todo 어플리케이션을 구현한 사이트입니다.

할일을 입력하면 index 순서대로 로컬에 저장되며 수정 버튼을 눌러 내용을 수정할 수 있습니다.

완료(체크버튼) 클릭시 해당 항목이 리스트 제일 아래로 이동하며 최대 표시 항목수는 5개 이고 이후로는 아래로 스크롤 됩니다.

### 기술스택
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### 개발기간
+ 25/07/07 - 25/07/10  

---
### ⚙️설치 및 실행 방법
### 1. **리액트 설치**
```bash
npm create vite@latest projectname -- --template react
cd projectname
npm i
```
### 2. **테일윈드 설치**
```bash
npm i tailwindcss @tailwindcss/vite
```
✔️vite.config.js 에 추가
```javascript
import tailwindcss from '@tailwindcss/vite'
plugins: [tailwindcss()]
```
✔️index.css 에 추가
```javascript
@import "tailwindcss";
```
### 3. **라우터 설치**
```bash
npm i react-router-dom
```
### 4. **formkit 설치**
```bash
npm install @formkit/auto-animate
```
### 🚀실행
```bash
npm run dev
```
---


### 데모
![image](https://github.com/user-attachments/assets/77b572ed-5a56-4e7b-a29e-529281b769e9)
![image](https://github.com/user-attachments/assets/56b0f560-65ee-49cb-9b91-c89aec6930c7)




