var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title: "Article One| Swetha",
    heading: "Article One",
    date: "Aug 7, 2017",
    content:`
                <p>
                    This is the content for my first Article.This is the content for my first Article. is the content for my first Article.s is the content for my first Article.
                </p>
                <p>
                    This is the content for my first Article.This is the content for my first Article. is the content for my first Article.s is the content for my first Article.
                </p>
                <p>
                    This is the content for my first Article.This is the content for my first Article. is the content for my first Article.s is the content for my first Article.
                </p>`
};

function createTemplateOne(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.heading;
    var content = data.content;
    var htmlTemplate = 
   ` <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/"> Home </a>
                <hr/>
                <h3>${heading}</h3>
            </div>
            
            <div>
                ${date}
            </div>
            
            <div>
                ${content}
            </div>
        </div>
        
    </body>
</html>` ;
    return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
    res.send(createTemplateOne(articleOne));
});

app.get('/article-two', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
