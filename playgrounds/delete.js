//const MongoClient=require('mongodb').MongoClient;

const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',(err,db)=>{
        if(err){
             return console.log("unable to connect db")
        }
        console.log("connected done")
        var dbo = db.db("mydb");
      // delete one
// dbo.collection('data').deleteOne({
//     city:"rajkot"
// }).then((result)=>{
//     console.log(result);
// })
      //delete mnay
// dbo.collection('data').deleteMany({city:"ahemadabad"}).then((res)=>{
//     console.log(res)
// })



      //find delete one
      dbo.collection('data').findOneAndDelete({city:"surat"}).then((res)=>{
console.log(res)
      })

        db.close();
})