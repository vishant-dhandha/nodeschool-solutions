/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/11/15
 * Time: 5:59 PM
 * To change this template use File | Settings | File Templates.
 */
var q = require('q');

function throwMyGod(){
     throw new Error("OH NOES")
}

function iterate(integer){
    console.log(integer);
    return integer+1;
}

q.fcall(iterate,1).then(iterate).then(iterate).then(iterate).then(iterate)
    .then(throwMyGod).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate).then(null,console.log)