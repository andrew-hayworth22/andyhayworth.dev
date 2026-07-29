<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { tick } from 'svelte';
	import { configured, enabled, gtag, measurementId } from '$lib/analytics';

	function trackPageView() {
		gtag('event', 'page_view', {
			page_location: page.url.href,
			page_title: document.title
		});
	}

	if (enabled) {
		gtag('js', new Date());
		gtag('config', measurementId, { send_page_view: false });

		trackPageView();

		afterNavigate(async (navigation) => {
			if (navigation.type === 'enter') return;

			// Let the new page's <svelte:head><title> flush before reading it.
			await tick();

			trackPageView();
		});
	}
</script>

<svelte:head>
	{#if configured}
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
	{/if}
</svelte:head>
