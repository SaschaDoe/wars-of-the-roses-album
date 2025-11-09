<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="app">
	<header class="header">
		<nav class="nav">
			<div class="nav-brand">
				<a href="/" class="brand-link">
					<h1 class="brand-title">Uncivil War</h1>
					<span class="brand-subtitle">Wars of the Roses</span>
				</a>
			</div>

			<button class="mobile-menu-btn" onclick={toggleMobileMenu} aria-label="Toggle menu">
				<span></span>
				<span></span>
				<span></span>
			</button>

			<ul class="nav-links" class:open={mobileMenuOpen}>
				<li><a href="/" class:active={$page.url.pathname === '/'}>Home</a></li>
				<li><a href="/songs" class:active={$page.url.pathname.startsWith('/songs')}>Songs</a></li>
				<li><a href="/encyclopedia" class:active={$page.url.pathname.startsWith('/encyclopedia')}>Encyclopedia</a></li>
				<li><a href="/about" class:active={$page.url.pathname === '/about'}>About</a></li>
			</ul>
		</nav>
	</header>

	<main class="main-content">
		<slot />
	</main>

	<footer class="footer">
		<div class="footer-content">
			<p>&copy; 2025 Uncivil War. All rights reserved.</p>
			<div class="social-links">
				<a href="#" aria-label="Spotify">🎵</a>
				<a href="#" aria-label="YouTube">📺</a>
				<a href="#" aria-label="Instagram">📷</a>
			</div>
		</div>
	</footer>
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

	.nav-links a {
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		position: relative;
		padding: 0.5rem 0;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-accent-light);
		transition: width 0.3s ease;
	}

	.nav-links a:hover::after,
	.nav-links a.active::after {
		width: 100%;
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
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.social-links {
		display: flex;
		gap: 1.5rem;
		font-size: 1.5rem;
	}

	.social-links a {
		transition: transform 0.3s ease;
	}

	.social-links a:hover {
		transform: scale(1.2);
	}

	@media (max-width: 768px) {
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
		}

		.nav-links.open {
			right: 0;
		}

		.footer-content {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}
	}
</style>
