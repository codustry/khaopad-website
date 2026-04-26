import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: { parser: tseslint.parser },
		},
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/', '.wrangler/', 'src/lib/paraglide/'],
	},
	{
		// Hash anchors (#features) and absolute external URLs are intentional
		// here; we don't route through SvelteKit's resolve() for them.
		files: ['**/*.svelte'],
		rules: { 'svelte/no-navigation-without-resolve': 'off' },
	},
];
