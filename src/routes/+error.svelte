<script lang="ts">
	import BackgroundGradient from '$lib/components/ui/BackgroundGradient.svelte';
</script>

<div
	class="relative flex min-h-screen items-center justify-center overflow-x-clip bg-ink px-6 py-10 font-display text-fg"
>
	<BackgroundGradient />

	<div class="relative flex max-w-140 flex-col items-start gap-6.5">
		<div class="font-mono text-sm text-muted-1"><span class="text-mint">$</span> cd /this/page</div>

		<h1
			class="m-0 font-display text-[clamp(84px,16vw,152px)] leading-none font-bold tracking-tighter"
		>
			404<span
				class="ml-3 inline-block h-[clamp(40px,7vw,64px)] w-[clamp(18px,3vw,30px)] translate-y-1 animate-blink bg-mint"
			></span>
		</h1>

		<div class="flex flex-col gap-3">
			<h2
				class="m-0 text-[clamp(26px,4vw,38px)] leading-tight font-bold tracking-tight text-balance"
			>
				This path doesn't resolve.
			</h2>
			<p class="m-0 text-base leading-relaxed text-muted-3">
				The page you're after either moved or never existed. Nothing's broken on your end.
			</p>
		</div>

		<a
			href="/"
			class="rounded-md bg-mint px-6.5 py-3.75 font-mono text-sm font-bold text-ink transition-[filter] duration-200 hover:brightness-110"
			>cd ~ · back home</a
		>
	</div>
</div>
