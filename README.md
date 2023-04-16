# websocketSamples

## 1. [nodemon](https://nodemon.io/)
- 서버 코드 변경시 마다 서버 재시작 프로그램
```bash
# 설치
npm install -g nodemon
# 실행
# - public/ 디렉토리에 코드변화가 감지되면 app.js 재시작함
nodemon --watch public/ app.js
# packages.json - 하단
{
  (...)
  "scripts":{
    "start:dev": "nodemon --watch public/ app.js"
  }
}
```

## 2. [pm2](https://pm2.keymetrics.io/) (Process Manager)
- PM2는 Node.js 어플리케이션을 쉽게 관리할 수 있게 해주는 Process Manager이다. Node.js 어플리케이션을 cluster mode 로 실행시킨다거나, 메모리가 넘친다거나, 오류로 인해 프로세스가 종료되는 등의 상황에 직면했을 때 각각의 상황을 사용자가 모두 신경 써서 처리해줄 수도 있지만, 너무 복잡하고 신경 써야 할 일들이 많아진다.
- PM2를 이용하면 간단한 설정만으로도 이러한 처리를 손쉽게 해결할 수 있다.

```bash
# 설치
npm install -g pm2@latest
# 실행
pm2 start app.js
# 프로세스 상태 간략 표시
pm2 list
# 도움말
pm2 --help
# packages.json - 하단
# public/ 디렉토리에 코드변화가 감지되면 app.js 재시작함
{
  (...)
  "scripts":{
    "demon": "pm2 start app.js",
  }
}
```