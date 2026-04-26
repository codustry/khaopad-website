<script lang="ts">
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';

	const current = $derived(getLocale());
	const otherLocale = $derived(current === 'en' ? 'th' : 'en');
	const otherHref = $derived(localizeHref(page.url.pathname, { locale: otherLocale }));
</script>

<a
	href={otherHref}
	hreflang={otherLocale}
	class="px-3 py-2 text-xs font-bold tracking-wider uppercase text-ink hover:bg-ink/5 rounded-full border border-line"
	aria-label={`Switch to ${otherLocale === 'th' ? 'Thai' : 'English'}`}
>
	{otherLocale === 'th' ? 'TH' : 'EN'}
</a>
