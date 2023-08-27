interface Game {
    id: number,
    title: string,
    publisher: string,
    genre: string,
    developer: string,
    game_url: string,
    thumbnail: string,
    release_date: string,
    short_description: string,
    freetogame_profile_url: string,
}
interface AdaptiveGame {
    id: string,
    title: string,
    publisher: string,
    genre: string,
    developer: string,
    gameUrl: string,
    img: string,
    releaseDate: string,
    shortDescription: string,
    freetogameProfileUrl: string,
}
type MinimumSystemRequirementsType = {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string
}
type Screenshot = {
    id: number;
    image: string;
}

export interface IGame extends Game {
    platform: string,
}
export interface GameType extends AdaptiveGame {
    platform: string,
}
export interface IGameInfo extends Game {
    description: string,
    minimum_system_requirements: MinimumSystemRequirementsType,
    screenshots: Screenshot[],
    status: string,
}
export interface GameInfoType extends AdaptiveGame {
    description: string,
    minimumSystemRequirements: MinimumSystemRequirementsType,
    screenshots: Screenshot[],
    status: string,
}
