// the logger for print() and println()
module.exports = function PjsConsole(document) {
  var e = { BufferMax: 200 };
  e.javaconsole = document.getElementById('new-processing-console');
  console.log(e.javaconsole);
  e.BufferArray = [];

  e.print = e.log = function () {
    e.javaconsole = document.getElementById('new-processing-console');
    var args = Array.prototype.slice.call(arguments);
    var t = args.map(function(t, idx) { return t + (idx+1 === args.length ? "" : " "); }).join('');
    if (e.BufferArray[e.BufferArray.length - 1]) e.BufferArray[e.BufferArray.length - 1] += (t) + "";
    else e.BufferArray.push(t);
    if(e.BufferArray.join('') !== null) e.javaconsole.innerHTML = e.BufferArray.join('');
    
  };

  e.println = function () {
    var args = Array.prototype.slice.call(arguments);
    args.push('<br>');
    e.print.apply(e, args);
    if (e.BufferArray.length > e.BufferMax) {
      e.BufferArray.splice(0, 1);
    } else {
      e.javaconsole.scrollTop = parseInt(e.javaconsole.scrollHeight, 10);
    }
  };

  return e;
};
