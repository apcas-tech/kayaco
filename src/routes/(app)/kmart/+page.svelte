<script lang="ts">
	import ProductCard from '$lib/app/navbar/product-card.svelte'
	import CategoryCard from '$lib/app/navbar/category-card.svelte'

	const categories = [
		{ title: "Tech", imageSrc: "/img/k-mart.jpg" },
		{ title: "Clothing", imageSrc: "/img/k-pability.jpg" },
		{ title: "Art", imageSrc: "/img/kaya-connect.jpg" },
		{ title: "Accessories", imageSrc: "/img/k-mart.jpg" },
		{ title: "Home", imageSrc: "/img/k-pability.jpg" },
		{ title: "Health", imageSrc: "/img/kaya-connect.jpg" },
		{ title: "Books", imageSrc: "/img/k-mart.jpg" }
	];

	const products = [
		{
			title: "Smart Cane",
			category: "Tech",
			description: "Assistive walking cane with sensors.",
			imageSrc: "/img/k-mart.jpg",
			cardClass: "bg-blue-100",
			badgeColor: "bg-blue-200 text-blue-600",
			price: "$99.99"
		},
		{
			title: "Braille Shirt",
			category: "Clothing",
			description: "T-shirt with braille messages.",
			imageSrc: "/img/k-pability.jpg",
			cardClass: "bg-orange-100",
			badgeColor: "bg-orange-200 text-orange-600",
			price: "$99.99"
		},
		{
			title: "Custom Mugs",
			category: "Art",
			description: "Hand-painted mugs made by PWD artists.",
			imageSrc: "/img/kaya-connect.jpg",
			cardClass: "bg-purple-100",
			badgeColor: "bg-purple-200 text-purple-600",
			price: "$99.99"
		},
		{
			title: "Bead Bracelet",
			category: "Accessories",
			description: "Wearable hand accessory.",
			imageSrc: "/img/k-mart.jpg",
			cardClass: "bg-green-100",
			badgeColor: "bg-green-200 text-green-600",
			price: "$99.99"
		}
	];
</script>

<div class="px-2 sm:px-4 md:px-8 lg:px-16 mt-12 space-y-10 pb-20">
	<!-- Search Bar -->
	<div class="flex justify-center">
		<input
			type="text"
			placeholder="Search products..."
			class="w-full md:w-2/3 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none"
		/>
	</div>

	<!-- Filters-->
	<div class="flex flex-col lg:flex-row gap-10">
		<aside class="w-full lg:w-1/5 space-y-6">
			<h3 class="text-lg font-bold">Filters</h3>

			<div>
				<label for="price-min" class="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
					<div class="flex gap-2">
						<input id="price-min" type="number" placeholder="Min" class="w-full p-2 border rounded-md text-sm" />
						<input id="price-max" type="number" placeholder="Max" class="w-full p-2 border rounded-md text-sm" />
					</div>
			</div>

			<div>
				<label for="shipped-from" class="block text-sm font-medium text-gray-700 mb-1">Shipped From</label>
				<select id="shipped-from" class="w-full p-2 border rounded-md text-sm">
					<option>All</option>
					<option>Balanga</option>
					<option>Pilar</option>
					<option>Limay</option>
					<option>Mariveles</option>
				</select>
			</div>

			<div>
				<label for="rating" class="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
				<select id="rating" class="w-full p-2 border rounded-md text-sm">
					<option>All</option>
					<option>⭐ 1 and up</option>
					<option>⭐ 2 and up</option>
					<option>⭐ 3 and up</option>
					<option>⭐ 4 and up</option>
					<option>⭐ 5 only</option>
				</select>
			</div>
		</aside>

		<!-- Main Content -->
		<div class="flex-1 space-y-12">

			<!-- Categories-->
			<div>
				<h2 class="text-xl font-bold mb-4">Categories</h2>
				<div class="grid grid-cols-2 md:grid-cols-7 gap-2">
					{#each categories as category}
					<CategoryCard {category} />
					{/each}
				</div>
			</div>

			<!-- Products -->
			
			<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">
				{#each products.slice(0, 2) as product}
				<ProductCard {product} />
				{/each}
			</div>
			
			<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">
				{#each products as product}
				<ProductCard {product} />
				{/each}
			</div>
		</div>
	</div>
</div>