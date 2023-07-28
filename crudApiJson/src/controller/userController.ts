import { Request, Response, query } from 'express'; // npm i --save-dev @types/express
import db from '../config/database';

// Listar usuários // get, post, put e delete = método
async function listUsers(req: Request, res: Response) {
    db.connection.query('SELECT * FROM clients', (err, results) => {
        console.log(results);
        res.send(results);
    });
}

async function createUser(req: Request, res: Response) {
    const querySql = 'INSERT INTO clients(DS_NAME, NM_CELLPHONE, DS_STATUS) VALUES(?,?,?);';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS
    );

    db.connection.query(querySql, params, (err, results) => {
        res.send('Cadastro realizado com sucesso!');
    })
}

export default { listUsers,createUser };