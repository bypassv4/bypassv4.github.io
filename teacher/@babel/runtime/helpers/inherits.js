!function(){
    var setPrototypeOf = require("./setPrototypeOf");
    
    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && setPrototypeOf(e, t);
    }
    
    module._inherits = _inherits;
}()