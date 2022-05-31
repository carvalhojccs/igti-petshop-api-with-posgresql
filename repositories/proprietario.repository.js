import { connect } from "./db.js";

async function isertOwner(proprietario){
    const conn = await connect();

    try {
        const sql = "INSERT INTO proprietarios(nome, telefone) VALUES ($1, $2) RETURNING *";
        const values = [proprietario.nome, proprietario.telefone];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getOwners(){
    const conn = await connect();

    try {
        const res = await conn.query("SELECT * FROM proprietarios");
        return res.rows;
    } catch (err) {
        throw err;
    }
}

export default {
    isertOwner,
    getOwners,
}