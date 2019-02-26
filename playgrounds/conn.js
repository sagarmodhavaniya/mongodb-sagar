//const MongoClient=require('mongodb').MongoClient;

const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',(err,db)=>{
        if(err){
             return console.log("unable to connect db")
        }
        console.log("connected done")
        var dbo = db.db("mydb");
        dbo.collection('data').insertOne({
            name:'sagar',
            age:20,
       
            city:'rajkot'

        },(err,result)=>{
                if(err){
                    return console.log("Error to insert database")
                }
                console.log(JSON.stringify(result.ops,undefined,2))
        })


        db.close();
})