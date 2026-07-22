export interface Project {
    title: string;
    description: string;
    tags: string[];
    githubURL: string;
}

export const projects: Project[] = [
    {
        title: "wodify-go",
        description:
            "a zero-dependency, idiomatic Go SDK for the Wodify REST API - type-safe HTTP client, retries with exponential backoff, and a mock-server harness enabling 100% coverage.",
        tags: ["Go", "net/http", "GitHub Actions"],
        githubURL: "https://www.github.com/andrew-hayworth22/wodify-go"
    },
    {
        title: "critiquefi",
        description:
            "a social media platform for rating and logging all forms of media from books to video games. one binary written in Go and SvelteKit.",
        tags: ["Go", "SvelteKit", "Postgres", "Docker", "Tailwind", "GitHub Actions"],
        githubURL: "https://www.github.com/andrew-hayworth22/critiquefi"
    },
    {
        title: "dynastatracker",
        description:
            "a full-stack football statistics application used to track and visualise stats from college football video games.",
        tags: ["Laravel", "MySQL", "Vue.js", "Inertia.js", "Tailwind"],
        githubURL: "https://www.github.com/andrew-hayworth22/dynastatracker"
    },
    {
        title: "andyhayworth.dev",
        description: "the site you're looking at right now! it's written in sveltekit, compiles to static artifacts, and is served to you via S3 and CloudFront.",
        tags: ["SvelteKit", "TypeScript", "AWS", "S3", "CloudFront", "GitHub Actions"],
        githubURL: "https://www.github.com/andrew-hayworth22/andyhayworth.dev",
    },
    {
        title: "swagscript",
        description:
            "a programming language only the coolest, trendiest developers can use. jk i built this to learn about interpreters and how they work.",
        tags: ["Go"],
        githubURL: "https://www.github.com/andrew-hayworth22/swagscript"
    },
    {
        title: "pylibsrcml",
        description: "a published PyPI package wrapping the libsrcml C source-analysis tool via ctypes - making source-code analysis accessible to Python developers and researchers.",
        tags: ["Python", "C"],
        githubURL: "https://github.com/srcML/pylibsrcml",
    },
    {
        title: "mushroom-data-mining",
        description: "trained and compared three ML models to predict mushroom edibility and shipped a Flask app for real-time predictions. don't use this for real pls. :)",
        tags: ["Python", "Machine Learning", "scikit-learn", "Flask"],
        githubURL: "https://github.com/andrew-hayworth22/mushroom-data-mining",
    }

];
