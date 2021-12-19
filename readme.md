# e-Commerce site based on template E-Store Ozon

Important! dont forget to start webpack watcher:

```
webpack --watch --mode=development
```

1. JSON place-holder for front-end test - https://jsonplaceholder.typicode.com/
2. Local JSON server for case if draft of response available https://github.com/typicode/json-server
3. Google Firebase real-database

### 1a - Run this code here, in a console or from any site:

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

Additional methods are at https://jsonplaceholder.typicode.com/guide/

method Post :

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

### 2a - You need to install JSON-server as a NodeJS app:

Start JSON Server

```javascript
json-server --watch db.json
```

Take into account that /db.json/ nearby index.html. If you need some other json-file - you should to change path to db.json.

Start JSON Server

```javascript
json-server --watch /path to xxx.json/
```

For example:

```javascript
json-server --watch ./db/db.json
```

## Important! If you need not LiveServer reload the developed site each time db.json changed by put-requests, it has to include some string into VS Code Settings!

```
"liveServer.settings.ignoreFiles": [
    "db/db.json"
]
```

#### Routes

Based on the previous `db.json` file, here are all the default routes. You can also add [other routes](#add-custom-routes) using `--routes`.

##### Plural routes

```
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```

##### Singular routes

```
GET    /profile
POST   /profile
PUT    /profile
PATCH  /profile
```

##### Filter

Use `.` to access deep properties

```
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode
```

##### Paginate

Use `_page` and optionally `_limit` to paginate returned data.

In the `Link` header you'll get `first`, `prev`, `next` and `last` links.

```
GET /posts?_page=7
GET /posts?_page=7&_limit=20
```

_10 items are returned by default_

##### Sort

Add `_sort` and `_order` (ascending order by default)

```
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
```

For multiple fields, use the following format:

```
GET /posts?_sort=user,views&_order=desc,asc
```

### 3a - Firebase Google

Working with realTime-Database

##### Pay Attention !!!

Here is some difference for fetch request to - .json has to be added at the end of url !!!

```
return fetch('http://localhost:3000/goods')

return fetch(
    'https://ozon-e-commerce-default-rtdb.firebaseio.com/goods.json'
  )

```
