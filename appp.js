const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "zxzxzx1234ZX"
});
// тестирование подключения
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

 const sql1 = "INSERT INTO users(userLogin) VALUES(?)";
 connection.query(sql1, 'gwe', function(err, results) {
    if(err) console.log(err);
    else console.log("Данные добавлены");
});

 // закрытие подключения
 connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});