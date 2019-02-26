//const MongoClient=require('mongodb').MongoClient;

const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',(err,db)=>{
        if(err){
             return console.log("unable to connect db")
        }
        console.log("connected done")
        var dbo = db.db("mydb");
       dbo.collection('data').find({
        _id:new ObjectID('5c751880de86c83c5709e656exit')
    }).toArray().then((docs)=>{
            console.log(JSON.stringify(docs,undefined,2))
       },(err)=>{
                console.log("unable to fetch data",err)
       })


//     var dbo = db.db("mydb");
//     dbo.collection('data').find(
//  ).count().then((count)=>{
//          console.log(JSON.stringify(count,undefined,2))
//     },(err)=>{
//              console.log("unable to fetch data",err)
//     })

        db.close();
})