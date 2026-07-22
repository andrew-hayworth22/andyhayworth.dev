<script lang="ts">
	import BackgroundGradient from '$lib/components/BackgroundGradient.svelte';
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Section from '$lib/components/Section.svelte';
	import Project from '$lib/components/Project.svelte';
	import { onMount } from 'svelte';
	import { jobs } from '$lib/data/experience';
	import { projects } from '$lib/data/projects';
	import Job from '$lib/components/Job.svelte';

	const HIDDEN_CLASSES = ['opacity-0', 'translate-y-[22px]'];

	onMount(() => {
		const toReveal = Array.from(document.querySelectorAll('[data-reveal]'));
		if (!window.IntersectionObserver) {
			toReveal.forEach((e) => e.classList.remove(...HIDDEN_CLASSES));
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((en) => {
					if (en.isIntersecting) {
						en.target.classList.remove(...HIDDEN_CLASSES);
						observer.unobserve(en.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
		);
		toReveal.forEach((e) => observer.observe(e));
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Andy Hayworth</title>
</svelte:head>

<div class="relative min-h-screen overflow-x-clip bg-ink font-display text-fg">
	<BackgroundGradient />

	<Nav />

	<div id="top" class="relative z-1 mx-auto max-w-270 px-10 max-[720px]:px-5.5">
		<Header />

		<Section id="work" number="01." title="experience">
			{#snippet rightContent()}
				<span class="font-mono text-[13px] text-muted-1">5+ years</span>
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
					class="font-mono text-sm text-muted-1 hover:text-mint">all repos ↗</a
				>
			{/snippet}
			<div class="grid grid-cols-2 gap-5 max-[720px]:grid-cols-1">
				{#each projects as project (project.title)}
					<Project {project} />
				{/each}
			</div>
		</Section>

		<!-- ================= SKILLS ================= -->
		<section id="skills" class="border-t border-line-1 py-16 max-[720px]:py-12">
			<h2
				data-reveal
				class="m-0 mb-12 translate-y-[22px] font-display text-[40px] font-bold tracking-[-0.02em] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
			>
				<span class="font-mono text-2xl text-mint">03.</span> Toolbox
			</h2>

			<div class="grid grid-cols-3 gap-5 max-[820px]:grid-cols-2 max-[720px]:grid-cols-1">
				<div
					data-reveal
					class="translate-y-[22px] rounded-[14px] border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:p-6"
				>
					<div class="mb-[18px] font-mono text-[13px] text-mint"># languages</div>
					<div class="flex flex-wrap gap-[9px]">
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>Go</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>TypeScript</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>PHP</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>Python</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>SQL</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>C#</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>C/C++</span
						>
					</div>
				</div>
				<div
					data-reveal
					class="translate-y-[22px] rounded-[14px] border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:p-6"
				>
					<div class="mb-[18px] font-mono text-[13px] text-mint"># frameworks</div>
					<div class="flex flex-wrap gap-[9px]">
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>Laravel</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>Vue.js</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>React</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>OutSystems</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>Tailwind</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>.NET Core</span
						>
					</div>
				</div>
				<div
					data-reveal
					class="translate-y-[22px] rounded-[14px] border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:p-6"
				>
					<div class="mb-[18px] font-mono text-[13px] text-mint"># tools &amp; cloud</div>
					<div class="flex flex-wrap gap-[9px]">
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>AWS</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>Git</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>Docker</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>Azure</span
						>
						<span
							class="rounded-md border border-line-3 bg-ink px-[13px] py-2 font-mono text-[13px] text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
							>Jira</span
						>
					</div>
				</div>
			</div>

			<div
				data-reveal
				class="mt-5 flex translate-y-[22px] items-start gap-4 rounded-[14px] border border-line-2 bg-surface px-8 py-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
			>
				<div class="pt-0.5 font-mono text-[13px] whitespace-nowrap text-mint"># certs</div>
				<div class="text-[15px] leading-[1.6] text-muted-3">
					OutSystems — Associate Developer (O11 &amp; ODC), Architecture Specialist (O11), Mobile
					Developer Specialist (O11 &amp; ODC), Front-end Developer Specialist (O11 &amp; ODC), Web
					Developer Specialist (O11).
				</div>
			</div>
		</section>

		<!-- ================= EDUCATION ================= -->
		<section id="education" class="border-t border-line-1 py-16 max-[720px]:py-12">
			<h2
				data-reveal
				class="m-0 mb-12 translate-y-[22px] font-display text-[40px] font-bold tracking-[-0.02em] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
			>
				<span class="font-mono text-2xl text-mint">04.</span> Education
			</h2>

			<div
				data-reveal
				class="mb-5 translate-y-[22px] rounded-[14px] border border-line-2 bg-surface px-9 py-8 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:px-6"
			>
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<div class="font-display text-[22px] font-bold">
						M.S. Computer Science <span class="text-[17px] font-normal text-muted-2"
							>— Computational Data Science</span
						>
					</div>
					<div class="font-mono text-[13px] text-mint">Aug 2023 — Present</div>
				</div>
				<div class="mt-1.5 font-mono text-sm text-muted-2">Kent State University · Kent, OH</div>
				<p class="mt-4 text-[15px] leading-[1.6] text-muted-3">
					Coursework: advanced database system design, advanced operating systems, data mining
					techniques, artificial intelligence.
				</p>
			</div>

			<div
				data-reveal
				class="translate-y-[22px] rounded-[14px] border border-line-2 bg-surface px-9 py-8 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:px-6"
			>
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<div class="font-display text-[22px] font-bold">
						B.S. Computer Science <span class="text-[17px] font-normal text-muted-2"
							>— Game Programming</span
						>
					</div>
					<div class="font-mono text-[13px] text-mint">Aug 2019 — May 2022</div>
				</div>
				<div class="mt-1.5 font-mono text-sm text-muted-2">
					Kent State University · Kent, OH · summa cum laude, 3.97 GPA
				</div>
				<p class="mt-4 text-[15px] leading-[1.6] text-muted-3">
					Secretary & lead programmer for the Animation and Game Design Club. Coursework in data
					structures, algorithms, design patterns, and software engineering.
				</p>
			</div>
		</section>

		<!-- ================= CONTACT ================= -->
		<section id="contact" class="border-t border-line-1 pt-24 pb-10">
			<div
				data-reveal
				class="translate-y-[22px] text-center opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
			>
				<div class="mb-4 font-mono text-sm text-muted-1">
					<span class="text-mint">$</span> ./say-hello.sh
				</div>
				<h2
					class="m-0 font-display text-[clamp(40px,6vw,72px)] leading-[1.02] font-bold tracking-[-0.03em]"
				>
					Let's build<br />something good.
				</h2>
				<p class="mx-auto mt-[26px] max-w-[520px] text-lg leading-[1.6] text-muted-3">
					Open to senior/staff roles, freelance projects, and the occasional impossible problem.
					Fastest way to reach me is email.
				</p>
				<div class="mt-10 flex flex-wrap justify-center gap-3">
					<a
						href="mailto:andy.hayworth@outlook.com"
						class="rounded-[7px] bg-mint px-[30px] py-4 font-mono text-[14px] font-bold text-ink transition-[filter] duration-200 hover:brightness-110"
						>andy.hayworth@outlook.com</a
					>
					<a
						href="tel:2342949055"
						class="rounded-[7px] border border-line-4 px-6 py-4 font-mono text-[14px] text-muted-5 transition-colors duration-200 hover:border-mint"
						>234·294·9055</a
					>
				</div>
				<div class="mt-8 flex justify-center gap-6 font-mono text-[13px] text-muted-6">
					<a href="https://github.com/andrew-hayworth22" target="_blank" class="hover:text-mint"
						>github ↗</a
					>
					<a
						href="https://www.linkedin.com/in/michael-hayworth-71a1791a1/"
						target="_blank"
						class="hover:text-mint">linkedin ↗</a
					>
					<a
						href="https://michael-hayworth.com/storage/MichaelHayworth_Resume.pdf"
						target="_blank"
						class="hover:text-mint">résumé ↗</a
					>
				</div>
			</div>
		</section>

		<footer
			class="flex flex-wrap justify-between gap-[10px] border-t border-line-1 pt-10 pb-[60px] font-mono text-xs text-muted-7"
		>
			<span>© 2026 Michael Andrew Hayworth</span>
			<span>built with a little too much care · exit 0</span>
		</footer>
	</div>
</div>
