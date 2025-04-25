<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { ChartBarStacked, PackageSearch } from '@lucide/svelte';

	// Menu items.
	const items = [
		{
			title: 'Category',
			url: '/admin/category',
			icon: ChartBarStacked
		},
		{
			title: 'Product',
			url: '/admin/product',
			icon: PackageSearch
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
