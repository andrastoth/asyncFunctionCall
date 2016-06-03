/*!
 * Javascript Async Function Call
 * Author: Tóth András
 * Web: http://atandrastoth.co.uk
 * email: atandrastoth@gmail.com
 * Licensed under the MIT license
 */

/*
 * callback: success function
 * error: error function
 * timeout: frunction start timeout
 * ...args arguments (arg1, arg2, etc)
 */
Function.prototype.callAsync = function(success, error, timeout, ...args) {
    var asyncFunctionCall = function(Self, args) {
        try {
            Self.apply(Self, args);
            if (typeof success == 'function') success(args);
        } catch (e) {
            if (typeof error == 'function') error(e);
        }
    }
    setTimeout(asyncFunctionCall.bind(null, this, args), !!timeout ? timeout : 0);
    return this;
};