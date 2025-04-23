<script lang="ts">
	
	const categoryCards = [
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
			badgeColor: "bg-blue-200 text-blue-600"
		},
		{
			title: "Braille Shirt",
			category: "Clothing",
			description: "T-shirt with braille messages.",
			imageSrc: "/img/k-pability.jpg",
			cardClass: "bg-orange-100",
			badgeColor: "bg-orange-200 text-orange-600"
		},
		{
			title: "Custom Mugs",
			category: "Art",
			description: "Hand-painted mugs made by PWD artists.",
			imageSrc: "/img/kaya-connect.jpg",
			cardClass: "bg-purple-100",
			badgeColor: "bg-purple-200 text-purple-600"
		},
		{
			title: "Bead Bracelet",
			category: "Accessories",
			description: "Wearable hand accessory.",
			imageSrc: "/img/k-mart.jpg",
			cardClass: "bg-green-100",
			badgeColor: "bg-green-200 text-green-600"
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
					<option>Metro Manila</option>
					<option>Luzon</option>
					<option>Visayas</option>
					<option>Mindanao</option>
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
					{#each categoryCards as cat}
						<div class="bg-white rounded-xl border border-gray-300 shadow hover:shadow-lg transition overflow-hidden cursor-pointer w-3/4 max-w-xs mx-auto">
							<img src={cat.imageSrc} alt={cat.title} class="h-28 w-full object-cover" />
							<div class="p-3 text-center font-semibold text-gray-800">{cat.title}</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Products -->
			<div>
				<h2 class="text-xl font-bold mb-4">Most Popular</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">
					{#each products.slice(0, 2) as product}
						<div class={`group relative flex flex-col rounded-2xl p-4 text-sm shadow hover:scale-105 transition-transform w-full max-w-xs ${product.cardClass}`}>
							<img src={product.imageSrc} alt={product.title} class="h-40 w-full object-cover rounded-xl mb-3" />
							<span class={`w-fit rounded-full px-2 py-0.5 text-xs font-bold ${product.badgeColor}`}>{product.category}</span>
							<h2 class="mt-1 text-lg font-bold text-gray-800">{product.title}</h2>
							<p class="leading-snug text-gray-700">{product.description}</p>
						</div>
					{/each}
				</div>
			</div>

			<div>
				<h2 class="text-xl font-bold mb-4">All Products</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">
					{#each products as product}
						<div class={`group relative flex flex-col rounded-2xl p-4 text-sm shadow hover:scale-105 transition-transform w-full max-w-xs ${product.cardClass}`}>
							<img src={product.imageSrc} alt={product.title} class="h-40 w-full object-cover rounded-xl mb-3" />
							<span class={`w-fit rounded-full px-2 py-0.5 text-xs font-bold ${product.badgeColor}`}>{product.category}</span>
							<h2 class="mt-1 text-lg font-bold text-gray-800">{product.title}</h2>
							<p class="leading-snug text-gray-700">{product.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>