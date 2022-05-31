import proprietarioRepository from "../repositories/proprietario.repository.js";

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

export default {
    createOwner,
    getOwners,
    getOwner,
    updateOwner
}
