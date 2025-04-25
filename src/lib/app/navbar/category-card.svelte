<script lang="ts">
	export let category: {
		title: string;
		imageSrc: string;
	};
</script>

<div
	class="cursor-pointer overflow-hidden rounded-xl border border-gray-300 bg-white shadow transition hover:shadow-lg"
>
	<img src={category.imageSrc} alt={category.title} class="h-28 w-full object-cover" />
	<div class="p-3 text-center font-semibold text-gray-800">{category.title}</div>
</div>
