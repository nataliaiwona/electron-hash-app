// Run this function after the page has loaded
$(function () {

  var crypto = require('crypto'); // https://nodejs.org/api/crypto.html

  var shell = require('electron').shell;

  $(document).on('click', 'a[href^="http"]', function(evt) {
    evt.preventDefault();
    shell.openExternal(this.href);
  });

  $('#text-input').bind('input propertychange', function () {
    var text = this.value;
    

    // MD5
    var hrstart = process.hrtime();
    var md5 = crypto.createHash('md5').update(text, 'utf8').digest('hex');
    var hrend = process.hrtime(hrstart);

    $('#md5-output').text(md5);
    $('#md5-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);

    // SHA-1
    hrstart = process.hrtime();
    var sha1 = crypto.createHash('sha1').update(text, 'utf8').digest('hex');
    hrend = process.hrtime(hrstart);
    
    $('#sha1-output').text(sha1);
    $('#sha1-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);

    // SHA-256
    hrstart = process.hrtime();
    var sha256 = crypto.createHash('sha256').update(text, 'utf8').digest('hex');
    hrend = process.hrtime(hrstart);
    
    $('#sha256-output').text(sha256);
    $('#sha256-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);

    // SHA-384
    hrstart = process.hrtime();
    var sha384 = crypto.createHash('sha384').update(text, 'utf8').digest('hex');
    hrend = process.hrtime(hrstart);
    
    $('#sha384-output').text(sha384);
    $('#sha384-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);

    // SHA-512
    hrstart = process.hrtime();
    var sha512 = crypto.createHash('sha512').update(text, 'utf8').digest('hex');
    hrend = process.hrtime(hrstart);

    $('#sha512-output').text(sha512);
    $('#sha512-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);
});

// Focus input box
$('#text-input').focus();

});

document.ondrop = function (evt) {
  evt.preventDefault();
  var filePath = evt.dataTransfer.files[0].path;
  console.log(filePath);
  var fs = require('fs');

  var content = fs.readFile(filePath, 'utf-8', function (err, data) {
    if(err){
        alert("An error ocurred reading the file :" + err.message);
        return;
    }

    var d = data;
    var crypto = require('crypto');

    // MD5
    var hrstart = process.hrtime();
    var md5 = crypto.createHash('md5').update(d, 'utf8').digest('hex');
    var hrend = process.hrtime(hrstart);

    $('#md5-output').text(md5);
    $('#md5-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);

    // SHA-1
    hrstart = process.hrtime();
    var sha1 = crypto.createHash('sha1').update(d, 'utf8').digest('hex');
    hrend = process.hrtime(hrstart);
    
    $('#sha1-output').text(sha1);
    $('#sha1-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);

    // SHA-256
    hrstart = process.hrtime();
    var sha256 = crypto.createHash('sha256').update(d, 'utf8').digest('hex');
    hrend = process.hrtime(hrstart);
    
    $('#sha256-output').text(sha256);
    $('#sha256-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);

    // SHA-384
    hrstart = process.hrtime();
    var sha384 = crypto.createHash('sha384').update(d, 'utf8').digest('hex');
    hrend = process.hrtime(hrstart);
    
    $('#sha384-output').text(sha384);
    $('#sha384-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);

    // SHA-512
    hrstart = process.hrtime();
    var sha512 = crypto.createHash('sha512').update(d, 'utf8').digest('hex');
    hrend = process.hrtime(hrstart);

    $('#sha512-output').text(sha512);
    $('#sha512-time').text(`Benchmark took ${hrend[0] * 1e9 + hrend[1]} nanoseconds`);

  });

};