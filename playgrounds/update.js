//const MongoClient=require('mongodb').MongoClient;

const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',(err,db)=>{
        if(err){
             return console.log("unable to connect db")
        }
        console.log("connected done")
       var dd=db.db('mydb')
       dd.collection('data').findOneAndUpdate({city:"baroda"},{$set:{city:"rajkot"}},{
           returnOriginal:false
       }).then((res)=>{
console.log(res)
       })

        db.close();
})