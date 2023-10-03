

import { createConnection } from 'mysql';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());

const conn = createConnection({
    host:'oyu.h.filess.io',
    user:'auth_symbolburn',
    password:'4b19a847f003962746a0cbf1534ae96aa2c30b0e',
    database:'auth_symbolburn'
})

conn.connect( (err) => { 
if(err){
    console.log(err)
}
else{
    console.log('uraaa')
}
})


app.listen(3306, () => {
    console.log('listening at http://localhost:3306');
});


let dbdata;
conn.query('SELECT * FROM user',(err,result,field)=>{
 dbdata = result;
 //console.log(dbdata);
})




app.get('/', (req , res) => {
    //console.log(dbdata);
    res.send(dbdata);
    res.end();
});
