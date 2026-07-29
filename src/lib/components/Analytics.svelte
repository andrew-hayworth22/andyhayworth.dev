<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { enabled, gtag, measurementId } from '$lib/analytics';

	if (enabled) {
		gtag('js', new Date());
		gtag('config', measurementId, { send_page_view: false, transport_type: 'image' });

		gtag('event', 'page_view', {
			page_path: page.url.pathname + page.url.search
		});

		afterNavigate((navigation) => {
			if (navigation.type === 'enter') return;

			gtag('event', 'page_view', {
				page_path: page.url.pathname + page.url.search
			});
		});
	}
</script>

<svelte:head>
	{#if enabled}
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
	{/if}
</svelte:head>
