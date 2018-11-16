/**
 * XlsxReader.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */



const XLSX = require('xlsx');


const fs=require('fs');
const path=require('path')

module.exports = {

  attributes: {

      /*

      cookieID:{
            type:'string'
            required:true
      }

      IP:{
            type:'number'
            required:true
      }

      */
  },


connection:'mongodb',






    readingFileToJSON :function(cb){

    console.log("INside Read 1")

    let xlsxFile=path.dirname('E:/newSample.xlsx')

    //let xlsxFile = __dirname +xlsxFilePath


    //let xlsxFile = __dirname +'F:\practice book\ xlsx read\ xlsx-project\ assets\ data\ newSample.xlsx'

    console.log("INside Read 2")

    //fs.exists(xlsxFile,function(exists){

        console.log('it exits');

         if(xlsxFile) {

            console.log("In")

          //console.log(xlsxFile)

      let workbook=XLSX.readFile('E:/newSample.xlsx');

        console.log(workbook)

        let sheet_name_list=workbook.SheetNames;

         console.log(sheet_name_list)
          //?for loop if sheetnumber not given

        let newJSONObject= XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

          console.log(newJSONObject)

        return cb(null,newJSONObject);

        console.log(newJSONObject.length);

      }return console.log('File does not exist');

    //console.log('File does not exist');

  //});

  },
 dumpingToDatabase:function(data,cb){


    async.each(data,function(item,cb){

    console.log('inside database')
    console.log(item)

    let cookieID=item.cookieID;

     console.log(cookieID)

     let IPname=item.ip;

     console.log(IPname)

    XlsxReader.create({cookieID:cookieID,IPname:IPname}).exec(function(err,result){
    if(err)  console.log(err)
      console.log('success')
    })

});
       if(err){

           return cb(err)

       }cb(null,"inserted document");

    //});
   },

//driver function declaration

    dumpedRecord:function(err,cb){

  console.log('00001');
     if(err){
        console.log(err);
        }
   console.log('00002');

     XlsxReader.readingFileToJSON(function(err,JSONData){


         if(err){

             return cb(err)

                 }XlsxReader.dumpingToDatabase(JSONData,function(err,result){

         if(!err){

                 cb(null,"data inserted")


                }return cb(err)


});


});


}

}
