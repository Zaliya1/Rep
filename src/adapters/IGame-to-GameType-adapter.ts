import {GameType, IGame} from "@/types";

export default function IGameToGameTypeAdapter(games: IGame[]):GameType[] {
    return games.map((item) => {
        return {
            id: String(item.id),
            title: item.title,
            releaseDate: item.release_date,
            publisher: item.publisher,
            genre: item.genre,
            img: item.thumbnail,
            platform: item.platform,
            developer: item.developer,
            gameUrl: item.game_url,
            shortDescription: item.short_description,
            freetogameProfileUrl: item.freetogame_profile_url
        }
    })
}
