<script lang="ts">
	import type { Education } from '$lib/data/education';
	import { reveal } from '$lib/actions/reveal';

	let { education }: { education: Education } = $props();
</script>

<div
	use:reveal
	class="mb-5 translate-y-5.5 rounded-2xl border border-line-2 bg-surface px-9 py-8 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:px-6 hover:border-mint"
>
	<div class="flex flex-wrap items-baseline justify-between gap-2">
		<div class="font-display text-xl font-bold">
			{education.title}
			<span class="text-base font-normal text-muted-2">- {education.subtitle}</span>
		</div>
		<div class="font-mono text-sm text-mint">{education.dates}</div>
	</div>
	<div class="mt-1.5 font-mono text-sm text-muted-2">{education.location}</div>
	<ul class="m-0 mt-5 flex list-none flex-col gap-3 p-0">
        {#each education.bullets as bullet, index (index)}
			<li class="flex gap-3 text-base leading-relaxed text-muted-4">
				<span class="font-mono text-mint">›</span>{bullet}
			</li>
        {/each}
	</ul>
</div>
