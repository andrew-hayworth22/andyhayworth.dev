<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		title: string;
        children: Snippet;
		onClose: () => void;
	}

	let { title, children, onClose }: Props = $props();

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') onClose();
	}

	onMount(() => {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	onclick={(event) => {
		if (event.target === event.currentTarget) onClose();
	}}
	role="presentation"
	transition:fade={{ duration: 180 }}
	class="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto bg-[rgba(6,8,7,0.72)] px-5 py-[6vh] backdrop-blur-md"
>
	<div
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
		class="w-full max-w-180 overflow-hidden rounded-2xl border border-line-3 bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]"
	>
		<div class="flex h-10 items-center gap-2 border-b border-line-2 bg-ink px-4">
			<div class="size-2.75 rounded-full bg-[#e06c5b]"></div>
			<div class="size-2.75 rounded-full bg-[#e3bd5a]"></div>
			<div class="size-2.75 rounded-full bg-[#9bbf6d]"></div>
			<div class="ml-3 font-mono text-xs text-muted-1">{title}</div>
			<button
				onclick={onClose}
				aria-label="close"
				class="ml-auto rounded-md px-2 py-1 font-mono text-base text-muted-2 hover:bg-line-2 hover:text-fg"
			>
				✕
			</button>
		</div>

		<div class="px-10 pt-9 pb-10 max-[720px]:px-6">
            {@render children()}
        </div>
	</div>
</div>
