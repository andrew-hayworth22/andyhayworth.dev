<script>
	import { contacts } from '$lib/data/contacts';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="contact" class="border-t border-line-1 pt-24 pb-10">
	<div
		use:reveal
		class="translate-y-5.5 text-center opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
	>
		<div class="mb-4 font-mono text-sm text-muted-1">
			<span class="text-mint">$</span> ./say-hello.sh
		</div>
		<h2
			class="m-0 font-display text-[clamp(40px,6vw,72px)] leading-[1.02] font-bold tracking-[-0.03em]"
		>
			let's build<br />something awesome!
		</h2>
		<p class="mx-auto mt-6.5 max-w-130 text-lg leading-relaxed text-muted-3">
			open to senior/staff roles, freelance projects, and eveything in between. fastest way to reach
			me is email.
		</p>
		<div class="mt-10 flex flex-wrap justify-center gap-3">
			<a
				href="mailto:andy.hayworth@outlook.com"
				class="rounded-md bg-mint px-7.5 py-4 font-mono text-sm font-bold text-ink transition-[filter] duration-200 hover:brightness-110"
				>andy.hayworth@outlook.com</a
			>
			<a
				href="tel:2342949055"
				class="rounded-md border border-line-4 px-6 py-4 font-mono text-sm text-muted-5 transition-colors duration-200 hover:border-mint"
				>234·294·9055</a
			>
		</div>
		<div class="mt-8 flex justify-center gap-6 font-mono text-sm text-muted-6">
			{#each contacts as contact (contact.name)}
				<a href={contact.href} target="_blank" class="hover:text-mint">{contact.name} ↗</a>
			{/each}
		</div>
	</div>
</section>
