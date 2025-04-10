<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Motion, AnimatePresence } from 'svelte-motion';

	// Animation Inspired from Aceternity UI : https://ui.aceternity.com/components/animated-testimonials
	type Testimonial = {
		// quote: string;
		// name: string;
		// designation: string;
		src: string;
	};
	export let testimonials: Testimonial[];
	export const autoplay: boolean = false;

	let active = 0;
	let handleNext = () => {
		active = (active + 1) % testimonials.length;
	};
	let handlePrev = () => {
		active = (active - 1 + testimonials.length) % testimonials.length;
	};

	let isActive = (index: number) => {
		return index === active;
	};
	let randomRotateY = () => {
		return Math.floor(Math.random() * 21) - 10;
	};
	let interval: number;
	// Watch the autoplay variable and set up an interval when it is true
	$: {
		if (autoplay) {
			interval = setInterval(handleNext, 5000);
		} else {
			clearInterval(interval);
		}
	}

	// Cleanup on component destruction
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-2xl md:px-8 lg:px-12">
	<div class="relative grid grid-cols-1 gap-20 md:grid-cols-1">
		<div>
			<div class="relative h-96 w-full">
				<AnimatePresence let:item list={[{ key: active }]}>
					{#each testimonials as testimonial, index}
						<Motion
							initial={{
								opacity: 0,
								scale: 0.9,
								z: -100,
								rotate: randomRotateY()
							}}
							animate={{
								opacity: isActive(index) ? 1 : 0.7,
								scale: isActive(index) ? 1 : 0.95,
								z: isActive(index) ? 0 : -100,
								rotate: isActive(index) ? 0 : randomRotateY(),
								zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
								y: isActive(index) ? [0, -80, 0] : 0
							}}
							exit={{
								opacity: 0,
								scale: 0.9,
								z: 100,
								rotate: randomRotateY()
							}}
							transition={{
								duration: 0.4,
								ease: 'easeInOut'
							}}
							let:motion
						>
							<div use:motion class="absolute inset-0 origin-bottom">
								<img
									src={testimonial.src}
									alt="kayaco cover"
									width={800}
									height={800}
									draggable={false}
									class="h-full w-full rounded-3xl object-cover object-center"
								/>
							</div>
						</Motion>
					{/each}
				</AnimatePresence>
			</div>
		</div>
		<div class="flex flex-col justify-between py-4">
			<Motion
				initial={{
					y: 20,
					opacity: 0
				}}
				animate={{
					y: 0,
					opacity: 1
				}}
				exit={{
					y: -20,
					opacity: 0
				}}
				transition={{
					duration: 0.2,
					ease: 'easeInOut'
				}}
				let:motion
			>
				<!-- <div use:motion>
					<h3 class="text-2xl font-bold text-black dark:text-white">
						{testimonials[active].name}
					</h3>
					<p class="text-sm text-gray-500 dark:text-neutral-500">
						{testimonials[active].designation}
					</p>
					{#key active}
						<p class="mt-8 text-lg text-gray-500 dark:text-neutral-300">
							{#each testimonials[active].quote.split(' ') as word, index}
								<Motion
									initial={{
										filter: 'blur(10px)',
										opacity: 0,
										y: 5
									}}
									animate={{
										filter: 'blur(0px)',
										opacity: 1,
										y: 0
									}}
									transition={{
										duration: 0.2,
										ease: 'easeInOut',
										delay: 0.02 * index
									}}
									let:motion
								>
									<span use:motion class="inline-block">
										{word}&nbsp;
									</span>
								</Motion>
							{/each}
						</p>
					{/key}
				</div> -->
			</Motion>
			<div class="flex items-center justify-center gap-4 md:pt-0 lg:-mt-24 lg:pt-12">
				<button
					onclick={handlePrev}
					aria-label="Previous"
					class="group/button flex h-7 w-7 items-center justify-center rounded-full bg-blue-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
					>
						<path d="m12 19-7-7 7-7" />
						<path d="M19 12H5" />
					</svg>
				</button>

				<button
					onclick={handleNext}
					aria-label="Next"
					class="group/button flex h-7 w-7 items-center justify-center rounded-full bg-blue-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
					>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>
