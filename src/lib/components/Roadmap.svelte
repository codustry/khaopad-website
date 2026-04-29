<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	type Pillar = {
		icon: string;
		bg: string;
		title: () => string;
		body: () => string;
	};

	const pillars: Pillar[] = [
		{ icon: '🔎', bg: 'bg-sky/60', title: m.roadmap_p1_title, body: m.roadmap_p1_body },
		{ icon: '🗺️', bg: 'bg-mint/60', title: m.roadmap_p2_title, body: m.roadmap_p2_body },
		{ icon: '📈', bg: 'bg-lime/40', title: m.roadmap_p3_title, body: m.roadmap_p3_body },
		{ icon: '⚡', bg: 'bg-peach/60', title: m.roadmap_p4_title, body: m.roadmap_p4_body },
		{ icon: '💬', bg: 'bg-cream-soft', title: m.roadmap_p5_title, body: m.roadmap_p5_body },
	];
</script>

<section id="roadmap" class="container-page py-20 sm:py-28 scroll-mt-20">
	<header class="max-w-2xl mb-12 sm:mb-16" data-reveal>
		<span class="eyebrow">{m.roadmap_eyebrow()}</span>
		<h2 class="display-2 mt-3">{m.roadmap_title()}</h2>
		<p class="mt-4 text-lg text-ink-soft leading-relaxed">{m.roadmap_subtitle()}</p>
	</header>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
		{#each pillars as p, i (i)}
			<article class="card hover:-translate-y-1 transition-transform" data-reveal>
				<div
					class="w-12 h-12 rounded-2xl border-2 border-ink {p.bg} grid place-items-center text-xl mb-4"
				>
					{p.icon}
				</div>
				<h3 class="font-display font-bold text-xl text-ink leading-tight">{p.title()}</h3>
				<p class="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">{p.body()}</p>
			</article>
		{/each}
	</div>

	<div class="mt-10 flex justify-center" data-reveal>
		<a
			href="https://github.com/codustry/khaopad/blob/main/docs/MILESTONES.md"
			target="_blank"
			rel="noopener"
			class="btn btn-secondary"
		>
			{m.roadmap_cta()}
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
	</div>
</section>
