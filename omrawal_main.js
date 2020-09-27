const express=require('express')
const app=express()
app.get('/',function (req,res) {
    res.send('this is homepage');
})

var stud={
    1: 'Tom',
    2: 'Oggy',
    3: 'Ninja Hatori'
}
app.get('/students/:id',function (req,res) {
    res.send('Requested name is: '+stud[req.params.id]);
})
app.listen(9000,function (req,res) {
    console.log('Server is running');
})