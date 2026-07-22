<script lang="ts">
	import { onMount } from 'svelte';

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
	<!-- ambient grid glow -->
	<div
		class="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(900px_600px_at_80%_-5%,oklch(0.82_0.16_150/0.10),transparent_60%)]"
	></div>

	<!-- ================= NAV ================= -->
	<nav class="sticky top-0 z-50 border-b border-line-1 bg-ink/72 backdrop-blur-md">
		<div
			class="mx-auto flex max-w-[1080px] items-center justify-between px-10 py-[18px] max-[720px]:px-[22px] max-[720px]:py-[14px] max-[480px]:flex-wrap max-[480px]:gap-y-2"
		>
			<a href="#top" class="font-mono text-[15px] font-bold text-mint max-[480px]:text-[13px]">
				andy@hayworth<span class="text-muted-1">:~$</span>
			</a>
			<div
				class="flex gap-[30px] font-mono text-[13px] text-muted-2 max-[720px]:flex-wrap max-[720px]:justify-end max-[720px]:gap-[14px] max-[720px]:text-[12px] max-[480px]:basis-full max-[480px]:justify-start max-[480px]:gap-3 max-[480px]:text-[11px]"
			>
				<a href="#work" class="hover:text-mint">work</a>
				<a href="#projects" class="hover:text-mint">projects</a>
				<a href="#skills" class="hover:text-mint">skills</a>
				<a href="#education" class="hover:text-mint">edu</a>
				<a href="#contact" class="text-mint hover:text-mint">contact</a>
			</div>
		</div>
	</nav>

	<div id="top" class="relative z-[1] mx-auto max-w-[1080px] px-10 max-[720px]:px-[22px]">
		<!-- ================= HERO ================= -->
		<header class="pt-[120px] pb-[100px]">
			<div class="mb-[14px] font-mono text-[15px] text-muted-1">
				<span class="text-mint">$</span> whoami
			</div>
			<h1
				class="m-0 font-display text-[clamp(52px,9vw,104px)] leading-[0.98] font-bold tracking-[-0.035em]"
			>
				Andy Hayworth<span
					class="ml-[14px] inline-block h-[clamp(42px,7vw,82px)] w-[clamp(20px,3.5vw,40px)] translate-y-[8px] animate-blink bg-mint"
				></span>
			</h1>
			<div
				class="mt-[34px] max-w-[760px] font-mono text-[clamp(15px,2vw,19px)] leading-[1.85] text-muted-3"
			>
				<div>
					<span class="text-muted-1">&gt;</span> senior_engineer
					<span class="text-mint">--stack</span>=go,php,typescript,outsystems
				</div>
				<div>
					<span class="text-muted-1">&gt;</span> shipping to
					<span class="font-medium text-fg">1M+</span> monthly users. leads teams, architects microservices,
				</div>
				<div>
					<span class="text-muted-1">&gt;</span> and occasionally writes a programming language for the
					fun of it.
				</div>
			</div>
			<div class="mt-11 flex flex-wrap gap-3">
				<a
					href="#work"
					class="rounded-[7px] bg-mint px-[26px] py-[15px] font-mono text-[14px] font-bold text-ink transition-[filter] duration-200 hover:brightness-110"
					>./view-work.sh</a
				>
				<a
					href="https://michael-hayworth.com/storage/MichaelHayworth_Resume.pdf"
					target="_blank"
					class="rounded-[7px] border border-line-4 px-[26px] py-[15px] font-mono text-[14px] text-muted-5 transition-colors duration-200 hover:border-mint"
					>cat resume.pdf ↗</a
				>
			</div>
			<div class="mt-11 flex gap-[22px] font-mono text-[13px] text-muted-6">
				<a href="https://github.com/andrew-hayworth22" target="_blank" class="hover:text-mint"
					>github ↗</a
				>
				<a
					href="https://www.linkedin.com/in/michael-hayworth-71a1791a1/"
					target="_blank"
					class="hover:text-mint">linkedin ↗</a
				>
				<a href="mailto:andy.hayworth@outlook.com" class="hover:text-mint">email ↗</a>
			</div>
		</header>

		<!-- ================= EXPERIENCE ================= -->
		<section id="work" class="border-t border-line-1 py-16 max-[720px]:py-12">
			<div
				data-reveal
				class="mb-12 flex translate-y-[22px] items-baseline justify-between opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
			>
				<h2 class="m-0 font-display text-[40px] font-bold tracking-[-0.02em]">
					<span class="font-mono text-2xl text-mint">01.</span> Experience
				</h2>
				<span class="font-mono text-[13px] text-muted-1">5+ years</span>
			</div>

			<!-- role -->
			<div
				data-reveal
				class="mb-5 translate-y-[22px] rounded-[14px] border border-line-2 bg-[linear-gradient(180deg,#14181400,#141814)] px-9 py-[34px] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:px-6"
			>
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<div class="font-display text-2xl font-bold">Senior Software Engineer</div>
					<div class="font-mono text-[13px] text-mint">Nov 2024 — Present</div>
				</div>
				<div class="mt-1.5 font-mono text-sm text-muted-2">Wodify Technologies · Remote</div>
				<ul class="m-0 mt-5 flex list-none flex-col gap-3 p-0">
					<li class="flex gap-3 text-[16px] leading-[1.55] text-muted-4">
						<span class="font-mono text-mint">›</span>Full-stack contributor driving feature
						delivery, code review, and technical decisions on a wellness platform serving 1M+
						monthly users.
					</li>
					<li class="flex gap-3 text-[16px] leading-[1.55] text-muted-4">
						<span class="font-mono text-mint">›</span>Eliminated account-impersonation
						vulnerabilities across 5+ apps by architecting a centralized JWT authentication service,
						now the platform standard for 10+ features.
					</li>
					<li class="flex gap-3 text-[16px] leading-[1.55] text-muted-4">
						<span class="font-mono text-mint">›</span>Introduced a JavaScript event library enabling
						direct component communication regardless of nesting depth — adopted platform-wide.
					</li>
					<li class="flex gap-3 text-[16px] leading-[1.55] text-muted-4">
						<span class="font-mono text-mint">›</span>Pioneered a data-fetching pattern cutting
						OutSystems request payloads by up to 8x while preserving existing loading behaviors.
					</li>
				</ul>
			</div>

			<div
				data-reveal
				class="mb-5 translate-y-[22px] rounded-[14px] border border-line-2 bg-[linear-gradient(180deg,#14181400,#141814)] px-9 py-[34px] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:px-6"
			>
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<div class="font-display text-2xl font-bold">Lead Software Engineer</div>
					<div class="font-mono text-[13px] text-mint">Nov 2023 — Nov 2024</div>
				</div>
				<div class="mt-1.5 font-mono text-sm text-muted-2">BAM Technologies · Remote</div>
				<ul class="m-0 mt-5 flex list-none flex-col gap-3 p-0">
					<li class="flex gap-3 text-[16px] leading-[1.55] text-muted-4">
						<span class="font-mono text-mint">›</span>Headed a team of engineers building an
						internal HR platform — anonymous feedback delivery & analysis, time-tracking, and talent
						management.
					</li>
					<li class="flex gap-3 text-[16px] leading-[1.55] text-muted-4">
						<span class="font-mono text-mint">›</span>Supported a CMMI Level 3 certification by
						delivering the platform in 6 months and demoing to 250+ employees.
					</li>
				</ul>
			</div>

			<div
				data-reveal
				class="mb-5 translate-y-[22px] rounded-[14px] border border-line-2 bg-[linear-gradient(180deg,#14181400,#141814)] px-9 py-[34px] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:px-6"
			>
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<div class="font-display text-2xl font-bold">Software Engineer</div>
					<div class="font-mono text-[13px] text-mint">May 2022 — Nov 2023</div>
				</div>
				<div class="mt-1.5 font-mono text-sm text-muted-2">BAM Technologies · Remote</div>
				<ul class="m-0 mt-5 flex list-none flex-col gap-3 p-0">
					<li class="flex gap-3 text-[16px] leading-[1.55] text-muted-4">
						<span class="font-mono text-mint">›</span>Built an HR platform for the U.S. Air Force
						with Scrum teams in an Agile environment on Azure DevOps.
					</li>
					<li class="flex gap-3 text-[16px] leading-[1.55] text-muted-4">
						<span class="font-mono text-mint">›</span>Spearheaded AWS integration into a .NET
						microservice architecture — S3 document storage and SQS/SNS pub-sub event processing.
					</li>
				</ul>
			</div>

			<div
				data-reveal
				class="translate-y-[22px] rounded-[14px] border border-line-2 bg-[linear-gradient(180deg,#14181400,#141814)] px-9 py-[34px] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:px-6"
			>
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<div class="font-display text-2xl font-bold">Student Applications Developer</div>
					<div class="font-mono text-[13px] text-mint">Nov 2019 — May 2022</div>
				</div>
				<div class="mt-1.5 font-mono text-sm text-muted-2">Kent State University · Kent, OH</div>
				<ul class="m-0 mt-5 flex list-none flex-col gap-3 p-0">
					<li class="flex gap-3 text-[16px] leading-[1.55] text-muted-4">
						<span class="font-mono text-mint">›</span>Built a full-stack application for remote
						research-material delivery with faculty, iterating from stakeholder demos.
					</li>
				</ul>
			</div>
		</section>

		<!-- ================= PROJECTS ================= -->
		<section id="projects" class="border-t border-line-1 py-16 max-[720px]:py-12">
			<div
				data-reveal
				class="mb-12 flex translate-y-[22px] items-baseline justify-between opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
			>
				<h2 class="m-0 font-display text-[40px] font-bold tracking-[-0.02em]">
					<span class="font-mono text-2xl text-mint">02.</span> Selected Work
				</h2>
				<a
					href="https://github.com/andrew-hayworth22"
					target="_blank"
					class="font-mono text-[13px] text-muted-1 hover:text-mint">all repos ↗</a
				>
			</div>

			<div class="grid grid-cols-2 gap-5 max-[720px]:grid-cols-1">
				<a
					href="https://github.com/andrew-hayworth22"
					target="_blank"
					data-reveal
					class="block translate-y-[22px] rounded-[14px] border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1 hover:border-mint max-[720px]:p-6"
				>
					<div class="flex items-center justify-between">
						<div class="font-mono text-lg font-bold text-fg">wodify-go</div>
						<span class="font-mono text-[11px] text-mint">↗</span>
					</div>
					<p class="mt-[14px] mb-[18px] text-[15px] leading-[1.55] text-muted-3">
						A zero-dependency, idiomatic Go SDK for the Wodify REST API — type-safe HTTP client,
						retries with exponential backoff, and a custom mock-server harness at 100% statement
						coverage.
					</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Go</span
						>
					</div>
				</a>

				<a
					href="https://github.com/andrew-hayworth22"
					target="_blank"
					data-reveal
					class="block translate-y-[22px] rounded-[14px] border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1 hover:border-mint max-[720px]:p-6"
				>
					<div class="flex items-center justify-between">
						<div class="font-mono text-lg font-bold text-fg">critiquefi</div>
						<span class="font-mono text-[11px] text-mint">↗</span>
					</div>
					<p class="mt-[14px] mb-[18px] text-[15px] leading-[1.55] text-muted-3">
						A Go API for rating & logging every kind of media. Clean domain-separated architecture,
						interface-based DI, JWT auth with refresh-token rotation, and AWS SES transactional
						email.
					</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Go</span
						>
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Docker</span
						>
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>AWS</span
						>
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Postgres</span
						>
					</div>
				</a>

				<a
					href="https://github.com/andrew-hayworth22"
					target="_blank"
					data-reveal
					class="block translate-y-[22px] rounded-[14px] border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1 hover:border-mint max-[720px]:p-6"
				>
					<div class="flex items-center justify-between">
						<div class="font-mono text-lg font-bold text-fg">swagscript</div>
						<span class="font-mono text-[11px] text-mint">↗</span>
					</div>
					<p class="mt-[14px] mb-[18px] text-[15px] leading-[1.55] text-muted-3">
						A programming language & interpreter built from scratch in Go — variables, functions,
						conditionals, and an interactive shell. Because sometimes you just want your own
						language.
					</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Go</span
						>
					</div>
				</a>

				<a
					href="https://github.com/andrew-hayworth22"
					target="_blank"
					data-reveal
					class="block translate-y-[22px] rounded-[14px] border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1 hover:border-mint max-[720px]:p-6"
				>
					<div class="flex items-center justify-between">
						<div class="font-mono text-lg font-bold text-fg">dynastatracker</div>
						<span class="font-mono text-[11px] text-mint">↗</span>
					</div>
					<p class="mt-[14px] mb-[18px] text-[15px] leading-[1.55] text-muted-3">
						Cross-season sports data tracking with a normalized multi-level data model (50+ per-game
						stats) and interactive ApexCharts visualizations over an Inertia.js SPA.
					</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Laravel</span
						>
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Vue</span
						>
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>MySQL</span
						>
					</div>
				</a>

				<a
					href="https://pypi.org/project/pylibsrcml/"
					target="_blank"
					data-reveal
					class="block translate-y-[22px] rounded-[14px] border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1 hover:border-mint max-[720px]:p-6"
				>
					<div class="flex items-center justify-between">
						<div class="font-mono text-lg font-bold text-fg">pylibsrcml</div>
						<span class="font-mono text-[11px] text-mint">↗</span>
					</div>
					<p class="mt-[14px] mb-[18px] text-[15px] leading-[1.55] text-muted-3">
						A published PyPI package wrapping the libsrcml C source-analysis tool via ctypes —
						making source-code analysis accessible to Python developers and researchers.
					</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Python</span
						>
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>C</span
						>
					</div>
				</a>

				<a
					href="https://github.com/andrew-hayworth22"
					target="_blank"
					data-reveal
					class="block translate-y-[22px] rounded-[14px] border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1 hover:border-mint max-[720px]:p-6"
				>
					<div class="flex items-center justify-between">
						<div class="font-mono text-lg font-bold text-fg">mushroom-data-mining</div>
						<span class="font-mono text-[11px] text-mint">↗</span>
					</div>
					<p class="mt-[14px] mb-[18px] text-[15px] leading-[1.55] text-muted-3">
						Trained & compared three ML models to predict mushroom edibility — 100% accuracy with a
						random forest — then shipped a Flask app for real-time predictions. Don't eat the wrong
						ones.
					</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Python</span
						>
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>scikit-learn</span
						>
						<span
							class="rounded-[5px] border border-line-3 bg-ink px-[10px] py-[5px] font-mono text-[11px] text-muted-2"
							>Flask</span
						>
					</div>
				</a>
			</div>
		</section>

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
