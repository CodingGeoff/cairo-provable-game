System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function formateNumber(num) {
    let result = num + '';
    if (num >= 100000000) result = (num / 100000).toFixed(2) + "B";else if (num >= 10000000) result = (num / 10000).toFixed(2) + "M";else if (num >= 1000000) result = (num / 10000).toFixed(2) + "W";else if (num >= 10000) result = (num / 1000).toFixed(2) + "K";
    return result;
  }

  _export("formateNumber", formateNumber);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d1d6IZfGBAOog8kajMNSZd", "formateNumber", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=462a336f54e7c4f0bd6ef7a1ba8ef1e941fd4086.js.map