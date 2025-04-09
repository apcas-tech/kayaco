<script lang="ts">
	import AnimatedCards from '$lib/components/ui/animated-cards/animated-cards.svelte';
	import { Button } from '$lib/components/ui/button';

	const testimonials = [
		{
			src: '/logo/cover.png'
		},
		{
			src: '/logo/cover.png'
		},
		{
			src: '/logo/cover.png'
		},
		{
			src: '/logo/cover.png'
		},
		{
			src: '/logo/cover.png'
		}
	];
</script>

<div class="mt-12 grid grid-cols-1 items-center px-6 lg:mt-24 lg:grid-cols-2 lg:px-24">
	<div class="space-y-6">
		<div class="space-y-6 text-center lg:text-start">
			<div class="text-3xl lg:text-7xl">
				Your Path to <span class="font-bold">Growth</span> and
				<span class="font-bold">Opportunity.</span>
			</div>
			<div class="w-full text-lg lg:max-w-lg">
				Empowering persons with disabilities through education, employment, and enterprise with
				KayaCo.
			</div>
		</div>
		<div class="flex items-center justify-center space-x-2 lg:justify-start">
			<Button variant="outline">Learn More</Button>
			<Button>Let's Get Started</Button>
		</div>
	</div>
	<div><AnimatedCards {testimonials} /></div>
</div>
<div class=" items-center justify-center"></div>

<!--arrow section-->
<!-- <section class="relative sm:hidden md:hidden lg:block">
	<div class="absolute bottom-0 right-[800px] items-center px-24">
		<img src="/img/arrow.png" alt="arrow" class="h-36 w-32" />
	</div>
	<div class="absolute -bottom-12 right-[800px] items-center px-24">
		<div class="text-4xl">Our <span class="font-bold">Journey</span></div>
	</div>
</section> -->
