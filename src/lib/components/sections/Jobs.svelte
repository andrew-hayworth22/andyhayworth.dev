<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import { jobs } from '$lib/data/experience';
	import Job from '$lib/components/ui/Job.svelte';
</script>

<Section id="work" number="01." title="experience">
	{#snippet rightContent()}
		<span class="font-mono text-[13px] text-muted-2">5+ years</span>
	{/snippet}

	{#each jobs as job, index (index)}
		<Job {job} />
	{/each}
</Section>
