<script lang="ts">
	const navItems = [
		{ id: 'work', label: 'work' },
		{ id: 'projects', label: 'projects' },
		{ id: 'education', label: 'education' },
		{ id: 'skills', label: 'skills' },
		{ id: 'contact', label: 'contact' }
	];
</script>

<nav class="sticky top-0 z-50 border-b border-line-1 bg-ink/72 backdrop-blur-md">
	<div
		class="mx-auto flex max-w-270 items-center justify-between px-10 py-4.5 max-[720px]:px-5.5 max-[720px]:py-3.5 max-[480px]:flex-wrap max-[480px]:gap-y-2"
	>
		<a href="#top" class="font-mono text-[15px] font-bold text-mint max-[480px]:text-[13px]">
			andy@hayworth<span class="text-muted-1">:~$</span>
		</a>
		<div
			class="flex gap-7.5 font-mono text-[13px] text-muted-2 max-[720px]:flex-wrap max-[720px]:justify-end max-[720px]:gap-3.5 max-[720px]:text-[12px] max-[480px]:basis-full max-[480px]:justify-start max-[480px]:gap-3 max-[480px]:text-[11px]"
		>
			{#each navItems as item (item.id)}
				<a href="#{item.id}" class="hover:text-mint">{item.label}</a>
			{/each}
		</div>
	</div>
</nav>
