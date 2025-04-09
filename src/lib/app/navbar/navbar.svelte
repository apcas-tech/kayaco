<script lang="ts">
	let isOpen = $state(false);

	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	const links = [
		{ name: 'Home', href: '/landingpage' },
		{ name: 'Features', href: '/features' }
	];
</script>

<nav class="border-b border-gray-200 bg-white">
	<div class=" px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-start">
			<!-- Desktop menu -->
			<div class="hidden items-center space-x-8 md:flex">
				{#each links as link}
					<a href={link.href} class="text-gray-600 transition-colors duration-300">
						{link.name}
					</a>
				{/each}
			</div>

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
	</div>

	{#if isOpen}
		<div class="md:hidden">
			<div class="space-y-1 px-2 pb-3 pt-2">
				{#each links as link}
					<a
						href={link.href}
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-600 transition hover:bg-gray-50"
					>
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
