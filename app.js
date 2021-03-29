const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const { response } = require('express');

require('dotenv').config();
fs = require('fs');

const app = express();
//Reading SQL file
readSQLFile = () =>{
  file = fs.readFileSync('./Gadgets_db.sql', {encoding:'utf8', flag:'r'});
  return file;
}
initDB = async ()=>{
  querys = readSQLFile();
  await mysqlConnection.query(querys, (err, rows, fields) => {
    if (!err){
    console.log("DB initialized corectly");
    }
    else
    console.log(err);
  });
}
//Configuring express server
app.use(bodyparser.json());
// Creating a mysql connection
const mysqlConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_DB,
  password:process.env.PWD_DB,
  database:process.env.NAME_DB,
  multipleStatements: true
});
mysqlConnection.connect((err)=> {
  if(!err){
  console.log('Connection Established Successfully');
  initDB();}
  else
  console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});
//------------------routes----------------------
//Create products Checked
app.post('/products' , (req, res) => {
  postCreateProducts(req,res); 
} );


//Read the products by id
app.get('/products' , (req, res) => {
  const id = req.params.id;
  getReadProduct(req,res);
});

//--------------Controllers--------------------------
const postCreateProducts=async(req,res) =>{
  const id = req.params.id;
  if(fieldValidator(req,res)){
    const {name, price, description='', date} = req.body;
    const query = `insert into Products values(0, '${name}', ${price}, '${description}', STR_TO_DATE( '${date}', '%d-%m-%Y' )); 
          select * from Products where _name = '${name}';`;
    mysqlConnection.query(query, (err, rows, fields) => {
      if (!err){
          res.send({'id':rows[1][0].id, 'name':rows[1][0]._name, 'price':rows[1][0].price, 'description': rows[1][0]._description, 'date':rows[1][0]._date.toISOString().split('T')[0]});
      }
      else res.send('Algo salió mal');
    });
  }
  
}

const getReadProduct =(req,res)=>{
  const id = req.params.id;
  const dates = req.query.dates;
  mysqlConnection.query(`select * from Products where _date >= STR_TO_DATE( '${dates}', '%d-%m-%Y' )`, (err, rows, fields) => {
    if (!err){
      if(rows.length === 0){
        res.status(404).sned(`No existen Fechas ayores o iguales a '${dates}`)
      }
      res.send(rows);
    }
    else
    console.log(err);
  });
}
// --- Validators-----------
const fieldValidator = (req, res) => {
  const {name = null, description = null, price = null, date = null} = req.body;
  if (name == null){
    res.status(404).json({message:'El nombre es necesario'});
    return false;
  }

  if (price == null){
    res.status(404).json({message:'El producto debe tener precio'});
    return false;
  }

  if (date == null){
    res.status(404).json({message:'El producto debe tener fecha'});
    return false;
  }
  return true;
}

const port =  process.env.PORT | 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));