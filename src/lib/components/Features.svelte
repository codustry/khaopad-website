<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	type Feature = {
		icon: string;
		bg: string;
		title: () => string;
		body: () => string;
	};

	const features: Feature[] = [
		{ icon: '✍️', bg: 'bg-lime/40', title: m.f_editor_title, body: m.f_editor_body },
		{ icon: '🌏', bg: 'bg-sky/60', title: m.f_i18n_title, body: m.f_i18n_body },
		{ icon: '🗄️', bg: 'bg-mint/60', title: m.f_storage_title, body: m.f_storage_body },
		{ icon: '🔐', bg: 'bg-peach/60', title: m.f_auth_title, body: m.f_auth_body },
		{ icon: '🚀', bg: 'bg-lime/40', title: m.f_deploy_title, body: m.f_deploy_body },
		{ icon: '📦', bg: 'bg-cream-soft', title: m.f_template_title, body: m.f_template_body },
	];
</script>

<section id="features" class="container-page py-20 sm:py-28 scroll-mt-20">
	<header class="max-w-2xl mb-12 sm:mb-16" data-reveal>
		<span class="eyebrow">{m.features_eyebrow()}</span>
		<h2 class="display-2 mt-3">{m.features_title()}</h2>
		<p class="mt-4 text-lg text-ink-soft leading-relaxed">{m.features_subtitle()}</p>
	</header>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
		{#each features as f, i (i)}
			<article class="card hover:-translate-y-1 transition-transform" data-reveal>
				<div
					class="w-12 h-12 rounded-2xl border-2 border-ink {f.bg} grid place-items-center text-xl mb-4"
				>
					{f.icon}
				</div>
				<h3 class="font-display font-bold text-xl text-ink leading-tight">{f.title()}</h3>
				<p class="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">{f.body()}</p>
			</article>
		{/each}
	</div>
</section>
