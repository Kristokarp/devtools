<script lang="ts">
	import { clipboard, toastStore } from '@skeletonlabs/skeleton';
	import IconCopy from '~icons/bx/copy';
	import { onCopy } from '../../actions/on-copy';

	export let onChange: (
		event: Event & { currentTarget: EventTarget & HTMLTextAreaElement }
	) => void;
	export let title: string;
	export let value = '';
	export let erroring = false;

	function handleCopyCompleted() {
		toastStore.trigger({
			message: 'Copied to clipboard!',
			timeout: 2000,
			hideDismiss: true
		});
	}
</script>

<label class="flex flex-col gap-2 h-full">
	<div class="flex justify-between">
		<span class="text-lg">{title}</span>
		<button
			type="button"
			class="btn-icon btn-icon-sm variant-filled"
			use:clipboard={value}
			use:onCopy={handleCopyCompleted}
		>
			<IconCopy />
		</button>
	</div>

	<textarea
		class="textarea h-full resize-none"
		class:input-error={erroring}
		placeholder={'...'}
		on:input={onChange}
		{value}
	/>
</label>
