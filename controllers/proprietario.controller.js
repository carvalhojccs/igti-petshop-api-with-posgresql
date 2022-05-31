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

async function getOwner(req, res, next){
    try {
        const id = req.params.id;
        res.send(await proprietarioService.getOwner(id));
        logger.info(`GET /proprietario/:id`);
    } catch (err) {
        next(err);
    }
}

async function updateOwner(req, res, next){
    let proprietario = req.body;
    try {
        if(!proprietario.proprietario_id || !proprietario.nome || !proprietario.telefone) {
            throw new Error("Nome, Telefone e Proprietario ID são obrigatórios!");
        }
        proprietario = await proprietarioService.updateOwner(proprietario);
        res.send(proprietario);
        logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteOwner(req, res, next){
    try {
        console.log(req.params.id);
        await proprietarioService.deleteOwner(req.params.id);
        res.end();
        logger.info(`DELETE /proprietario/:id`);
    } catch (err) {
        next(err);
    }
}

export default {
    createowner,
    getOwners,
    getOwner,
    updateOwner,
    deleteOwner,
}