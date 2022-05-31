import animalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal){
    return await animalRepository.isertAnimal(animal);
}

async function getAnimals(){
    return await animalRepository.getAnimals();
}

async function getAnimal(id){
    const animal = await animalRepository.getAnimal(id);
    
    if(!animal){
        throw new Error("Animal não existe!");
    }

    return animal;
}

async function updateAnimal(animal){
    if(!await animalRepository.getAnimal(animal.animal_id)){
        throw new Error("Animal não existe!")
    }

    return await animalRepository.updateAnimal(animal);
}

async function deleteAnimal(id){
    if(!await animalRepository.getAnimal(id)){
        throw new Error("Animal não existe!");
    }

    await animalRepository.deleteAnimal(id);
}

export default {
    createAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    deleteAnimal,
}
