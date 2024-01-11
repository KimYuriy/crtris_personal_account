# crtris_personal_account

## Run development server using Docker

Собрать образ:

```bash
 docker build -t personal_account . 
```

Запустить контейнер:

```bash
docker run -p 8081:8081 personal_account
```

Сайт будет доступен по ссылке http://localhost:8081/

## First of all:
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
