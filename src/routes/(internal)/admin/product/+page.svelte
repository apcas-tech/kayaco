<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input';
	import * as Form from '$lib/components/ui/form';
	import { productSchema } from '$lib/zod-schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient, zod } from 'sveltekit-superforms/adapters';
	import Label from '$lib/components/ui/label/label.svelte';
	import { LoaderCircle } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { defaults } from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button';
	import { buttonVariants } from '$lib/components/ui/button/index.js';

	let open = $state(false);

	const form = superForm(defaults(zod(productSchema)), {
		validators: zodClient(productSchema),
		resetForm: false,
		async onResult({ result }) {
			if (result.type === 'failure') {
				toast.error('Failed to create product.');
			} else if (result.type === 'success') {
				toast.success('Product created successfully!');
				open = false;
			}
		}
	});

	const { form: formData, enhance, submitting, submit } = form;
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Add Product</Dialog.Trigger>

	<Dialog.Content class="space-y-4">
		<Dialog.Header>
			<Dialog.Title>Add Product</Dialog.Title>
			<Dialog.Description>Enter the product info below</Dialog.Description>
		</Dialog.Header>

		<form
			method="POST"
			action="?/product"
			use:enhance
			class="w-full gap-y-12 space-y-6"
			enctype="multipart/form-data"
		>
			<div class="space-y-4">
				<Form.Field {form} name="description">
					<Form.Control>
						{#snippet children({ props })}
							<Label>Product Name</Label>
							<Input
								placeholder="Enter Product Description"
								type="text"
								{...props}
								bind:value={$formData.description}
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="image_url">
					<Form.Control>
						{#snippet children({ props })}
							<Label>Product Image</Label>
							<Input
								placeholder="Enter Product Image"
								type="text"
								{...props}
								bind:value={$formData.image_url}
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="product_name">
					<Form.Control>
						{#snippet children({ props })}
							<Label>Product Name</Label>
							<Input
								placeholder="Enter Product Name"
								type="text"
								{...props}
								bind:value={$formData.product_name}
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="price">
					<Form.Control>
						{#snippet children({ props })}
							<Label>Product Price</Label>
							<Input
								placeholder="Enter Product Price"
								type="number"
								{...props}
								bind:value={$formData.price}
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="quantity">
					<Form.Control>
						{#snippet children({ props })}
							<Label>Product Quantity</Label>
							<Input
								placeholder="Enter Product Quantity"
								type="number"
								{...props}
								bind:value={$formData.quantity}
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</div>
			<Dialog.Footer class="mt-8 gap-4 md:gap-0">
				<Button variant="outline" disabled={$submitting} onclick={() => (open = false)}>
					Cancel
				</Button>
				<Form.Button class=" bg-primary" disabled={$submitting} onclick={() => submit()}>
					{#if $submitting}
						<LoaderCircle class="mr-1 size-4 animate-spin" /> Creating Product...
					{:else}
						Create Product
					{/if}
				</Form.Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
