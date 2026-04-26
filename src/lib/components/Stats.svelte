<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	const stats = [
		{ value: m.stats_articles_value, label: m.stats_articles_label, icon: '🌏' },
		{ value: m.stats_setup_value, label: m.stats_setup_label, icon: '⚙️' },
		{ value: m.stats_deploy_value, label: m.stats_deploy_label, icon: '⚡' },
	] as const;
</script>

<section class="container-page py-10 sm:py-14">
	<div class="card !p-0 overflow-hidden" data-reveal>
		<dl class="grid sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-ink">
			{#each stats as s, i (i)}
				<div class="p-6 sm:p-8 flex items-start gap-4">
					<span class="text-3xl">{s.icon}</span>
					<div>
						<dt class="text-xs font-semibold uppercase tracking-wider text-ink-soft">
							{s.label()}
						</dt>
						<dd class="font-display text-3xl sm:text-4xl font-bold text-ink mt-1 leading-none">
							{s.value()}
						</dd>
					</div>
				</div>
			{/each}
		</dl>
	</div>
</section>
