import { FC } from 'react'

type CollectionProps = {
    playlists: number[]
}
type PlaylistCardProps = {
    playlist: number
}
const PlaylistCard: FC<PlaylistCardProps> = ({ playlist }) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <iframe
                frameBorder="0"
                style={{ border: 'none' }}
                width="100%"
                height="450"
                src={`https://music.yandex.ru/iframe/playlist/mackspavlov/${playlist}`}
                title={`Yandex Music Playlist ${playlist}`}>
                {/* Слушайте <a href={`https://music.yandex.ru/iframe/playlist/mackspavlov/${playlist}`}>Daily legends #1</a> — */}
                <a href='https://music.yandex.ru/users/mackspavlov'>Евгений Покалюк</a> на Яндекс Музыке
            </iframe>
        </div>
    </div>
);

const Collection: FC<CollectionProps> = ({ playlists }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {playlists.map((playlist, index) => <PlaylistCard key={index} playlist={playlist} />)}
        </div>
    );
}

export default Collection