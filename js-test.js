function myFunction() {
  var str = "Hello World!";
  var enc = window.btoa(str);
  var dec = window.atob(enc);

  var res = "Encoded String: " + enc + "<br>" + "Decoded String: " + dec;
}
