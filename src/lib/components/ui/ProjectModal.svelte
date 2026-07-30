<script lang="ts">
	import { onMount } from 'svelte';
	import { gtag } from '$lib/analytics';
	import type { Project } from '$lib/data/projects';
	import Modal from '$lib/components/ui/Modal.svelte';

	let { project, onClose }: { project: Project; onClose: () => void } = $props();

	onMount(() => {
		gtag('event', 'view_project', { project_id: project.title });
	});
</script>

<Modal title={project.title + '/README.md'} {onClose}>
	<div class="mb-2.5 font-mono text-[13px] text-mint">$ cat {project.title}/README.md</div>
	<h3 id="project-modal-title" class="m-0 font-display text-3xl font-bold tracking-tight text-fg">
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
</Modal>
