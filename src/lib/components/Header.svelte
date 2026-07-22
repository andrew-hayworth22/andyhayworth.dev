<script>
	import { asset } from '$app/paths';

	const resumePath = asset('/resume.pdf');

	const contactLinks = [
		{ name: 'github', href: 'https://www.github.com/andrew-hayworth22' },
		{ name: 'linkedin', href: 'https://www.linkedin.com/in/michael-hayworth-71a1791a1/' },
		{ name: 'email', href: 'mailto:andy.hayworth@outlook.com' }
	];
</script>

<header class="pt-30 pb-25">
	<div class="mb-3.5 font-mono text-muted-1">
		<span class="text-mint">$</span> whoami
	</div>
	<h1 class="m-0 font-display text-[clamp(52px,9vw,104px)] leading-1 font-bold tracking-[-0.035em]">
		Andy Hayworth<span
			class="ml-3.5 inline-block h-[clamp(42px,7vw,82px)] w-[clamp(20px,3.5vw,40px)] translate-y-2 animate-blink bg-mint"
		></span>
	</h1>
	<div class="mt-8.5 max-w-190 font-mono text-[clamp(15px,2vw,19px)] leading-[1.85] text-muted-3">
		<div>
			<span class="text-muted-1">&gt;</span> senior_engineer
			<span class="text-mint">--stack</span>=go,typescript,outsystems
		</div>
		<div>
			<span class="text-muted-1">&gt;</span> shipping software to
			<span class="font-medium text-fg">1M+</span> monthly active users with
			<a href="https://wodify.com" target="_blank" class="text-mint underline">wodify</a>
		</div>
		<div>
			<span class="text-muted-1">&gt;</span> always hacking away at side projects that probably don't
			need built
		</div>
	</div>
	<div class="mt-11 flex flex-wrap gap-3">
		<a
			href="#work"
			class="rounded-[7px] bg-mint px-6.5 py-3.75 font-mono text-[14px] font-bold text-ink transition-[filter] duration-200 hover:brightness-110"
			>./view-work.sh</a
		>
		<a
			href={resumePath}
			target="_blank"
			class="rounded-[7px] border border-line-4 px-6.5 py-3.75 font-mono text-[14px] text-muted-5 transition-colors duration-200 hover:border-mint"
			>cat resume.pdf ↗</a
		>
	</div>
	<div class="mt-11 flex gap-5.5 font-mono text-[13px] text-muted-6">
		{#each contactLinks as link (link.name)}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={link.href} target="_blank" class="hover:text-mint">{link.name} ↗</a>
		{/each}
	</div>
</header>
