# blog-web

The personal blog of web.

## Install

```sh
    npm install
    # OR
    yarn install
```

## Development

```sh
    npm run server
```

Server will listen at `port:80`.

## Production

```sh
    npm run build
```

The build file will be in the `/dist` directory. It contains the following four files:

* index.html // Static index entrance
* app.[hash].css // Static stylesheet
* app.[hash].js // Business
* vendor.[hash].js // Dependency
* manifest.[hash].js // Runtime

## Future

* Adding mock data server
* Adding `Node.js` as intermediate layer route forwarding
* Adding `Flask` or `Django` as server side logic
* Adding automation deployment same as `Jekins`
