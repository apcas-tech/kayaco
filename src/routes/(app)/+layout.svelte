<script lang="ts">
	import Navbar from '$lib/app/navbar/navbar.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
