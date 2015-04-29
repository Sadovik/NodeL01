"use strict"

const fs = require("fs"),
      filename = process.argv[2],
	  array = filename.split("."),
	  method = process.argv[3],
	  spawn = require("child_process").spawn;  
  
fs.watch(filename, function(){
	console.log('File ' + filename + ' just changed!');
	
		var now     = new Date(); 
		var year    = now.getFullYear();
		var month   = now.getMonth()+1; 
		var day     = now.getDate();
		var hour    = now.getHours();
		var minute  = now.getMinutes();
		var second  = now.getSeconds(); 
		if(month.toString().length == 1) {
			var month = '0'+month;
		}
		if(day.toString().length == 1) {
			var day = '0'+day;
		}   
		if(hour.toString().length == 1) {
			var hour = '0'+hour;
		}
		if(minute.toString().length == 1) {
			var minute = '0'+minute;
		}
		if(second.toString().length == 1) {
			var second = '0'+second;
		}   
		var dateTime = year+'.'+month+'.'+day+'_'+hour+'.'+minute+'.'+second;  
	
	if ( method == "Copy") {
		let dir = spawn('cmd', [
				'/S',
				'/C',
				'copy ' + filename +' ' + array[0] + '_' + dateTime + '.' + array[1]
				]);
		dir.stdout.pipe(process.stdout);
	} else if ( method == "Del") {
		let dir = spawn('cmd', [
				'/S',
				'/C',
				'del ' + filename
				]);
		dir.stdout.pipe(process.stdout);
	}	
	
});

console.log('Start wathcing file ' + filename);
