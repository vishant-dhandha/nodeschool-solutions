/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 3/11/15
 * Time: 1:22 PM
 * To change this template use File | Settings | File Templates.
 */

var qhttp = require('q-io/http')
    , _ = require('lodash')
    , cachePath = "http://localhost:7000/"
    , dbPath = "http://localhost:7001/";

var buildDbPath = _.bind(String.prototype.concat, dbPath);

qhttp.read(cachePath)
    .then(_.compose(qhttp.read, buildDbPath))
    .then(_.compose(console.log, JSON.parse))
    .then(null, console.error)
    .done();