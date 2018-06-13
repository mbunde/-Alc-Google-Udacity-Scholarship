/*
 * Programming Quiz: Laugh (5-4)
 */

// var laugh = /* finish the function expression */
var laugh = function(num) { /* finish the function expression */
    var ha = "";
    for (i = 0; i < num; ++i) {
        ha = ha + "ha";
    }
    return ha + "!";
};

console.log(laugh(10));
