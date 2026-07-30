<script lang="ts">
	import Section from '$lib/components/ui/Section.svelte';
	import Project from '$lib/components/ui/Project.svelte';
	import type { Project as ProjectType } from '$lib/data/projects';
	import { projects } from '$lib/data/projects';
	import ProjectModal from '$lib/components/ui/ProjectModal.svelte';

	let selectedProject: ProjectType | null = $state(null);
	const handleProjectClick = (project: ProjectType) => (selectedProject = project);
	const handleProjectModalClose = () => (selectedProject = null);
</script>

<Section id="projects" number="02." title="selected projects">
	{#snippet rightContent()}
		<a
			href="https://github.com/andrew-hayworth22"
			target="_blank"
			class="font-mono text-sm text-muted-2 hover:text-mint">all repos ↗</a
		>
	{/snippet}
	<div class="grid grid-cols-2 gap-5 max-[720px]:grid-cols-1">
		{#each projects as project (project.title)}
			<Project onclick={() => handleProjectClick(project)} {project} />
		{/each}
	</div>
</Section>

{#if selectedProject != null}
	<ProjectModal project={selectedProject} onClose={handleProjectModalClose} />
{/if}
