<script lang="ts">
    export let product: {
      title: string;
      category: string;
      description: string;
      imageSrc: string;
      cardClass: string;
      badgeColor: string;
      price: string;
    };
  </script>
  
  <div class={`group relative flex flex-col rounded-2xl p-4 text-sm shadow hover:scale-105 transition-transform w-full max-w-xs ${product.cardClass}`}>
    <img src={product.imageSrc} alt={product.title} class="h-40 w-full object-cover rounded-xl mb-3" />
    <span class={`w-fit rounded-full px-2 py-0.5 text-xs font-bold ${product.badgeColor}`}>
      {product.category}
    </span>
    <h2 class="mt-1 text-lg font-bold text-gray-800">{product.title}</h2>
    <p class="leading-snug text-gray-700">{product.description}</p>
    <div class="mt-2 font-semibold text-base text-green-600">{product.price}</div>
  </div>
  