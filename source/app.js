
const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')();
const views = require('koa-views');
const handlebars = require('handlebars');

const getCardsController = require('./controllers/cards/get-cards');
const createCardController = require('./controllers/cards/create');
const deleteCardController = require('./controllers/cards/delete');
const getTransactionsController = require('./controllers/transactions/get');
const createTransactionsController = require('./controllers/transactions/create');

const errorController = require('./controllers/error');

const ApplicationError = require('libs/application-error');
const CardsModel = require('source/models/cards');
const TransactionsModel = require('source/models/transactions');


import React from 'react';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server'

import App from '../public/js/ssr-main';

const app = new Koa();

app.use(views(__dirname + '/views', { extension: 'handlebars'}));
app.use(bodyParser);
app.use(router.routes());
app.use(serve('./public'));


// Сохраним параметр id в ctx.params.id
router.param('id', (id, ctx, next) => next());

router.get('/', async (ctx) => {
	// extractCritical не работает на динамичных стилях;
	const { html, ids, css } = extractCritical(renderToString(<App/>));
	await ctx.render('index', {
		ssrContent: html
	});
});

router.get('/cards/', getCardsController);
router.post('/cards/', createCardController);
router.delete('/cards/:id', deleteCardController);

router.get('/cards/:id/transactions/', getTransactionsController);
router.post('/cards/:id/transactions/', createTransactionsController);

router.all('/error', errorController);


// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// error handler
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log('Error detected', err);
    ctx.status = err instanceof ApplicationError ? err.status : 500;
    ctx.body = `Error [${err.message}] :(`;
  }
});

// Создадим модель Cards и Transactions на уровне приложения и проинициализируем ее
app.use(async (ctx, next) => {
  ctx.cardsModel = new CardsModel();
  ctx.transactionsModel = new TransactionsModel();

  await Promise.all([
    ctx.cardsModel.loadFile(),
    ctx.transactionsModel.loadFile(),
  ]);

  await next();
});



app.listen(3000, () => {
  console.log('Application started');
});
