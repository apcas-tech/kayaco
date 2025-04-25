<script lang="ts">
    export let category: {
         title: string;
         imageSrc: string;
    };
  </script>

    <div class="bg-white rounded-xl border border-gray-300 shadow hover:shadow-lg transition overflow-hidden cursor-pointer w-3/4 max-w-xs mx-auto">
        <img src={category.imageSrc} alt={category.title} class="h-28 w-full object-cover" />
         <div class="p-3 text-center font-semibold text-gray-800">{category.title}</div>
    </div>