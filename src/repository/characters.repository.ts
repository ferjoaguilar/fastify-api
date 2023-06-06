import { Character } from "../types/characters.types";

interface charactersRepository {
    createCharacter(character: Character): Promise<void>;
}

export default charactersRepository;