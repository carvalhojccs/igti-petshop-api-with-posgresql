import proprietarioRepository from "../repositories/proprietario.repository.js";

async function createOwner(proprietario){
    return await proprietarioRepository.isertOwner(proprietario);
}

async function getOwners(){
    return await proprietarioRepository.getOwners();
}

export default {
    createOwner,
    getOwners,
}
