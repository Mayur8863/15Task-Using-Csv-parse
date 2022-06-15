const {parse} = require('csv-parse');
const fs = require('fs');

const csvData = [];

fs.createReadStream('./randomData.csv')
    .pipe(
        parse({
            delimiter:'\n'
        })
    )
    .on('data',(dataRow)=>{
        csvData.push(dataRow);
    })
    .on('end',()=>{
        console.log(csvData);
    })