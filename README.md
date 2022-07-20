# toy_front_team2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 추가 설정


```
.vscode
ㄴ settings.json
```
- 위와 같이 .vscode 폴더 생성
- 이후 해당 폴더 안에 settings.json 파일 생성 

이후 

settings.json에 아래 구문 복사 후 붙여넣기

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.workingDirectories": [
      {"mode": "auto"}
  ],
  "eslint.validate": [
      "javascript",
      "typescript"
  ]
}
```
