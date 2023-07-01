<script lang="ts">
	import { Toast } from '@skeletonlabs/skeleton';
	import { atob, btoa } from 'abab';
	import CopyableTextbox from '../../components/CopyableTextbox/CopyableTextbox.svelte';

	let encoded = '';
	let decoded = '';
	let encodedErroring = false;
	let decodedErroring = false;

	function onDecodedChange(event: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) {
		const input = event.currentTarget.value;
		encodedErroring = false;
		decodedErroring = false;

		if (!input) {
			encoded = '';
			decoded = '';
			return;
		}

		decoded = input;
		encoded = btoa(input) || 'Invalid input';

		if (btoa(input) === null) {
			decodedErroring = true;
		}
	}

	function onEncodedChange(event: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) {
		const input = event.currentTarget.value;
		encodedErroring = false;
		decodedErroring = false;

		if (!input) {
			encoded = '';
			decoded = '';
			return;
		}

		encoded = input;
		decoded = atob(input) || 'Invalid input';

		if (atob(input) === null) {
			encodedErroring = true;
		}
	}
</script>

<div class="grid grid-cols-2 h-full gap-8 p-8 items-center">
	<CopyableTextbox
		title={'Base64 Decoded'}
		value={decoded}
		erroring={decodedErroring}
		onChange={onDecodedChange}
	/>
	<CopyableTextbox
		title={'Base64 Encoded'}
		value={encoded}
		erroring={encodedErroring}
		onChange={onEncodedChange}
	/>
	<Toast />
</div>
