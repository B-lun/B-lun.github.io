var I18N = {
  'numberToString': function (num) {
  return ('' + num).split('')
    .map(function (c) { return '0123456789'[c]; }).join('');
  },
  'tileText': function (value) {
    var text = " 八班开学还要继续早安噢";
    var log2 = function (n) {
      var ret = 0;
      while (n > 1) ret++, n >>= 1; return ret;
    }
    return text[log2(value)] || '';
  },
  'won': '开学还要继续早安噢',
  'lose': '开学还要继续早安噢',
}
 