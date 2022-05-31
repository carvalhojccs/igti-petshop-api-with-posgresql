import proprietarioService from "../services/proprietario.service.js";

async function createowner(req, res, next){
    const proprietario = req.body;

    try {
        if(!proprietario.nome || !proprietario.telefone){
            throw new Error("Nome e Telefone são obrigatórios!");
        }
    
        res.send(await proprietarioService.createOwner(proprietario));
        logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (err) {
        next(err);
    }
}

async function getOwners(req, res, next){
    try {
        res.send(await proprietarioService.getOwners());
        logger.info(`GET /proprietario`);
    } catch (err) {
        next(err);
    }
}

export default {
    createowner,
    getOwners,
}