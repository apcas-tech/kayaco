<script lang="ts">
	import AnimatedCards from '$lib/components/ui/animated-cards/animated-cards.svelte';
	import { Button } from '$lib/components/ui/button';
	import { MoveRight } from '@lucide/svelte';
	import { ThumbsUpIcon, BriefcaseBusinessIcon, UsersIcon } from '@lucide/svelte';

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

<section>
	<div class="mt-12 grid grid-cols-1 items-center px-6 lg:mt-12 lg:grid-cols-2 lg:px-24">
		<div class="space-y-6">
			<div class="space-y-6 text-center lg:text-start">
				<div class="text-3xl lg:text-7xl">
					Your Path to <span class="font-bold text-blue-500">Growth</span> and
					<span class="font-bold text-blue-500">Opportunity.</span>
				</div>
				<div class="w-full text-lg text-muted-foreground lg:max-w-lg">
					Empowering persons with disabilities through education, employment, and enterprise with
					KayaCo.
				</div>
			</div>
			<div class="flex items-center justify-center space-x-2 lg:justify-start">
				<Button variant="outline">Learn More</Button>
				<Button class="bg-blue-500 hover:bg-blue-400">Let's Get Started <MoveRight /></Button>
			</div>
		</div>
		<div><AnimatedCards {testimonials} /></div>
	</div>
	<div class=" items-center justify-center"></div>

	<!--arrow section-->
	<div class="-mt-32 hidden lg:block">
		<div class="flex flex-col items-center">
			<div>
				<img src="/img/arrow.png" alt="arrow" class="w-26 ml-32 h-32" />
			</div>
			<div>
				<div class="ml-16 mt-2 text-3xl">
					Our <span class="font-bold text-blue-500">Journey</span>
				</div>
			</div>
		</div>
	</div>

	<footer class="mt-12 w-full lg:absolute lg:bottom-0 lg:mt-0">
		<div
			class="grid grid-cols-1 items-center space-y-6 border-t border-gray-200 py-4 text-center font-medium text-blue-500 lg:grid-cols-3 lg:space-y-2 lg:text-center"
		>
			<div class="flex items-center justify-center gap-2">
				<ThumbsUpIcon class="h-5 w-5 text-blue-500" /> Accessible Courses for All Abilities
			</div>

			<div class="flex items-center justify-center gap-2">
				<BriefcaseBusinessIcon class="h-5 w-5 text-blue-500" /> Pathways to Employment
			</div>

			<div class="flex items-center justify-center gap-2">
				<UsersIcon class="h-5 w-5 text-blue-500" /> Supportive Community
			</div>
		</div>
	</footer>
</section>
