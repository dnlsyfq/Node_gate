### Setting 

```
$npm init
$npm install
$npm install express
$npm install ejs
$npm install nodemon
$node app.js
$nodemon app.js
```

> to connect to mysql
```
const mysql = require('mysql);
app.use(express.static('public'));

const connection = mysql.createConnection({
    //database name,password
})

```

```
delete the task called test that was already written within scripts, and instead we will register a task called start

Make it Easier Start Up nodemon

//package.json

windows
"start": ".\\node_modules\\.bin\\nodemon app.js"

macos
"start": "./node_modules/.bin/nodemon app.js"


$npm run start
```

### Routing

Request to particular url

Each route can handle a request with a function, known as a route handler

app.get('/top',(req,res) => {
    res.render('top.ejs');
});

### Create Page

app_project
|_app.js
|_views
|   |_top.ejs
|

### CSS , Image folder
path relative to public

public\css\style.css
public\images\top.png

```
// app.js
app.use(express.static('public'));

// html
<link href="/css/style.css">


<img src="/images/top.png">
```

### Embedded Javascript in HTML , EJS

* define variable as it wont be displayed
```
<% %>
```
```
// index.ejs

<% const item={id:3, name:'onions'} %>
<p>id: <%item.id%></p>
<p>name: <%item.name%></p>

```

* printing a variable it will be displayed
```
<%= %>
```
```
// index.ejs

<% const item= {id:3, name:'onions'}> %>
<p>id: <%=item.id%></p>
<p>name: <%=item.name%></p>
```

* Advatanges of EJS in HTML

```
<% const items = [
          {id: 1, name: 'potatoes'},
          {id: 2, name: 'carrots'},
          {id: 3, name: 'onions'}
        ]; %>
<% items.forEach((item) => { %>
    <li>
        <span><%= item.id%></span>
        <span><%= item.name%></span>
    </li>
<% }); %>
```
--- 

# Basic of Node.js and NPM

install
```
npm install lite-server --save-dev
```

package.json
```
"scripts":{
    "start":"npm run lite",
    "lite":"lite-server"
}
```
start
```
npm start
```
---
# Bootstrap
```
npm install
npm install bootstrap@4.0.0 --save
npm install jquery@3.3.1 popper.js@1.12.9 --save
```

head
```
  <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

body
```
 <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```
