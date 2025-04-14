<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	let isOpen = $state(false);

	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	const links = [
		{ name: 'Home', href: '/landingpage' },
		{ name: 'Features', href: '/features' },
		{ name: 'Products', href: '/products' },
		{ name: 'Courses', href: '/courses' }
	];
</script>

<nav class="border-b border-gray-200 bg-white">
	<div class="px-4 sm:px-6 lg:px-24">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center gap-12">
				<img src="/logo/logo.png" alt="logo" class="hidden h-8 w-24 lg:block" />

				<div class="hidden items-center space-x-8 md:flex">
					{#each links as link}
						<a
							href={link.href}
							class="text-sm text-muted-foreground transition-colors duration-300 hover:text-blue-500"
						>
							{link.name}
						</a>
					{/each}
				</div>
			</div>

			<div class="hidden items-center space-x-2 md:flex">
				<Button href="/login" variant="outline">Login</Button>
				<Button href="/register" class="bg-blue-500 hover:bg-blue-400">Register</Button>
			</div>

			<!-- Mobile Menu Button -->
			<div class="flex items-center md:hidden">
				<button onclick={toggleMenu} class="text-gray-600 hover:text-gray-800 focus:outline-none">
					{#if isOpen}
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isOpen}
			<div class="mt-2 space-y-2 md:hidden">
				{#each links as link}
					<a
						href={link.href}
						class="block text-gray-600 transition-colors duration-300 hover:text-gray-800"
					>
						{link.name}
					</a>
				{/each}
				<a
					href="/login"
					class="block text-gray-600 transition-colors duration-300 hover:text-gray-800">Login</a
				>
				<a
					href="/register"
					class="block pb-4 text-gray-600 transition-colors duration-300 hover:text-gray-800"
					>Register</a
				>
			</div>
		{/if}
	</div>
</nav>
