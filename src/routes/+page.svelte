<script lang="ts">
	import { onMount } from 'svelte';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>Uncivil War - Wars of the Roses</title>
	<meta name="description" content="Wars of the Roses - A musical journey through medieval history by Uncivil War" />
</svelte:head>

<div class="home-container">
	<section class="hero" class:loaded>
		<div class="hero-background">
			<div class="rose-pattern"></div>
		</div>

		<div class="hero-content">
			<div class="album-artwork">
				<div class="artwork-frame">
					<img
						src="/images/album-cover.jpg"
						alt="Wars of the Roses Album Cover"
						onload={() => loaded = true}
					/>
					<div class="artwork-glow"></div>
				</div>
			</div>

			<div class="hero-text">
				<p class="artist-name">Uncivil War</p>
				<h1 class="album-title">Wars of the Roses</h1>
				<p class="album-subtitle">A Concept Album • 21 Songs</p>
				<p class="album-description">
					Experience England's bloodiest civil war through music. This concept album tells the complete story of the Wars of the Roses (1455-1487) — the brutal 30-year conflict between the House of Lancaster and the House of York that tore medieval England apart and ended with the rise of the Tudor dynasty.
				</p>
				<div class="cta-buttons">
					<a href="/songs" class="btn btn-primary">Listen to the Songs</a>
					<a href="/encyclopedia" class="btn btn-secondary">Explore the Encyclopedia</a>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.home-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.hero {
		position: relative;
		min-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		overflow: hidden;
		opacity: 0;
		transform: translateY(30px);
		transition: all 1s ease-out;
	}

	.hero.loaded {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}

	.rose-pattern {
		width: 100%;
		height: 100%;
		background:
			radial-gradient(circle at 20% 30%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
		animation: pulse 8s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 0.5; }
		50% { opacity: 1; }
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		max-width: 1200px;
	}

	.album-artwork {
		perspective: 1000px;
	}

	.artwork-frame {
		position: relative;
		width: 100%;
		max-width: 500px;
		aspect-ratio: 1;
		margin: 0 auto;
		transform-style: preserve-3d;
		transition: transform 0.6s ease;
	}

	.artwork-frame:hover {
		transform: rotateY(5deg) rotateX(-5deg);
	}

	.artwork-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
		border: 3px solid var(--color-gold);
		box-shadow:
			0 10px 50px rgba(139, 0, 0, 0.5),
			0 0 100px rgba(212, 175, 55, 0.2);
	}

	.artwork-glow {
		position: absolute;
		top: -20px;
		left: -20px;
		right: -20px;
		bottom: -20px;
		background: radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent 70%);
		border-radius: 8px;
		z-index: -1;
		animation: glow 3s ease-in-out infinite;
	}

	.hero-text {
		animation: slideIn 1s ease-out 0.3s backwards;
	}

	.artist-name {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-accent-light);
		margin-bottom: 0.5rem;
	}

	.album-title {
		font-size: 4rem;
		margin-bottom: 0.5rem;
		line-height: 1.1;
		text-shadow: 2px 2px 10px rgba(139, 0, 0, 0.5);
	}

	.album-subtitle {
		font-size: 1.5rem;
		font-weight: 500;
		color: var(--color-gold);
		margin-bottom: 1.5rem;
	}

	.album-description {
		font-size: 1.3rem;
		font-weight: 400;
		line-height: 1.9;
		margin-bottom: 2rem;
		color: var(--color-text);
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn {
		padding: 1rem 2rem;
		font-size: 1.1rem;
		font-weight: 600;
		border-radius: 4px;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		cursor: pointer;
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		color: var(--color-text);
		border: 2px solid transparent;
	}

	.btn-primary:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(139, 0, 0, 0.5);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-gold);
		border: 2px solid var(--color-gold);
	}

	.btn-secondary:hover {
		background: var(--color-gold);
		color: var(--color-bg);
		transform: translateY(-3px);
	}

	@media (max-width: 768px) {
		.hero-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.artist-name {
			font-size: 1.1rem;
		}

		.album-title {
			font-size: 2.5rem;
		}

		.album-subtitle {
			font-size: 1.3rem;
		}

		.album-description {
			font-size: 1.15rem;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.btn {
			width: 100%;
		}
	}
</style>
