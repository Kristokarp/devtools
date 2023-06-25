<script lang="ts">
	import { clipboard } from '@skeletonlabs/skeleton';
	import IconCopy from '~icons/bx/copy';
	import { atob, btoa } from 'abab';
	let encoded = '';
	let decoded = '';

	function onDecodedChange(event: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) {
		const input = event.currentTarget.value;

		if (!input) {
			encoded = '';
			decoded = '';
			return;
		}

		decoded = input;
		encoded = btoa(input) || 'Invalid input';
	}

	function onEncodedChange(event: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) {
		const input = event.currentTarget.value;

		if (!input) {
			encoded = '';
			decoded = '';
			return;
		}

		encoded = input;
		decoded = atob(input) || 'Invalid input';
	}
</script>

<div class="grid grid-cols-2 h-full gap-8 p-8 items-center">
	<label class="flex flex-col gap-2 h-full">
		<div class="flex justify-between">
			<span class="text-lg">Base64 Decoded </span>
			<button type="button" class="btn-icon btn-icon-sm variant-filled" use:clipboard={decoded}
				><IconCopy /></button
			>
		</div>

		<textarea
			class="textarea h-full resize-none"
			placeholder="Decoded value"
			value={decoded}
			on:input={onDecodedChange}
		/>
	</label>

	<label class="flex flex-col gap-2 h-full">
		<div class="flex justify-between">
			<span class="text-lg">Base64 Encoded </span>
			<button type="button" class="btn-icon btn-icon-sm variant-filled" use:clipboard={encoded}
				><IconCopy /></button
			>
		</div>
		<textarea
			class="textarea h-full resize-none"
			placeholder="Encoded value"
			value={encoded}
			on:input={onEncodedChange}
		/>
	</label>
</div>
