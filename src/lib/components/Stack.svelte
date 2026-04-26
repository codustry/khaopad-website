<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	const items = [
		{ name: m.stack_sveltekit, icon: '▲', accent: 'bg-orange-200/60' },
		{ name: m.stack_cloudflare, icon: '☁︎', accent: 'bg-amber-200/60' },
		{ name: m.stack_drizzle, icon: '💧', accent: 'bg-sky/60' },
		{ name: m.stack_better_auth, icon: '🔐', accent: 'bg-peach/60' },
		{ name: m.stack_tailwind, icon: '🎨', accent: 'bg-mint/60' },
		{ name: m.stack_paraglide, icon: '🌐', accent: 'bg-lime/40' },
	] as const;
</script>

<section id="stack" class="container-page py-20 sm:py-28 scroll-mt-20">
	<header class="max-w-2xl mb-12" data-reveal>
		<span class="eyebrow">{m.stack_eyebrow()}</span>
		<h2 class="display-2 mt-3">{m.stack_title()}</h2>
		<p class="mt-4 text-lg text-ink-soft leading-relaxed">{m.stack_subtitle()}</p>
	</header>

	<ul class="grid grid-cols-2 sm:grid-cols-3 gap-4">
		{#each items as item, i (i)}
			<li
				class="flex items-center gap-3 px-4 py-4 rounded-2xl border-2 border-ink bg-white shadow-[0_2px_0_0_var(--color-ink)] hover:-translate-y-1 transition-transform"
				data-reveal
			>
				<span
					class="grid place-items-center w-10 h-10 rounded-xl border-2 border-ink {item.accent} text-lg shrink-0"
				>
					{item.icon}
				</span>
				<span class="font-semibold text-sm sm:text-base">{item.name()}</span>
			</li>
		{/each}
	</ul>
</section>
