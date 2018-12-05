var express= require('express');
var router = express.Router();
var sql = require('sql-query');
var sqlQuery = sql.Query();

// 连接数据库
var connection = require('../../mysqlConnect/mysqlConnect')
