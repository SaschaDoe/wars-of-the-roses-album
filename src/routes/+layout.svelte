<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { language, currentTranslations } from '$lib/i18n';
	import { onMount } from 'svelte';
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';
	import { isPlayerVisible } from '$lib/stores/audioPlayer';
	import { albums } from '$lib/data/albums';

	let mobileMenuOpen = $state(false);
	let mounted = $state(false);

	onMount(() => {
		// Restore language from localStorage on mount
		const stored = localStorage.getItem('language');
		if (stored === 'de') {
			language.set('de');
		}
		mounted = true;
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function toggleLanguage() {
		language.toggle();
	}

	function getAlbumTitle(album: typeof albums[0]) {
		return $language === 'de' ? album.titleDe : album.title;
	}
</script>

<div class="app" class:player-visible={$isPlayerVisible}>
	<header class="header">
		<nav class="nav">
			<div class="nav-brand">
				<a href="/" class="brand-link">
					<h1 class="brand-title">Uncivil War</h1>
					<span class="brand-subtitle">{$language === 'de' ? 'Wo Geschichte auf Metal trifft' : 'Where History Meets Metal'}</span>
				</a>
			</div>

			<button class="mobile-menu-btn" onclick={toggleMobileMenu} aria-label="Toggle menu">
				<span></span>
				<span></span>
				<span></span>
			</button>

			<!-- Mobile menu backdrop -->
			{#if mobileMenuOpen}
				<div class="mobile-backdrop" onclick={closeMobileMenu}></div>
			{/if}

			<ul class="nav-links" class:open={mobileMenuOpen}>
				<li><a href="/" class:active={$page.url.pathname === '/'} onclick={closeMobileMenu}>{$currentTranslations.nav.home}</a></li>
				<li class="dropdown">
					<a href="/#albums" class:active={$page.url.pathname.startsWith('/albums')} onclick={closeMobileMenu}>{$currentTranslations.nav.albums}</a>
					<ul class="dropdown-menu">
						{#each albums as album}
							<li><a href="/albums/{album.slug}" onclick={closeMobileMenu}>{getAlbumTitle(album)}</a></li>
						{/each}
					</ul>
				</li>
				<li><a href="/about" class:active={$page.url.pathname === '/about'} onclick={closeMobileMenu}>{$currentTranslations.nav.about}</a></li>
				<li class="lang-switch">
					<button onclick={() => { toggleLanguage(); closeMobileMenu(); }} class="lang-btn" aria-label="Switch language">
						{$language === 'en' ? 'DE' : 'EN'}
					</button>
				</li>
			</ul>
		</nav>
	</header>

	<main class="main-content">
		<slot />
	</main>

	<footer class="footer">
		<div class="footer-content">
			<p>{$currentTranslations.footer.copyright}</p>
		</div>
	</footer>

	<AudioPlayer />
</div>

<style>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(10, 10, 10, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--color-accent);
	}

	.nav {
		max-width: 1400px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-brand {
		z-index: 1001;
	}

	.brand-link {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.brand-title {
		font-size: 1.5rem;
		margin: 0;
		letter-spacing: 0.1em;
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.brand-subtitle {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		font-style: italic;
	}

	.mobile-menu-btn {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		z-index: 1001;
	}

	.mobile-menu-btn span {
		width: 25px;
		height: 2px;
		background: var(--color-gold);
		transition: all 0.3s ease;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
		list-style: none;
	}

	.nav-links > li {
		position: relative;
	}

	.nav-links a {
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		position: relative;
		padding: 0.5rem 0;
	}

	.nav-links > li > a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-accent-light);
		transition: width 0.3s ease;
	}

	.nav-links > li > a:hover::after,
	.nav-links > li > a.active::after {
		width: 100%;
	}

	.dropdown {
		position: relative;
	}

	.dropdown-menu {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(10, 10, 10, 0.98);
		border: 2px solid var(--color-gold);
		border-radius: 8px;
		padding: 0.75rem 0;
		min-width: 200px;
		list-style: none;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease;
		margin-top: 0.5rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}

	.dropdown:hover .dropdown-menu {
		opacity: 1;
		visibility: visible;
		margin-top: 1rem;
	}

	.dropdown-menu li {
		list-style: none;
	}

	.dropdown-menu a {
		display: block;
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		font-weight: 500;
		text-transform: none;
		color: var(--color-text);
		transition: all 0.2s ease;
		border-left: 3px solid transparent;
	}

	.dropdown-menu a::after {
		display: none;
	}

	.dropdown-menu a:hover {
		background: rgba(212, 175, 55, 0.1);
		border-left-color: var(--color-gold);
		padding-left: 2rem;
	}

	.lang-switch {
		margin-left: 1rem;
	}

	.lang-btn {
		background: transparent;
		border: 2px solid var(--color-gold);
		color: var(--color-gold);
		padding: 0.4rem 0.8rem;
		font-size: 0.9rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		cursor: pointer;
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	.lang-btn:hover {
		background: var(--color-gold);
		color: var(--color-bg);
	}

	.main-content {
		flex: 1;
		margin-top: 100px;
		padding: 2rem;
	}

	.footer {
		background: var(--color-bg-secondary);
		border-top: 1px solid var(--color-accent);
		padding: 2rem;
		margin-top: 4rem;
	}

	.footer-content {
		max-width: 1400px;
		margin: 0 auto;
		text-align: center;
	}

	.app.player-visible .footer {
		padding-bottom: 5rem;
	}

	.mobile-backdrop {
		display: none;
	}

	@media (max-width: 768px) {
		.nav {
			padding: 0.75rem 1rem;
		}

		.mobile-menu-btn {
			display: flex;
		}

		.mobile-backdrop {
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.6);
			backdrop-filter: blur(4px);
			z-index: 999;
			animation: fadeIn 0.3s ease;
		}

		@keyframes fadeIn {
			from { opacity: 0; }
			to { opacity: 1; }
		}

		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			height: 100vh;
			width: 280px;
			max-width: 85vw;
			background: rgba(10, 10, 10, 0.98);
			flex-direction: column;
			padding: 100px 2rem 2rem;
			transition: right 0.3s ease;
			overflow-y: auto;
			z-index: 1000;
			box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
		}

		.nav-links a {
			font-size: 1rem;
		}

		.nav-links.open {
			right: 0;
		}

		.dropdown-menu {
			position: static;
			transform: none;
			opacity: 1;
			visibility: visible;
			margin-top: 0.5rem;
			margin-left: 1rem;
			border: 1px solid var(--color-gold);
			box-shadow: none;
		}

		.dropdown-menu a {
			font-size: 0.95rem;
			padding: 0.5rem 1rem;
		}

		.dropdown-menu a:hover {
			padding-left: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.main-content {
			margin-top: 80px;
			padding: 1rem;
		}
	}
</style>
