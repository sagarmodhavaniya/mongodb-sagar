var res=(enr)=>{
    const request=require('request');
   if(typeof enr==="number"){
   
   request({
       url:`https://ssrd.000webhostapp.com/ssrd/resultjs.php?ern=${enr}`,
       json:true,
   
   },(error,responce,body)=>{
     try{
       var display=body;
       if(display.result[0].name===null){
           console.error("data not found");
       }
       else{
           
       
       for(var i=0;i<display.sagar.length;i++)
       {
         console.log(`Enrollment No--> ${display.result[0].erno} , Name--> ${display.result[0].name} , Subject name--> ${display.sagar[i].s_name} , Marks--> ${display.sagar[i].marks} `);
         console.log("|----------------------------------------------------------------------------------------------------------------------------------------------------------------|");
       }
     }}
     catch(e){
         console.error(e);
     }
   
   })
   }
   else{
       console.log("Enr Must be Number");
   }
   }
   module.exports.res=res;