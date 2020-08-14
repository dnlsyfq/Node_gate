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


