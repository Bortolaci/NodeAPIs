import { Request, Response, query } from 'express'; // npm i --save-dev @types/express
import db from '../config/database';

// Listar usuários // get, post, put e delete = método
async function listUsers(req: Request, res: Response) {
    db.connection.query('SELECT * FROM clients_ecommerce;', (err, results) => {
        res.send(results);
        if (err){
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                message: 'Sucesso.',
                data: results
            })
        }
    })
};

async function createUser(req: Request, res: Response) {
    const querySql = 'INSERT INTO clients_ecommerce(DS_NAME, DS_UF) VALUES(?,?);';
    
    const params = Array(
        req.body.ds_name,
        req.body.ds_uf
    );

    db.connection.query(querySql, params, (err, results) => {
        if (err) {
            res.status(404).json({
                succes: false,
                message: "Cadastro não realizado!",
            })
        }
        res.json({
            success: true,
            message: "Cadastro realizado com sucesso!",
            createdId: results
        });
    });
};

async function editUser(req: Request, res: Response) {
    res.send(`editUser ${req.params.idUser}`);
};

async function deleteUser(req: Request, res: Response) {
    res.send(`deleteUser ${req.params.idUser}`);
};

export default {
    listUsers,
    createUser,
    editUser,
    deleteUser
};