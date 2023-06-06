import charactersRepository from "../repository/characters.repository";
import { Character } from "../types/characters.types";

class Characters implements charactersRepository{
    private characters: Character[] = [];
    async createCharacter(character: Character):Promise<void>{
        // add new character to the array
        await this.characters.push(character);
    }
}

export default Characters;