const monguoose=require('mongoose');
monguoose.Promise=global.Promise
monguoose.connect('mongodb://localhost:27017/mydb').then(()=>{
    console.log("conn done")
},()=>{
    console.log("error")
});
var mydb=monguoose.model("data",{
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    pos:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    age:{
    type:Number,
    minlength:2,
    trim:true,
    required:true
}
});
var mynew=new mydb({
    name:"sagar",
    age:20,
    pos:"front-end"
});

mynew.save().then((res)=>{
console.log("data insert",JSON.stringify(res,undefined,2))
},(err)=>{
    console.log("somethings was wrong")
});
