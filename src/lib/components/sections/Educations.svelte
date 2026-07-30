<script>
	import Section from '$lib/components/ui/Section.svelte';
	import { educations } from '$lib/data/education';
    import Education from '$lib/components/ui/Education.svelte';
</script>

<Section id="education" number="03." title="education">
	{#each educations as education (education.title)}
		<Education {education} />
	{/each}
</Section>
