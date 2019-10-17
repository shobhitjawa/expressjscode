const express=require('express');
const app=express();

app.get('/',(req,res)=>{                       //we will get output as hello shobhit in browser.
    res.send('hello shobhit');               
});
app.get('/api/courses',(req,res)=>{            //we will get [1,2,3,4]
res.send([1,2,3,4]);
});

app.get('/api/courses/:id',(req,res)=>{        //whatever we type at id we will get it as output
    res.send(req.params.id);                     //localhost:3000/api/courses/242 then 242 will be output.
});
app.get('/api/posts/:year/:month',(req,res)=>{  //whatever we type at year and month we will get it as output
res.send(req.params);                      //{"year":"2019","month":"10"} this will be the output.
});                                                  //localhost:3000/api/posts/2019/10
app.listen(3000,()=>{
    console.log('reached on port 3000!')            
});