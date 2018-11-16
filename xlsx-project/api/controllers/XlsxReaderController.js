/**
 * XlsxReaderController
 *
 * @description :: Server-side logic for managing xlsxreaders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    getFile:function(req,res){

        XlsxReader.dumpedRecord(req,function(err,data){


            if(err){

                res.json(err)


            }res.json(data)

        });

    }

};
