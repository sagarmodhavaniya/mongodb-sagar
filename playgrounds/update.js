//const MongoClient=require('mongodb').MongoClient;

const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',(err,db)=>{
        if(err){
             return console.log("unable to connect db")
        }
        console.log("connected done")
       var dd=db.db('mydb')
       dd.collection('data').findOneAndUpdate({id:new ObjectID('5c751880de86c83c5709e656')},{$set:{city:"rajkot"}},{
           returnOriginal:false
       }).then((res)=>{
console.log(res)
       })

        db.close();
})