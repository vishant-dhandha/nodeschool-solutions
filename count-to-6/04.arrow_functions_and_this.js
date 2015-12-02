/**
 * Created with JetBrains WebStorm.
 * User: vishant
 * Date: 2/12/15
 * Time: 2:10 PM
 * To change this template use File | Settings | File Templates.
 */
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(()=>  console.log(this.yelp));
    }
};
foot.kick();
