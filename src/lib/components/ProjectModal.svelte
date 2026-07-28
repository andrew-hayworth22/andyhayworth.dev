<script lang="ts">
	import { gtag } from '$lib/analytics';
	import type { Project } from '$lib/data/projects';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let { project, onClose }: { project: Project; onClose: () => void } = $props();

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') onClose();
	}

	onMount(() => {
		gtag('event', 'view_project', { project_id: project.title });
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	onclick={(event) => {
		if (event.target === event.currentTarget) onClose();
	}}
	role="presentation"
    transition:fade={{ duration: 180 }}
	class="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto bg-[rgba(6,8,7,0.72)] px-5 py-[6vh] backdrop-blur-md"
>
	<div
		role="dialog"
		aria-modal="true"
		aria-labelledby="project-modal-title"
		tabindex="-1"
		class="w-full max-w-180 overflow-hidden rounded-2xl border border-line-3 bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]"
	>
		<div class="flex h-10 items-center gap-2 border-b border-line-2 bg-ink px-4">
			<div class="size-2.75 rounded-full bg-[#e06c5b]"></div>
			<div class="size-2.75 rounded-full bg-[#e3bd5a]"></div>
			<div class="size-2.75 rounded-full bg-[#9bbf6d]"></div>
			<div class="ml-3 font-mono text-xs text-muted-1">{project.title}/README.md</div>
			<button
				onclick={onClose}
				aria-label="close"
				class="ml-auto rounded-md px-2 py-1 font-mono text-base text-muted-2 hover:bg-line-2 hover:text-fg"
			>
				✕
			</button>
		</div>

		<div class="px-10 pt-9 pb-10 max-[720px]:px-6">
			<div class="mb-2.5 font-mono text-[13px] text-mint">$ cat {project.title}/README.md</div>
			<h3
				id="project-modal-title"
				class="m-0 font-display text-3xl font-bold tracking-tight text-fg"
			>
				{project.title}
			</h3>
			<p class="mt-3 mb-5.5 text-lg leading-snug text-muted-4">
				{project.tagline}
			</p>

			<div class="mb-7 flex flex-wrap gap-2">
				{#each project.tags as tag (tag)}
					<span
						class="rounded-md border border-line-3 bg-ink px-3 py-1.5 font-mono text-xs text-muted-5"
						>{tag}</span
					>
				{/each}
			</div>

			{#if project.description}
				<p class="mb-7 text-base leading-relaxed text-muted-3">
					{project.description}
				</p>
			{/if}

			{#if project.decisions.length > 0}
				<div class="mb-4 font-mono text-[13px] text-mint"># key decisions</div>
				<div class="mb-7.5 flex flex-col gap-4">
					{#each project.decisions as decision (decision.title)}
						<div class="border-l-2 border-line-3 pl-4">
							<div class="mb-1 font-display text-base font-semibold text-fg">{decision.title}</div>
							<div class="text-[15px] leading-relaxed text-muted-3">{decision.description}</div>
						</div>
					{/each}
				</div>
			{/if}

			{#if project.highlights.length > 0}
				<div class="mb-4 font-mono text-[13px] text-mint"># highlights</div>
				<ul class="m-0 mb-7.5 flex list-none flex-col gap-2.5 p-0">
					{#each project.highlights as highlight, index (index)}
						<li class="flex gap-3 text-[15px] leading-relaxed text-muted-4">
							<span class="font-mono text-mint">›</span>{highlight}
						</li>
					{/each}
				</ul>
			{/if}

			<a
				href={project.button_url}
				target="_blank"
				class="inline-block rounded-md bg-mint px-6 py-3.5 font-mono text-sm font-bold text-ink transition-[filter] hover:brightness-110"
			>
				{project.button_label} ↗
			</a>
		</div>
	</div>
</div>
