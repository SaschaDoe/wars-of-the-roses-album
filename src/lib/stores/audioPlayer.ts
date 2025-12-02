import { writable, derived } from 'svelte/store';
import type { Song } from '$lib/data/songs';
import { songs, getSongByTrackNumber } from '$lib/data/songs';

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
				const nextTrack = state.currentSong.trackNumber + 1;
				if (nextTrack > songs.length) return state;
				const nextSong = getSongByTrackNumber(nextTrack);
				if (!nextSong) return state;
				return {
					...state,
					currentSong: nextSong,
					isPlaying: true,
					currentTime: 0,
					duration: 0
				};
			});
		},
		prevSong: () => {
			update(state => {
				if (!state.currentSong) return state;
				const prevTrack = state.currentSong.trackNumber - 1;
				if (prevTrack < 1) return state;
				const prevSong = getSongByTrackNumber(prevTrack);
				if (!prevSong) return state;
				return {
					...state,
					currentSong: prevSong,
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
