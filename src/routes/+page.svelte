<script lang="ts">
	import BackgroundGradient from '$lib/components/ui/BackgroundGradient.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Jobs from '$lib/components/sections/Jobs.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Educations from '$lib/components/sections/Educations.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
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
		<Hero />
		<Jobs />
		<Projects />
		<Educations />
		<Skills />
		<Contact />
		<Footer />
	</main>
</div>
