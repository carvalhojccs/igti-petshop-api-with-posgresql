import proprietarioRepository from "../repositories/proprietario.repository.js";

async function createOwner(proprietario){
    return await proprietarioRepository.isertOwner(proprietario);
}

export default {
    createOwner,
}
