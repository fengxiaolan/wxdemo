var express=require('express');

var app=express();

app.post('/api/login',function(req,res){
	res.json({
		code:0,
		msg:"成功了"
	})
})


app.listen(8090,function(){
   console.log("连接成功")
});
