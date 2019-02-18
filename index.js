var fs = require('fs');

fs.readdir('../node-file-system/', 'utf-8', function(err, file){
    console.log(file);
    fs.writeFile('./copyFiles.txt', file, function(err){
        if(err) throw err;
      });
    fs.readFile('./copyFiles.txt', 'utf-8', function(err, data){
        console.log('Dane pliku copyFiles: ');
        console.log(data);     
    });
});

// var colors = require('colors');

// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./tekst.txt', '\nTy jesteś jak zdrowie!', function(err) {
//         if (err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue);
//             console.log(data);
//         });
//     });
// });