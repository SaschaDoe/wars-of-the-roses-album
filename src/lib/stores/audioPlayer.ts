import { writable, derived } from 'svelte/store';
import type { Song } from '$lib/data/songs';
import { songs as warsOfRosesSongs } from '$lib/data/songs';
import { songsHundredYears } from '$lib/data/songs-hundred-years';

interface AudioPlayerState {
	currentSong: Song | null;
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	volume: number;
}

const initialState: AudioPlayerState = {
	currentSong: null,
	isPlaying: false,
	currentTime: 0,
	duration: 0,
	volume: 1
};

const allAlbumSongs: Song[][] = [warsOfRosesSongs, songsHundredYears];

function findSongContext(songId: string): { songs: Song[]; index: number } | null {
	for (const albumSongs of allAlbumSongs) {
		const index = albumSongs.findIndex(s => s.id === songId);
		if (index !== -1) return { songs: albumSongs, index };
	}
	return null;
}

function createAudioPlayer() {
	const { subscribe, set, update } = writable<AudioPlayerState>(initialState);

	return {
		subscribe,
		playSong: (song: Song) => {
			update(state => ({
				...state,
				currentSong: song,
				isPlaying: true,
				currentTime: 0,
				duration: 0
			}));
		},
		play: () => {
			update(state => ({ ...state, isPlaying: true }));
		},
		pause: () => {
			update(state => ({ ...state, isPlaying: false }));
		},
		toggle: () => {
			update(state => ({ ...state, isPlaying: !state.isPlaying }));
		},
		setCurrentTime: (time: number) => {
			update(state => ({ ...state, currentTime: time }));
		},
		setDuration: (duration: number) => {
			update(state => ({ ...state, duration: duration }));
		},
		setVolume: (volume: number) => {
			update(state => ({ ...state, volume: volume }));
		},
		nextSong: () => {
			update(state => {
				if (!state.currentSong) return state;
				const ctx = findSongContext(state.currentSong.id);
				if (!ctx || ctx.index >= ctx.songs.length - 1) return state;
				return {
					...state,
					currentSong: ctx.songs[ctx.index + 1],
					isPlaying: true,
					currentTime: 0,
					duration: 0
				};
			});
		},
		prevSong: () => {
			update(state => {
				if (!state.currentSong) return state;
				const ctx = findSongContext(state.currentSong.id);
				if (!ctx || ctx.index <= 0) return state;
				return {
					...state,
					currentSong: ctx.songs[ctx.index - 1],
					isPlaying: true,
					currentTime: 0,
					duration: 0
				};
			});
		},
		stop: () => {
			set(initialState);
		}
	};
}

export const audioPlayer = createAudioPlayer();

export const isPlayerVisible = derived(audioPlayer, $player => $player.currentSong !== null);

export { findSongContext };
