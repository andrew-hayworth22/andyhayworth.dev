<script>
	import { asset } from '$app/paths';
	import { contacts } from '$lib/data/contacts';
	import Headshot from './Headshot.svelte';

	const resumePath = asset('/resume.pdf');
</script>

<header
	class="grid grid-cols-[1fr_auto] items-center gap-16 pt-30 pb-25 max-[720px]:grid-cols-1 max-[720px]:gap-11 max-[720px]:pt-22 max-[720px]:pb-18"
>
	<div>
		<div class="mb-3.5 font-mono text-muted-1">
			<span class="text-mint">$</span> whoami
		</div>
		<h1
			class="m-0 font-display text-[clamp(52px,9vw,104px)] leading-none font-bold tracking-[-0.035em]"
		>
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
				<span class="text-muted-1">&gt;</span> hacking away at fun side projects that keep my brain happy
			</div>
		</div>
		<div class="mt-11 flex flex-wrap gap-3">
			<a
				href="#work"
				class="rounded-md bg-mint px-6.5 py-3.75 font-mono text-sm font-bold text-ink transition-[filter] duration-200 hover:brightness-110"
				>./view-work.sh</a
			>
			<a
				href={resumePath}
				target="_blank"
				class=" rounded-md border border-line-4 px-6.5 py-3.75 font-mono text-sm text-muted-5 transition-colors duration-200 hover:border-mint"
				>cat resume.pdf ↗</a
			>
		</div>
		<div class="mt-11 flex gap-5.5 font-mono text-[13px] text-muted-6">
			{#each contacts as contact (contact.name)}
				<a href={contact.href} target="_blank" class="hover:text-mint">{contact.name} ↗</a>
			{/each}
		</div>
	</div>
	<div
		class="max-[720px]:order-first relative w-67.5 shrink-0 justify-self-center"
	>
        <Headshot/>
	</div>
</header>
