<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { zod, zodClient } from 'sveltekit-superforms/adapters';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { registerSchema } from '$lib/zod-schema';
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
	import { writable } from 'svelte/store';
	import { Eye, EyeOff } from '@lucide/svelte';
	import * as Select from '$lib/components/ui/select/index.js';

	const showConfirmPassword = writable(false);
	const showPassword = writable(false);

	const form = superForm(defaults(zod(registerSchema)), {
		validators: zodClient(registerSchema),
		resetForm: false,
		onResult({ result }) {
			if (result.type === 'failure') {
				toast.error('Registration Unsuccessful.');
				console.log(result);
			} else if (result.type === 'success') {
				toast.success('Register successfully!');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="container relative mt-12 flex-col items-center justify-center lg:mt-24">
	<div class="flex h-full w-full flex-col items-center justify-center">
		<div class="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
			<form method="POST" use:enhance action="?/register">
				<div class="space-y-6 text-center">
					<div class="space-y-2">
						<div class="text-4xl font-bold">Register</div>
						<div class="text-muted-foreground">Enter your account details</div>
					</div>
					<Form.Field {form} name="f_name">
						<Form.Control>
							{#snippet children({ props })}
								<Input {...props} bind:value={$formData.f_name} placeholder="First Name" />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="l_name">
						<Form.Control>
							{#snippet children({ props })}
								<Input {...props} bind:value={$formData.l_name} placeholder="Last Name" />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="email">
						<Form.Control>
							{#snippet children({ props })}
								<Input {...props} bind:value={$formData.email} placeholder="Email" />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Form.Field {form} name="PhoneNo">
						<Form.Control>
							{#snippet children({ props })}
								<Input {...props} bind:value={$formData.PhoneNo} placeholder="Phone Number" />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>

					<Select.Root type="single">
						<Select.Trigger class="w-full text-black">Accessibility Feature</Select.Trigger>
						<Select.Content>
							<Select.Item value="light">Light</Select.Item>
							<Select.Item value="dark">Dark</Select.Item>
							<Select.Item value="system">System</Select.Item>
						</Select.Content>
					</Select.Root>

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

					<Form.Field {form} name="confirmPassword">
						<Form.Control>
							{#snippet children({ props })}
								<div class="relative space-y-1.5">
									<div class="flex items-center">
										<Input
											{...props}
											class="w-full rounded-md bg-white/10 px-4 py-6 pr-10 text-black placeholder-white/70 transition duration-300"
											placeholder="Confirm Password"
											type={$showConfirmPassword ? 'text' : 'password'}
											bind:value={$formData.confirmPassword}
										/>
										<button
											type="button"
											class="absolute right-2 z-10 text-gray-300 hover:text-white"
											on:click={() => showConfirmPassword.set(!$showConfirmPassword)}
										>
											{#if $showConfirmPassword}
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

					<Form.Button class="w-full bg-blue-500 hover:bg-blue-400">Register</Form.Button>
					<Button variant="outline" class="w-full" href="/login">Login</Button>
				</div>
			</form>
		</div>
	</div>
</div>
