const express=require('express');
const app=express();
const courses=[
{ id:1,name:'course1'},
{ id:2,name:'course2'},
{ id:3,name:'course3'},
{ id:4,name:'course4'},
];
app.get('/',(req,res)=>{                       
    res.send('hello shobhit');               
});
app.get('/api/courses',(req,res)=>{            
res.send(courses);
});
app.get('/api/courses/:id',(req,res)=>{        
 const course=courses.find(d =>d.id ===parseInt(req.params.id));

    if(!course) {
        res.status(404).send('the course with given id was not found');
    }                                                   
    else{
         res.send(course);
    }
});
app.get('/api/posts/:year/:month',(req,res)=>{  
res.send(req.params);                      
});                                                  
app.listen(3000,()=>{
    console.log('reached on port 3000!')            
}); 
    //we will get output at localhost:3000/api/courses/3
    //as {"id":3,"name":"course3"}
    //we will get output at localhost:3000/api/courses/2
    //as {"id":2,"name":"course2"}
    //similarly with 1,2 id also,
    //as we pass localhost:3000/api/courses/5
    //the course with given id was not found 
    //we will get this output.
