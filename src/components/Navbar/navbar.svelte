<script lang="ts">
	import { AppRail, AppRailAnchor, AppRailTile, LightSwitch } from '@skeletonlabs/skeleton';
	import IconHome from '~icons/octicon/home-24';

	import { page } from '$app/stores';
</script>

<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor selected={$page.url.pathname === '/'} href="/">
			<IconHome class="w-full h-7" />
		</AppRailAnchor>
	</svelte:fragment>
	<AppRailAnchor selected={$page.url.pathname === '/base64'} href="/base64">Base64</AppRailAnchor>
	<svelte:fragment slot="trail">
		<AppRailAnchor hover="">
			<svelte:fragment slot="lead"><LightSwitch /></svelte:fragment>
		</AppRailAnchor>
	</svelte:fragment>
</AppRail>
