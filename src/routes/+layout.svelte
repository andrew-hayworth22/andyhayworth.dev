<script lang="ts">
	import './layout.css';
	import '@fontsource-variable/space-grotesk';
	import '@fontsource-variable/jetbrains-mono';
	import spaceGroteskFont from '@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2?url';
	import jetbrainsMonoFont from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url';
	import Analytics from '$lib/components/Analytics.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	<link rel="icon" href="/favicon.ico" sizes="48x48" />
	<link rel="preload" href={spaceGroteskFont} as="font" type="font/woff2" crossorigin="anonymous" />
	<link
		rel="preload"
		href={jetbrainsMonoFont}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>
<Analytics />
{@render children()}
