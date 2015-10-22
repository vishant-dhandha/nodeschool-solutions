/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 5:03 PM
 * To change this template use File | Settings | File Templates.
 */

var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Math from './math';
console.log(Math.PI);
console.log(Math.sqrt(+arg1));
console.log(Math.square(+arg2));
