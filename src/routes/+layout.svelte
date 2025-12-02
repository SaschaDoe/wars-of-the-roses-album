<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { language, currentTranslations } from '$lib/i18n';
	import { onMount } from 'svelte';
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';
	import { isPlayerVisible } from '$lib/stores/audioPlayer';

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
</script>

<div class="app" class:player-visible={$isPlayerVisible}>
	<header class="header">
		<nav class="nav">
			<div class="nav-brand">
				<a href="/" class="brand-link">
					<h1 class="brand-title">Uncivil War</h1>
					<span class="brand-subtitle">{$language === 'de' ? 'Rosenkriege' : 'Wars of the Roses'}</span>
				</a>
			</div>

			<button class="mobile-menu-btn" onclick={toggleMobileMenu} aria-label="Toggle menu">
				<span></span>
				<span></span>
				<span></span>
			</button>

			<ul class="nav-links" class:open={mobileMenuOpen}>
				<li><a href="/" class:active={$page.url.pathname === '/'} onclick={closeMobileMenu}>{$currentTranslations.nav.home}</a></li>
				<li><a href="/songs" class:active={$page.url.pathname.startsWith('/songs')} onclick={closeMobileMenu}>{$currentTranslations.nav.songs}</a></li>
				<li class="dropdown">
					<a href="/encyclopedia" class:active={$page.url.pathname.startsWith('/encyclopedia')} onclick={closeMobileMenu}>{$currentTranslations.nav.encyclopedia}</a>
					<ul class="dropdown-menu">
						<li><a href="/encyclopedia/timeline" onclick={closeMobileMenu}>📅 {$currentTranslations.nav.timeline}</a></li>
						<li><a href="/encyclopedia#people" onclick={closeMobileMenu}>👤 {$currentTranslations.nav.people}</a></li>
						<li><a href="/encyclopedia#events" onclick={closeMobileMenu}>⚔️ {$currentTranslations.nav.events}</a></li>
						<li><a href="/encyclopedia#places" onclick={closeMobileMenu}>📍 {$currentTranslations.nav.locations}</a></li>
						<li><a href="/encyclopedia#concepts" onclick={closeMobileMenu}>📚 {$currentTranslations.nav.concepts}</a></li>
					</ul>
				</li>
				<li><a href="/download" class:active={$page.url.pathname === '/download'} onclick={closeMobileMenu}>{$currentTranslations.nav.download}</a></li>
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

	@media (max-width: 768px) {
		.nav {
			padding: 0.75rem 1rem;
		}

		.mobile-menu-btn {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			height: 100vh;
			width: 250px;
			background: rgba(10, 10, 10, 0.98);
			flex-direction: column;
			padding: 100px 2rem 2rem;
			transition: right 0.3s ease;
			overflow-y: auto;
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
