/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 7/10/15
 * Time: 3:41 PM
 * To change this template use File | Settings | File Templates.
 */

var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI, sqrt, square} from './solution-math';
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));

// my solution is below
/*
import {PI} from './exported_math';
import {sqrt} from './exported_math';
import {square} from './exported_math';

var arg1 = process.argv[2];
var arg2 = process.argv[3];
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
*/
