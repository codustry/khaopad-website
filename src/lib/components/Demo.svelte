<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<section id="demo" class="relative py-20 sm:py-28 scroll-mt-20 overflow-hidden">
	<!-- soft accent panel -->
	<div
		class="absolute inset-x-0 inset-y-8 -z-10 bg-mint/30 mx-3 sm:mx-8 rounded-[2.5rem] border-2 border-ink"
	></div>

	<div class="container-page">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div data-reveal>
				<span class="eyebrow">{m.demo_eyebrow()}</span>
				<h2 class="display-2 mt-3">{m.demo_title()}</h2>
				<p class="mt-4 text-lg text-ink-soft leading-relaxed">{m.demo_subtitle()}</p>

				<div class="mt-8 flex flex-wrap gap-3">
					<a
						href="https://khaopad-example.codustry.workers.dev"
						target="_blank"
						rel="noopener"
						class="btn btn-primary"
					>
						{m.demo_cta_open()}
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
						>
							<path d="M7 17L17 7M9 7h8v8" />
						</svg>
					</a>
					<a
						href="https://github.com/codustry/khaopad-example"
						target="_blank"
						rel="noopener"
						class="btn btn-secondary"
					>
						{m.demo_cta_repo()}
					</a>
				</div>

				<aside class="mt-8 card !p-5 bg-cream-soft border-dashed">
					<div class="flex items-start gap-3">
						<span
							class="grid place-items-center w-10 h-10 rounded-full border-2 border-ink bg-lime text-lg shrink-0"
						>
							🔑
						</span>
						<div>
							<div class="font-display font-bold text-ink">{m.demo_credentials_title()}</div>
							<p class="text-sm text-ink-soft mt-1 leading-relaxed">
								{m.demo_credentials_body()}
							</p>
							<code
								class="inline-block mt-3 font-mono text-xs px-2 py-1 rounded-md bg-white border border-ink"
							>
								/register
							</code>
						</div>
					</div>
				</aside>
			</div>

			<!-- Big "play" video-style card -->
			<div class="relative" data-reveal>
				<div
					class="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-peach/80 -z-10 animate-wobble"
				></div>
				<a
					href="https://khaopad-example.codustry.workers.dev"
					target="_blank"
					rel="noopener"
					class="card !p-0 overflow-hidden block group hover:-translate-y-1 transition-transform"
				>
					<!-- "browser" -->
					<div class="flex items-center gap-1.5 px-4 py-3 border-b-2 border-ink bg-cream-soft">
						<span class="w-3 h-3 rounded-full bg-ink/20"></span>
						<span class="w-3 h-3 rounded-full bg-ink/20"></span>
						<span class="w-3 h-3 rounded-full bg-ink/20"></span>
						<span class="ml-3 text-xs font-mono text-ink-soft truncate">
							khaopad-example.codustry.workers.dev
						</span>
					</div>

					<div
						class="aspect-[4/3] sm:aspect-video bg-gradient-to-br from-cream-soft via-mint/30 to-sky/40 grid place-items-center relative"
					>
						<div class="text-center px-6">
							<div
								class="inline-grid place-items-center w-20 h-20 rounded-full border-2 border-ink bg-lime shadow-[0_4px_0_0_var(--color-ink)] group-hover:scale-110 transition-transform"
							>
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="text-ink translate-x-0.5"
								>
									<path d="M5 4l14 8-14 8V4z" />
								</svg>
							</div>
							<p class="mt-5 font-display font-bold text-xl text-ink">khaopad-example</p>
							<p class="mt-1 text-sm text-ink-soft">5 articles · EN + TH · ready to edit</p>
						</div>
						<!-- floating tag chips -->
						<span class="absolute top-6 left-6 chip animate-float" style="--rot: -4deg;"
							>🍳 classic-khao-pad</span
						>
						<span
							class="absolute bottom-8 right-6 chip animate-float"
							style="--rot: 3deg; animation-delay: 1s;">🌶️ khao-pad-krapao</span
						>
						<span
							class="absolute top-1/2 right-10 chip animate-float bg-lime/70"
							style="--rot: -2deg; animation-delay: 2s;">EN · TH</span
						>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>
