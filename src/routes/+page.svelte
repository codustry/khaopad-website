<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import Features from '$lib/components/Features.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import Demo from '$lib/components/Demo.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />
<main>
	<Hero />
	<Stats />
	<Features />
	<Roadmap />
	<Demo />
	<Stack />
	<CTA />
</main>
<Footer />
