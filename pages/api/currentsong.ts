import { currentlyPlayingSong, lastPlayedSong } from '../../lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const response = await currentlyPlayingSong();

    if (response.status === 204 || response.status > 400) {
        const response2 = await lastPlayedSong();
        const song = await response2.json();
        const isPlaying = false;
        const title = song.items[0].track.name;
        const artist = song.items[0].track.artists.map((_artist: any) => _artist.name).join(', ');
        const album = song.items[0].track.album.name;
        const albumImageUrl = song.items[0].track.album.images[0].url;
        const songUrl = song.items[0].track.external_urls.spotify;

        res.setHeader(
            'Cache-Control',
            'public, s-maxage=60, stale-while-revalidate=30'
        );

        return res.status(200).json({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        });
        //return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();

    if (song.item === null) {
        const response2 = await lastPlayedSong();
        const song = await response2.json();
        const isPlaying = false;
        const title = song.items[0].track.name;
        const artist = song.items[0].track.artists.map((_artist: any) => _artist.name).join(', ');
        const album = song.items[0].track.album.name;
        const albumImageUrl = song.items[0].track.album.images[0].url;
        const songUrl = song.items[0].track.external_urls.spotify;

        res.setHeader(
            'Cache-Control',
            'public, s-maxage=60, stale-while-revalidate=30'
        );

        return res.status(200).json({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        });
        //return res.status(200).json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
    );

    return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    });
}