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

export default {
    createOwner,
    getOwners,
    getOwner,
}
