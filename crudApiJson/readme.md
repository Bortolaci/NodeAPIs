```
npm install
```
```
touch .env
```
Colar no arquivo .env
```
PORT = 3000
```
Install package mysql2
```
npm i mysql2
```
create folder config
```
mkdir src/config
```
create file database.ts
```
touch config/database.ts
```

Create table clients


```
const mysql = require('mysql2/promise');
 
const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectUsers() {
    const res = await client.query('SELECT * FROM clients');
    return res[0];
}

module.exports = {
    selectUsers
}
```

Importar database no constroller