<script>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { autoModeWatcher, AppShell } from '@skeletonlabs/skeleton';
	import Navbar from '../components/Navbar/navbar.svelte';
</script>

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>

<AppShell>
	<AppShell>
		<svelte:fragment slot="sidebarLeft"><Navbar /></svelte:fragment>

		<slot />

		<svelte:fragment slot="pageFooter" />
	</AppShell>
</AppShell>
