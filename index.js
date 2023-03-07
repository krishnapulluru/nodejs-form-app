const fs = require('fs');
const http = require('http');
const url = require('url');
const templateConvert = require('./modules/template-converter');

const productsList = fs.readFileSync(`${__dirname}/data/products.json`, 'utf-8');
const data = JSON.parse(productsList);
const singleProductTemp = fs.readFileSync(`${__dirname}/templates/single-product-template.html`, 'utf-8');
const overview = fs.readFileSync(`${__dirname}/templates/overview-template.html`, 'utf-8');
const description = fs.readFileSync(`${__dirname}/templates/product-template.html`, 'utf-8');
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-typpe': 'text/hml' });
    const htmlCards = data.map((itms) => templateConvert(singleProductTemp, itms)).join('');
    res.end(overview.replace(/{%PRODUCTS%}/g, htmlCards));
  } else if (pathname === '/product') {
    const filter = [...data.filter((res) => res.id == query.id)];
    const html = filter.length > 0 ? templateConvert(description, filter[0]) : '<h1>Product not found</h1>';
    res.end(html);
  } else {
    res.writeHead(404, 'page not found');
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8001, 'localhost');
