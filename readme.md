# e-Commerce site based on template E-Store Ozon

Learning

1. JSON place-holder for front-end test - https://jsonplaceholder.typicode.com/
2. Local JSON server for case if draft of response available https://github.com/typicode/json-server
3. Google Firebase real-database

1a - Run this code here, in a console or from any site:

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

2a - You need to install JSON-server as a NodeJS app:
