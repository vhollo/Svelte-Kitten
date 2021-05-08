<!-- Primary layout -->
<script>
	import { page } from '$app/stores';
</script>


<div class="themeWrapper">
	<!-- if this is app -->
	{#if $page.path !== '/docs'}
		<slot />
	<!-- if this is Docs -->
	{:else}
		<slot />
	{/if}
</div>

<!-- Global styles also imports theme vars -->
<style global lang="scss">
	@import '../styles/global.scss';
    @import '../styles/markdown.scss';
</style>