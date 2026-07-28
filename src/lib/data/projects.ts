export interface Project {
    title: string;
    tagline: string;
    description: string;
    tags: string[];
    decisions: ProjectDecision[];
    highlights: string[];
    button_url: string;
    button_label: string;
}

export interface ProjectDecision {
    title: string;
    description: string;
}

export const projects: Project[] = [
    {
        title: 'wodify-go',
        tagline:
            'a production-grade go SDK for the Wodify REST API - built to feel like the standard library with zero dependencies.',
        description:
            'wodify-go wraps the Wodify REST API in a fully typed, zero-runtime-dependency client. the goal was an SDK that felt native to go: predictable errors and sane defaults - usable in production without pulling in a huge dependency tree.',
        tags: ['go', 'net/http', 'github actions'],
        decisions: [
            {
                title: 'zero runtime dependencies',
                description:
                    'built entirely on the standard library so consumers inherit no extra dependencies - the whole SDK compiles with net/http and encoding/json.'
            },
            {
                title: 'configurable, type-safe HTTP client',
                description:
                    "a functional-options constructor exposes timeouts, base URLs, and retry policy while keeping every endpoint strongly typed against request/response structs (great fit for go's new support for generics)."
            },
            {
                title: 'typed, unwrappable errors',
                description:
                    'API failures surface as typed errors implementing Unwrap(), so callers can use errors.Is / errors.As instead of string-matching HTTP messages.'
            }
        ],
        highlights: [
            'contains a custom mock-server harness unlocking 100% test coverage with round-trip type checking to catch marshalling errors.',
            "automatic retries with exponential backoff sympathetic to the API's rate limiting policies",
            'complete documentation: README with extensive descriptions, CONTRIBUTING guide, full suite of runnable examples, and CI quality badges.'
        ],
        button_label: 'view on github',
        button_url: 'https://www.github.com/andrew-hayworth22/wodify-go'
    },
    {
        title: 'critiquefi',
        tagline:
            'a social media platform for rating and logging all forms of media from books to video games. Go and SvelteKit.',
        description:
            'critiquefi is a full-stack application for logging and rating media of every kind, surfacing unique insights into a user’s consumption over time. the backend service is written in go and postgres and the frontend is written in sveltekit',
        tags: ['go', 'sveltekit', 'postgres', 'docker', 'tailwind', 'github actions'],
        decisions: [
            {
                title: 'domain-separated handler/service/store layers',
                description:
                    'each layer talks to the next only through interfaces, keeping communication protocols, business logic, and persistence cleanly isolated.'
            },
            {
                title: 'interface-based dependency injection',
                description:
                    'stores and services are injected as interfaces, so units test in isolation with mocks and implementations swap without touching callers.'
            },
            {
                title: 'JWT auth with refresh-token rotation',
                description:
                    'short-lived access tokend paired with longer-lived, rotating refresh tokens guarantee strong security without the pains of constantly logging in again'
            }
        ],
        highlights: [
            'AWS SES integration for transactional emails',
            'postgres migrations and hand-tuned queries',
            'docker containerization for reproducible deployments'
        ],
        button_label: 'view on github',
        button_url: 'https://www.github.com/andrew-hayworth22/critiquefi'
    },
    {
        title: 'dynastatracker',
        tagline:
            'a football statistics application used to track and visualise stats from college football video games.',
        description:
            'dynastatracker models sports leagues across seasons, capturing full box scores and tracking player progression game-to-game. the hard part was the data model - and computing derived statistics without shipping raw rows to the client.',
        tags: ['laravel', 'mysql', 'vue.js', 'inertia.js', 'tailwind'],
        decisions: [
            {
                title: 'normalized multi-level data model',
                description:
                    'normalized schema that captures 50+ per-game stats with cross-season player progression'
            },
            {
                title: 'server-side derived stats',
                description:
                    'aggregates and derived metrics are computed on the server and surfaced through an SPA, keeping the client thin and the numbers consistent'
            },
            {
                title: 'inertia.js SPA architecture',
                description:
                    'leveraged inertia.js to bridge the gap between laravel and vue.js without standing up an unneccessary API layer'
            }
        ],
        highlights: [
            'interactive visualizations built with vue and apexcharts',
            'full box scores across 50+ stats per game',
            'cross-season player progression tracking'
        ],
        button_label: 'view on github',
        button_url: 'https://www.github.com/andrew-hayworth22/dynastatracker'
    },
    {
        title: 'andyhayworth.dev',
        tagline:
            "the site you're looking at right now! it's written in sveltekit, compiles to static artifacts, and is served to you via S3 and cloudfront.",
        description:
            'designed to be as lightweight and easy to deploy as possible, while still being optimized for SEO and collecting metrics for analysis using google analytics.',
        tags: ['sveltekit', 'typescript', 'aws', 's3', 'cloudfront', 'github actions'],
        decisions: [
            {
                title: 'sveltekit static adapter',
                description:
                    "leveraged sveltekit's static adapter to compile svelte code into static assets"
            },
            {
                title: 'AWS infrastucture as code',
                description:
                    'compiled cloudfront disribution and s3 bucket configuration into a cloudformation file for easily reproducible infrastructure.'
            },
            {
                title: 'google analytics',
                description:
                    'uses google analytics to track user behavior and to understand what projects people are interested in'
            }
        ],
        highlights: [
            'perfect 100 lighthouse score across the board',
            'completely automated deployments on push to main',
            'advanced analytics insights powered by google analytics'
        ],
        button_label: 'view on github',
        button_url: 'https://www.github.com/andrew-hayworth22/andyhayworth.dev'
    },
    {
        title: 'swagscript',
        tagline:
            'a programming language only the coolest, trendiest developers can use. jk i built this to learn about interpreters and how programming languages actually work.',
        description:
            'swagscript is a complete little language: a lexer, parser, and tree-walking interpreter built from the ground up in go, plus an interactive REPL. a deep-dive into how languages actually work under the hood.',
        tags: ['go'],
        decisions: [
            {
                title: 'hand-written lexer & pratt parser',
                description:
                    'tokens are produced by a hand-rolled lexer and assembled with pratt (top-down operator-precedence) parsing for clean handling of expression precedence.'
            },
            {
                title: 'tree-walking evaluator',
                description:
                    'the AST is evaluated directly, keeping the mental model simple and the implementation easy to extend with new node types'
            },
            {
                title: 'interactive REPL',
                description:
                    'a shell reads, evaluates, and prints in a loop so the language can be explored live'
            }
        ],
        highlights: [
            'supports variables, functions, and conditionals',
            'first-class closures over lexical scopes',
            'extensible AST designed for adding new syntax'
        ],
        button_label: "view on github",
        button_url: 'https://www.github.com/andrew-hayworth22/swagscript',
    },
    {
        title: 'pylibsrcml',
        tagline:
            'a published PyPI package wrapping the libsrcml C source-analysis tool via ctypes - making source-code analysis accessible to Python developers and researchers.',
        description:
            'authored and published during undergraduate research, pylibsrcml wraps the libsrcml C library through ctypes so researchers can run source-code analysis directly from python instead of shelling out to the native tool.',
        tags: ['Python', 'C'],
        decisions: [
            {
                title: 'ctypes over a C-extension',
                description:
                    'binding through ctypes avoided a compilation step for end users, making the package pip-installable across platforms without a build toolchain.'
            },
            {
                title: 'pythonic API surface',
                description:
                    'the raw C calls are hidden behind idiomatic python functions and types so users never touch pointers or manual memory handling.'
            },
            {
                title: 'published to PyPI',
                description:
                    'packaged and released publicly so other researchers could pip install and build on it.'
            }
        ],
        highlights: [
            'wraps the libsrcml C source-analysis tool.',
            'makes source-code analysis accessible from python.',
            'written during undergraduate research and published to PyPI.'
        ],
        button_label: 'view on github',
        button_url: 'https://github.com/srcML/pylibsrcml',
    },
    {
        title: 'mushroom-data-mining',
        tagline:
            "trained and compared three ML models to predict mushroom edibility and shipped a Flask app for real-time predictions. don't use this for real pls. :)",
        description:
            'a supervised-learning project that trains and compares three classifiers to predict whether a mushroom is edible from its physical characteristics, then wraps the best model in a flask app for real-time predictions.',
        tags: ['python', 'machine learning', 'scikit-learn', 'flask'],
        decisions: [
            {
                title: 'compared three model families',
                description:
                    'trained and benchmarked three classifiers side-by-side, selecting the random forest for its 100% accuracy on the holdout set.'
            },
            {
                title: 'feature-importance pruning',
                description:
                    'analyzed feature importance to prune the dataset to its most predictive attributes, simplifying the model without sacrificing accuracy.'
            },
            {
                title: 'shipped an inference UI',
                description:
                    'deployed the trained model behind a flask interface where users input characteristics and get an instant edibility prediction.'
            }
        ],
        highlights: [
            '100% accuracy with the random forest classifier.',
            'feature-importance analysis to prune inputs.',
            'real-time predictions through a flask web interface.'
        ],
        button_label: "view on github",
        button_url: 'https://github.com/andrew-hayworth22/mushroom-data-mining',
    }
];
