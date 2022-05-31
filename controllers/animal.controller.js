import animalService from "../services/animal.service.js";

async function createAnimal(req, res, next){
    const animal = req.body;

    try {
        if(!animal.nome || !animal.tipo || !animal.proprietario_id){
            throw new Error("Nome e Tipo e Proprietário ID são obrigatórios!");
        }
    
        res.send(await animalService.createAnimal(animal));
        logger.info(`POST /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function getAnimals(req, res, next){
    try {
        res.send(await animalService.getAnimals(req.query.proprietario_id));
        logger.info(`GET /animal`);
    } catch (err) {
        next(err);
    }
}

async function getAnimal(req, res, next){
    try {
        const id = req.params.id;
        res.send(await animalService.getAnimal(id));
        logger.info(`GET /animal/:id`);
    } catch (err) {
        next(err);
    }
}

async function updateAnimal(req, res, next){
    let animal = req.body;
    try {
        if(!animal.animal_id || !animal.nome || !animal.tipo || !animal.proprietario_id) {
            throw new Error("Nome, Tipo, Animal ID e Proprietario ID são obrigatórios!");
        }
        animal = await animalService.updateAnimal(animal);
        res.send(animal);
        logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteAnimal(req, res, next){
    try {
        console.log(req.params.id);
        await animalService.deleteAnimal(req.params.id);
        res.end();
        logger.info(`DELETE /animal/:id`);
    } catch (err) {
        next(err);
    }
}

export default {
    createAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    deleteAnimal,
}