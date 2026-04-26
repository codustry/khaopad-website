<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<section class="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
	<div class="container-page relative">
		<div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
			<!-- Left: copy -->
			<div data-reveal>
				<span class="eyebrow mb-5">{m.hero_eyebrow()}</span>
				<h1 class="display-1 mt-2">
					{m.hero_title_a()}<br />
					<span class="squiggle">{m.hero_title_b()}</span>
				</h1>
				<p class="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
					{m.hero_subtitle()}
				</p>

				<div class="mt-8 flex flex-wrap items-center gap-3">
					<a
						href="https://khaopad-example.codustry.workers.dev"
						target="_blank"
						rel="noopener"
						class="btn btn-primary"
					>
						{m.hero_cta_primary()}
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
						>
							<path d="M5 12h14M13 5l7 7-7 7" />
						</svg>
					</a>
					<a
						href="https://github.com/codustry/khaopad"
						target="_blank"
						rel="noopener"
						class="btn btn-secondary"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M12 .5C5.65.5.5 5.65.5 12.05c0 5.1 3.3 9.43 7.88 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.21.7-3.88-1.55-3.88-1.55-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.49.11-3.1 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.61.23 2.8.11 3.1.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.05.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.56A11.55 11.55 0 0023.5 12.05C23.5 5.65 18.35.5 12 .5z"
							/></svg
						>
						{m.hero_cta_secondary()}
					</a>
				</div>

				<div class="mt-8 flex flex-wrap gap-2">
					<span class="chip">⚖️ {m.hero_meta_free()}</span>
					<span class="chip">⚡ {m.hero_meta_stack()}</span>
					<span class="chip">🌏 {m.hero_meta_i18n()}</span>
				</div>
			</div>

			<!-- Right: stylized "browser preview" of the demo -->
			<div class="relative" data-reveal>
				<!-- decorative blobs -->
				<div
					class="absolute -top-10 -right-6 w-28 h-28 rounded-full bg-peach/70 -z-10 animate-float"
					style="--rot: 8deg;"
				></div>
				<div
					class="absolute -bottom-8 -left-4 w-20 h-20 rounded-full bg-mint/70 -z-10 animate-float"
					style="--rot: -10deg; animation-delay: 1.2s;"
				></div>

				<div class="card !p-0 overflow-hidden">
					<!-- fake browser chrome -->
					<div class="flex items-center gap-1.5 px-4 py-3 border-b-2 border-ink bg-cream-soft">
						<span class="w-3 h-3 rounded-full bg-ink/20"></span>
						<span class="w-3 h-3 rounded-full bg-ink/20"></span>
						<span class="w-3 h-3 rounded-full bg-ink/20"></span>
						<span class="ml-3 text-xs font-mono text-ink-soft truncate">
							khaopad-example.codustry.workers.dev/articles
						</span>
					</div>

					<!-- fake CMS list -->
					<div class="p-5 space-y-3">
						{#each [{ flag: '🍳', en: 'Classic Khao Pad', slug: 'classic-khao-pad', status: 'Published', tags: ['rice', 'quick'] }, { flag: '🍤', en: 'Khao Pad Goong', slug: 'khao-pad-goong', status: 'Published', tags: ['rice', 'street'] }, { flag: '🍍', en: 'Pineapple Fried Rice', slug: 'khao-pad-sapparot', status: 'Draft', tags: ['rice', 'quick'] }, { flag: '🌶️', en: 'Khao Pad Krapao', slug: 'khao-pad-krapao', status: 'Published', tags: ['spicy'] }] as row, i (row.slug)}
							<div
								class="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-line bg-white hover:border-ink hover:shadow-[0_2px_0_0_var(--color-ink)] transition-all"
								style="animation: fade-up 0.6s {0.2 + i * 0.1}s both;"
							>
								<span class="text-xl">{row.flag}</span>
								<div class="flex-1 min-w-0">
									<div class="font-semibold text-sm text-ink truncate">{row.en}</div>
									<div class="font-mono text-[10px] text-ink-soft truncate">/{row.slug}</div>
								</div>
								<span
									class="text-[10px] font-bold px-2 py-0.5 rounded-full {row.status === 'Published'
										? 'bg-lime/40 text-ink'
										: 'bg-cream-soft text-ink-soft'}"
								>
									{row.status}
								</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- hand-drawn arrow pointing at the CTA -->
				<svg
					class="absolute -left-10 -bottom-12 w-32 h-20 text-lime-deep hidden sm:block animate-draw"
					viewBox="0 0 130 80"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M5 70 Q 30 50, 60 55 T 115 25" />
					<path d="M115 25 L105 18 M115 25 L108 35" />
				</svg>
			</div>
		</div>
	</div>
</section>
