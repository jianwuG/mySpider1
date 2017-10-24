var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res){
  request('https://www.zhibo8.cc/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //返回的body为抓到的网页的html内容
      var $ = cheerio.load(body); //当前的$符相当于拿到了所有的body里面的选择器
      var navText=$('.nav').html(); //拿到导航栏的内容
        console.log('11111111111',navText);
      res.send(navText);
    }
  })
});

app.listen(3000);

// let cheerio = require('cheerio')
// let $ = cheerio.load('<h2 class="title">Hello world</h2>')
 
// $('h2.title').text('Hello there!')
// $('h2').addClass('welcome')
 
// $.html()