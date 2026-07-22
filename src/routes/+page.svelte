<script lang="ts">
	import BackgroundGradient from '$lib/components/BackgroundGradient.svelte';
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Project from '$lib/components/Project.svelte';
	import { jobs } from '$lib/data/experience';
	import { projects } from '$lib/data/projects';
	import { educations } from '$lib/data/education';
	import Job from '$lib/components/Job.svelte';
	import Education from '$lib/components/Education.svelte';
	import SkillBox from '$lib/components/SkillBox.svelte';
	import { frameworks, languages, tools } from '$lib/data/skills';
	import Certifications from '$lib/components/Certifications.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>andy hayworth</title>
	<meta
		name="description"
		content="andy hayworth - a senior full-stack software engineer that builds fast, secure, well-architected software solutions. come check out some of my work!"
	/>
</svelte:head>

<div class="relative min-h-screen overflow-x-clip bg-ink font-display text-fg">
	<BackgroundGradient />

	<Nav />

	<main id="top" class="relative z-1 mx-auto max-w-270 px-10 max-[720px]:px-5.5">
		<Header />

		<Section id="work" number="01." title="experience">
			{#snippet rightContent()}
				<span class="font-mono text-[13px] text-muted-2">5+ years</span>
			{/snippet}

			{#each jobs as job, index (index)}
				<Job {job} />
			{/each}
		</Section>

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
					<Project {project} />
				{/each}
			</div>
		</Section>

		<Section id="education" number="03." title="education">
			{#each educations as education (education.title)}
				<Education {education} />
			{/each}
		</Section>

		<Section id="skills" number="04." title="skills">
			<div class="grid grid-cols-3 gap-5 max-[820px]:grid-cols-2 max-[720px]:grid-cols-1">
				<SkillBox title="# languages" items={languages} />
				<SkillBox title="# frameworks" items={frameworks} />
				<SkillBox title="# other tools & goodies" items={tools} />
			</div>
			<Certifications />
		</Section>

		<Contact />

		<Footer />
	</main>
</div>
