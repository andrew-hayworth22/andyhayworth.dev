<script lang="ts">
	import './layout.css';
	import '@fontsource-variable/space-grotesk';
	import '@fontsource-variable/jetbrains-mono';
	import favicon from '$lib/assets/favicon.svg';
	import spaceGroteskFont from '@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2?url';
	import jetbrainsMonoFont from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" href={spaceGroteskFont} as="font" type="font/woff2" crossorigin="anonymous" />
	<link
		rel="preload"
		href={jetbrainsMonoFont}
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>
{@render children()}
