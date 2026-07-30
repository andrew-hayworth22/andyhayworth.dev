<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		id: string;
		number: string;
		title: string;
		rightContent?: Snippet;
		children: Snippet;
	}

	let { id, number, title, rightContent, children }: Props = $props();
</script>

<section {id} class="border-t border-line-1 py-16 max-[720px]:py-12">
	<div
		use:reveal
		class="mb-12 flex translate-y-5.5 items-baseline justify-between opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
	>
		<h2 class="m-0 font-display text-4xl font-bold tracking-tight">
			<span class="font-mono text-2xl text-mint">{number}</span>
			{title}
		</h2>
		{#if rightContent}
			{@render rightContent()}
		{/if}
	</div>

	{@render children()}
</section>
