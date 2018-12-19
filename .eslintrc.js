module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard',
    ],
    rules: {
        'comma-dangle': ['warn', {
            'arrays': 'only-multiline',
            'objects': 'only-multiline',
            'imports': 'only-multiline',
            'exports': 'only-multiline',
            'functions': 'never',
        }],
        'curly': 'warn',
        'indent': ['warn', 4, {
            'SwitchCase': 1,
        }],
        'no-console': process.env.NODE_ENV === 'production' ? ['error', { 'allow': ['error', 'warn'] }] : ['warn', { 'allow': ['error', 'warn'] }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-irregular-whitespace': 'off',
        'no-multi-spaces': 'off',
        'no-multiple-empty-lines': 'off',
        'no-template-curly-in-string': 'warn',
        'no-unsafe-negation': 'warn',
        'no-unused-vars': ['error', {
            'vars': 'local',
            // For variables, allow:  Any var that starts with a capital
            // (regardless of any leading underscores).
            'varsIgnorePattern': '^_?[A-Z]',
            // For arguments, allow:  Any single character; any number of
            // consecutive `i`s; `ev`, `evt`, `event`; `err`, `error`.
            'argsIgnorePattern': '^(.|i+|ev(en)?t|err(or)?)$',
            // For `catch()`, allow:  Any single character; `err`, `error`
            'caughtErrorsIgnorePattern': '^(.|err(or)?)$',
        }],
        'one-var-declaration-per-line': ['warn', 'initializations'],
        'operator-linebreak': ['error', 'before'],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always',
        }],
        'space-unary-ops': 'off',
        'spaced-comment': 'off',

    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
