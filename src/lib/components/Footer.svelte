<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<footer class="border-t-2 border-ink bg-cream-soft">
	<div class="container-page py-14 grid sm:grid-cols-[1.5fr_1fr_1fr] gap-10">
		<div>
			<div class="flex items-center gap-2 mb-3">
				<span
					class="grid place-items-center w-9 h-9 rounded-xl border-2 border-ink bg-lime text-ink font-display font-bold"
				>
					ข
				</span>
				<span class="font-display font-bold text-lg">Khao Pad</span>
			</div>
			<p class="text-sm text-ink-soft max-w-sm leading-relaxed">{m.footer_tagline()}</p>
		</div>

		<div>
			<h3 class="text-xs font-semibold uppercase tracking-wider text-ink mb-3">
				{m.footer_product()}
			</h3>
			<ul class="space-y-2 text-sm">
				<li>
					<a href="#features" class="text-ink-soft hover:text-ink">{m.footer_link_features()}</a>
				</li>
				<li>
					<a
						href="https://khaopad-example.codustry.workers.dev"
						target="_blank"
						rel="noopener"
						class="text-ink-soft hover:text-ink">{m.footer_link_demo()}</a
					>
				</li>
				<li>
					<a
						href="https://github.com/codustry/khaopad/generate"
						target="_blank"
						rel="noopener"
						class="text-ink-soft hover:text-ink">{m.footer_link_template()}</a
					>
				</li>
			</ul>
		</div>

		<div>
			<h3 class="text-xs font-semibold uppercase tracking-wider text-ink mb-3">
				{m.footer_resources()}
			</h3>
			<ul class="space-y-2 text-sm">
				<li>
					<a
						href="https://github.com/codustry/khaopad/tree/main/docs"
						target="_blank"
						rel="noopener"
						class="text-ink-soft hover:text-ink">{m.footer_link_docs()}</a
					>
				</li>
				<li>
					<a
						href="https://github.com/codustry/khaopad/blob/main/docs/MILESTONES.md"
						target="_blank"
						rel="noopener"
						class="text-ink-soft hover:text-ink">{m.footer_link_milestones()}</a
					>
				</li>
				<li>
					<a
						href="https://github.com/codustry/khaopad-example/blob/main/docs/EXAMPLE-SETUP.md"
						target="_blank"
						rel="noopener"
						class="text-ink-soft hover:text-ink">{m.footer_link_setup()}</a
					>
				</li>
			</ul>
		</div>
	</div>

	<div class="border-t border-line">
		<div
			class="container-page py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-soft"
		>
			<span>{m.footer_made_with()}</span>
			<a
				href="https://github.com/codustry/khaopad"
				target="_blank"
				rel="noopener"
				class="hover:text-ink inline-flex items-center gap-1.5"
			>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
					><path
						d="M12 .5C5.65.5.5 5.65.5 12.05c0 5.1 3.3 9.43 7.88 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.21.7-3.88-1.55-3.88-1.55-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.49.11-3.1 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.61.23 2.8.11 3.1.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.05.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.56A11.55 11.55 0 0023.5 12.05C23.5 5.65 18.35.5 12 .5z"
					/></svg
				>
				codustry/khaopad
			</a>
		</div>
	</div>
</footer>
