<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<section class="container-page py-20 sm:py-28">
	<div class="card !p-8 sm:!p-14 text-center bg-lime/30 relative overflow-hidden" data-reveal>
		<div
			class="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-peach/70 -z-0 animate-float"
			style="--rot: -10deg;"
		></div>
		<div
			class="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-sky/60 -z-0 animate-float"
			style="--rot: 8deg; animation-delay: 1s;"
		></div>

		<div class="relative z-10 max-w-2xl mx-auto">
			<h2 class="display-2">
				<span class="squiggle">{m.cta_title()}</span>
			</h2>
			<p class="mt-5 text-lg text-ink-soft leading-relaxed">{m.cta_subtitle()}</p>

			<div class="mt-8 flex flex-wrap justify-center gap-3">
				<a
					href="https://khaopad-example.codustry.workers.dev"
					target="_blank"
					rel="noopener"
					class="btn btn-primary"
				>
					{m.cta_primary()}
				</a>
				<a
					href="https://github.com/codustry/khaopad-example/blob/main/docs/EXAMPLE-SETUP.md"
					target="_blank"
					rel="noopener"
					class="btn btn-secondary"
				>
					{m.cta_secondary()}
				</a>
			</div>
		</div>
	</div>
</section>
