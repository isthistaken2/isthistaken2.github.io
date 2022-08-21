var mousetrap1 = document.getElementById('mousetrap-1');

mousetrap1.onmouseover = function() {
  alert("THIS IS AN ALERT: ANDREW LOVES USING THE WORD TEST");
}

var mousetrap2 = document.getElementById('mousetrap-2');

mousetrap2.onmouseover = function() {
  alert("THIS IS AN ALERT: ANDREW LOVES USING THE WORD TEST");
}

var mousetrap3 = document.getElementById('mousetrap-3');

mousetrap3.onmouseover = function() {
  window.history.go(-1);
}

var mousetrap4 = document.getElementById('mousetrap-4');

mousetrap4.onmouseover = function() {
  alert("THIS IS AN ALERT: ANDREW LOVES USING THE WORD TEST");
}

var mousetrap5 = document.getElementById('mousetrap-5');
var blogText = document.getElementById('blog-text');
mousetrap5.onmouseover = function() {
 blogText.style.fontSize = '100px';
}

mousetrap5.onmouseout = function() {
 blogText.style.fontSize = '16px';
}
