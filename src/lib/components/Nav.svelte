<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import LangToggle from './LangToggle.svelte';

	let mobileOpen = $state(false);

	type NavLink = { href: string; label: () => string; external?: boolean };
	const links: NavLink[] = [
		{ href: '#features', label: m.nav_features },
		{ href: '#demo', label: m.nav_demo },
		{ href: '#stack', label: m.nav_stack },
		{ href: 'https://github.com/codustry/khaopad', label: m.nav_github, external: true },
	];
</script>

<header class="sticky top-0 z-40 backdrop-blur-md bg-cream/75 border-b border-line/60">
	<div class="container-page flex items-center justify-between h-16">
		<!-- Brand -->
		<a href="/" class="flex items-center gap-2 group" aria-label="Khao Pad — home">
			<span
				class="grid place-items-center w-9 h-9 rounded-xl border-2 border-ink bg-lime text-ink font-display font-bold text-lg shadow-[0_2px_0_0_var(--color-ink)] group-hover:rotate-[-6deg] transition-transform"
			>
				ข
			</span>
			<span class="font-display font-bold text-lg tracking-tight">Khao Pad</span>
		</a>

		<!-- Desktop nav -->
		<nav class="hidden md:flex items-center gap-1">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink rounded-full hover:bg-ink/5"
					target={link.external ? '_blank' : undefined}
					rel={link.external ? 'noopener' : undefined}
				>
					{link.label()}
				</a>
			{/each}
			<LangToggle />
			<a
				href="https://khaopad-example.codustry.workers.dev"
				class="btn btn-primary !px-4 !py-2 ml-2 text-sm"
				target="_blank"
				rel="noopener"
			>
				{m.nav_try_demo()}
			</a>
		</nav>

		<!-- Mobile -->
		<button
			class="md:hidden p-2 rounded-md hover:bg-ink/5"
			aria-label="Menu"
			aria-expanded={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
			>
				{#if mobileOpen}
					<path d="M6 6l12 12M18 6L6 18" />
				{:else}
					<path d="M4 7h16M4 12h16M4 17h16" />
				{/if}
			</svg>
		</button>
	</div>

	{#if mobileOpen}
		<div class="md:hidden border-t border-line bg-cream">
			<nav class="container-page py-4 flex flex-col gap-1">
				{#each links as link (link.href)}
					<a
						href={link.href}
						onclick={() => (mobileOpen = false)}
						class="px-3 py-3 text-base font-medium rounded-lg hover:bg-ink/5"
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener' : undefined}
					>
						{link.label()}
					</a>
				{/each}
				<div class="pt-2 flex items-center justify-between">
					<LangToggle />
					<a
						href="https://khaopad-example.codustry.workers.dev"
						class="btn btn-primary !px-4 !py-2 text-sm"
						target="_blank"
						rel="noopener"
					>
						{m.nav_try_demo()}
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
