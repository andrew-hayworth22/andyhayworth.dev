<script lang="ts">
	import type { Job } from '$lib/data/experience';

	let { job }: { job: Job } = $props();
</script>

<div
	data-reveal
	class="mb-5 translate-y-5.5 rounded-2xl border border-line-2 bg-[linear-gradient(180deg,#14181400,#141814)] px-9 py-8.5 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:px-6"
>
	<div class="flex flex-wrap items-baseline justify-between gap-2">
		<div class="font-display text-2xl font-bold">{job.title}</div>
		<div class="font-mono text-[13px] text-mint">{job.dates}</div>
	</div>
	<div class="mt-1.5 font-mono text-sm text-muted-2">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={job.companyURL} target="_blank">{job.company} · {job.location}</a>
	</div>
	<ul class="m-0 mt-5 flex list-none flex-col gap-3 p-0">
		{#each job.bullets as bullet, index (index)}
			<li class="flex gap-3 text-base leading-relaxed text-muted-4">
				<span class="font-mono text-mint">›</span>{bullet}
			</li>
		{/each}
	</ul>
</div>
