<script lang="ts">
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();
</script>

<a
	href={project.githubURL}
	target="_blank"
	data-reveal
	class="block translate-y-1.5 rounded-2xl border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1 hover:border-mint max-[720px]:p-6"
>
	<div class="flex items-center justify-between">
		<div class="font-mono text-lg font-bold text-fg">{project.title}</div>
		<span class="font-mono text-xs text-mint">repo →</span>
	</div>
	<p class="mt-3.5 mb-4.5 text-base leading-relaxed text-muted-3">
		{project.description}
	</p>
	<div class="flex flex-wrap gap-2">
		{#each project.tags as tag (tag)}
			<span
				class="rounded-sm border border-line-3 bg-ink px-2.5 py-1.25 font-mono text-xs text-muted-2"
				>{tag}</span
			>
		{/each}
	</div>
</a>
