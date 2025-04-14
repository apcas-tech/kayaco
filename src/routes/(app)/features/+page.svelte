<script lang="ts">
  let previewImage: HTMLImageElement;

  const cards = [
    {
      title: 'Kaya-Connect',
      category: 'Jobs',
      description: 'Job opportunities for PWDs. Find workplaces with accessible work-environments.',
      imageSrc: '/img/kaya-connect.jpg',
      link: '#',
      previewColor: 'text-blue-700 hover:text-blue-900',
      badgeColor: 'bg-blue-200 text-blue-600',
      cardClass: 'bg-blue-100',
    },
    {
      title: 'K-Mart',
      category: 'Shop',
      description: 'Online shopping made inclusive. Purchase products crafted by PWDs.',
      imageSrc: '/img/k-mart.jpg',
      link: '#',
      previewColor: 'text-orange-700 hover:text-orange-900',
      badgeColor: 'bg-orange-200 text-orange-600',
      cardClass: 'bg-orange-100',
    },
    {
      title: 'K-Pability',
      category: 'Courses',
      description: 'Learn and Upskill. See courses with accessible learning materials.',
      imageSrc: '/img/k-pability.jpg',
      link: '#',
      previewColor: 'text-purple-700 hover:text-purple-900',
      badgeColor: 'bg-purple-200 text-purple-600',
      cardClass: 'bg-purple-100',
    },
  ];

  const handleMouseEnter = (image: string) => {
    if (previewImage) previewImage.src = image;
  };
</script>

<div class="flex flex-col md:flex-row gap-8 px-8 max-w-7xl mx-auto mt-24">
  <div class="flex-1 space-y-4">
    {#each cards as { title, category, description, imageSrc, link, previewColor, badgeColor, cardClass }}
      <div
        role="button"
        tabindex="0"
        class={`group relative rounded-2xl shadow p-4 flex flex-col transition-transform transform hover:scale-105 cursor-pointer text-sm ${cardClass}`}
        on:mouseenter={() => handleMouseEnter(imageSrc)}
        on:focus={() => handleMouseEnter(imageSrc)}
      >
        <span class={`font-bold text-xs rounded-full px-2 py-0.5 w-fit ${badgeColor}`}>
          {category}
        </span>

        <h2 class="mt-1 text-lg font-bold text-gray-800">{title}</h2>
        <p class="text-gray-700 leading-snug">{description}</p>

        <a href={link} class={`mt-2 text-sm font-medium underline ${previewColor}`}>
          Learn more →
        </a>
      </div>
    {/each}
  </div>

  <div class="flex-1 flex justify-center items-center">
    <div class="w-full h-[26rem] rounded-3xl overflow-hidden shadow-lg bg-white relative">
      <img
        bind:this={previewImage}
        src={cards[0].imageSrc}
        alt="Preview"
        class="w-full h-full object-cover transition-all duration-500"
      />
    </div>
  </div>
</div>
