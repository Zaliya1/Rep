import {GameInfoType, IGameInfo} from "../types";

export default function IGameInfoToGameInfoTypeAdapter(game: IGameInfo):GameInfoType | {} {
    return {
        id: String(game.id),
        title: game.title,
        releaseDate: game.release_date,
        publisher: game.publisher,
        genre: game.genre,
        img: game.thumbnail,
        developer: game.developer,
        gameUrl: game.game_url,
        shortDescription: game.short_description,
        freetogameProfileUrl: game.freetogame_profile_url,
        description: game.description,
        minimumSystemRequirements: game.minimum_system_requirements,
        screenshots: game.screenshots,
        status: game.status,
    }
}
