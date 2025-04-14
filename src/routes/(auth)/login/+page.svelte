<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { zod, zodClient } from 'sveltekit-superforms/adapters';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { loginSchema } from '$lib/zod-schema';
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
	import { writable } from 'svelte/store';
	import { Eye, EyeOff } from '@lucide/svelte';

	const showPassword = writable(false);

	const form = superForm(defaults(zod(loginSchema)), {
		validators: zodClient(loginSchema),
		resetForm: false,
		onResult({ result }) {
			if (result.type === 'failure') {
				toast.error('Wrong email or password.');
			} else if (result.type === 'success') {
				toast.success('Login successful!');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="container relative mt-12 flex-col items-center justify-center lg:mt-24">
	<div class="flex h-full w-full flex-col items-center justify-center">
		<div class="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
			<form method="POST" use:enhance action="?/login">
				<div class="space-y-6 text-center">
					<div class="space-y-2">
						<div class="text-4xl font-bold">Login</div>
						<div class="text-muted-foreground">Enter your account details</div>
					</div>
					<div class="space-y-4">
						<Form.Field {form} name="email">
							<Form.Control>
								{#snippet children({ props })}
									<Input {...props} bind:value={$formData.email} placeholder="Email" />
								{/snippet}
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>

						<Form.Field {form} name="password">
							<Form.Control>
								{#snippet children({ props })}
									<div class="relative space-y-1.5">
										<div class="flex items-center">
											<Input
												{...props}
												class="w-full rounded-md bg-white/10 px-4 py-6 pr-10 text-black placeholder-white/70 transition duration-300"
												placeholder="Password"
												type={$showPassword ? 'text' : 'password'}
												bind:value={$formData.password}
											/>
											<button
												type="button"
												class="absolute right-2 z-10 text-gray-300 hover:text-white"
												on:click={() => showPassword.set(!$showPassword)}
											>
												{#if $showPassword}
													<Eye size={20} class="text-black" />
												{:else}
													<EyeOff size={20} class="text-black" />
												{/if}
											</button>
										</div>

										<Form.FieldErrors />
									</div>
								{/snippet}
							</Form.Control>
						</Form.Field>
					</div>
					<Form.Button class="w-full bg-blue-500 hover:bg-blue-400">Login</Form.Button>
					<Button variant="outline" class="w-full" href="/register">Register</Button>
				</div>
			</form>
		</div>
	</div>
</div>
