<script lang="ts">
	import { linkifyText, type TextSegment } from '$lib/utils/linkify';

	interface Props {
		text: string;
	}

	let { text }: Props = $props();

	const segments: TextSegment[] = $derived(linkifyText(text));
</script>

{#each segments as segment}
	{#if segment.isLink && segment.linkId}
		<a href="/encyclopedia/{segment.linkId}" class="encyclopedia-link">{segment.text}</a>
	{:else}
		{segment.text}
	{/if}
{/each}

<style>
	.encyclopedia-link {
		color: var(--color-gold);
		text-decoration: none;
		border-bottom: 1px dotted var(--color-gold);
		transition: all 0.2s ease;
	}

	.encyclopedia-link:hover {
		color: var(--color-accent-light);
		border-bottom-color: var(--color-accent-light);
		border-bottom-style: solid;
	}
</style>
