<script lang="ts">
	import { page } from '$app/stores';
	import { language, currentTranslations } from '$lib/i18n';
	import type { LayoutData } from './$types';

	let { data, children } = $props<{ data: LayoutData; children: any }>();

	const album = $derived(data.album);
	const albumTitle = $derived($language === 'de' ? album.titleDe : album.title);

	// For Wars of the Roses, link to the existing encyclopedia
	const encyclopediaUrl = $derived(album.slug === 'wars-of-the-roses' ? '/encyclopedia' : `/albums/${album.slug}/encyclopedia`);
</script>

<div class="album-container">
	<nav class="album-nav">
		<div class="album-nav-brand">
			<a href="/albums/{album.slug}" class="album-brand-link">
				<span class="album-brand-title">{albumTitle}</span>
			</a>
		</div>
		<ul class="album-nav-links">
			<li>
				<a
					href="/albums/{album.slug}"
					class:active={$page.url.pathname === `/albums/${album.slug}`}
				>
					{$currentTranslations.nav.home}
				</a>
			</li>
			<li>
				<a
					href="/albums/{album.slug}/songs"
					class:active={$page.url.pathname.includes('/songs')}
				>
					{$currentTranslations.nav.songs}
				</a>
			</li>
			{#if album.hasEncyclopedia}
				<li>
					<a
						href={encyclopediaUrl}
						class:active={$page.url.pathname.includes('/encyclopedia')}
					>
						{$currentTranslations.nav.encyclopedia}
					</a>
				</li>
			{/if}
			<li>
				<a
					href="/albums/{album.slug}/download"
					class:active={$page.url.pathname.includes('/download')}
				>
					{$currentTranslations.nav.download}
				</a>
			</li>
		</ul>
	</nav>

	{@render children()}
</div>

<style>
	.album-container {
		min-height: 100%;
	}

	.album-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background: rgba(26, 26, 26, 0.8);
		border-bottom: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 8px;
		margin-bottom: 2rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.album-brand-link {
		text-decoration: none;
	}

	.album-brand-title {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--color-gold);
		letter-spacing: 0.05em;
	}

	.album-nav-links {
		display: flex;
		gap: 1.5rem;
		list-style: none;
		flex-wrap: wrap;
	}

	.album-nav-links a {
		font-size: 1rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0.5rem 0;
		position: relative;
		color: var(--color-text-secondary);
		transition: color 0.2s ease;
	}

	.album-nav-links a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-gold);
		transition: width 0.3s ease;
	}

	.album-nav-links a:hover,
	.album-nav-links a.active {
		color: var(--color-gold);
	}

	.album-nav-links a:hover::after,
	.album-nav-links a.active::after {
		width: 100%;
	}

	@media (max-width: 768px) {
		.album-nav {
			flex-direction: column;
			text-align: center;
			padding: 1rem;
		}

		.album-nav-links {
			justify-content: center;
		}
	}
</style>
