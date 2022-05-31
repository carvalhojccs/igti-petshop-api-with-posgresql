import proprietarioRepository from "../repositories/proprietario.repository.js";
import animalRepository from "../repositories/animal.repository.js";

async function createOwner(proprietario){
    return await proprietarioRepository.isertOwner(proprietario);
}

async function getOwners(){
    return await proprietarioRepository.getOwners();
}

async function getOwner(id){
    const proprietario = await proprietarioRepository.getOwner(id);
    
    if(!proprietario){
        throw new Error("Proprietário não existe!");
    }

    return proprietario;
}

async function updateOwner(proprietario){
    if(!await proprietarioRepository.getOwner(proprietario.proprietario_id)){
        throw new Error("Proprietario não existe!")
    }

    return await proprietarioRepository.updateOwner(proprietario);
}

async function deleteOwner(id){
    if(!await proprietarioRepository.getOwner(id)){
        throw new Error("Proprietário não existe!");
    }

    const animal = await animalRepository.getAnimalsByOwner(id);

    if(animal.length > 0){
        throw new Error(`Existe(m) ${animal.length} animal(is) pertencente(s) a este proprietário!`);
    } else {
        await proprietarioRepository.deleteOwner(id);
    }    
}

export default {
    createOwner,
    getOwners,
    getOwner,
    updateOwner,
    deleteOwner,
}
