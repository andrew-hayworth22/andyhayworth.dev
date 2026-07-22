export interface Job {
    title: string;
    company: string;
    companyURL: string;
    location: string;
    dates: string;
    bullets: string[];
}

export const jobs: Job[] = [
    {
        title: "senior software engineer",
        company: "Wodify Technologies LLC",
        companyURL: "http://www.wodify.com",
        location: "remote",
        dates: "nov 2024 - present",
        bullets: [
            "full-stack contributor driving feature delivery, code review, and technical decisions on a wellness platform serving 1M+ monthly users",
            "eliminated security vulnerabilities across 5+ apps by architecting a centralized JWT authentication service, now the platform standard for 10+ features",
            "introduced a JavaScript event library enabling direct component communication regardless of nesting depth — adopted platform-wide",
            "pioneered a data-fetching pattern cutting OutSystems request payloads by up to 8x and providing a major boost to developer experience"
        ]
    },
    {
        title: "lead software engineer",
        company: "BAM Technologies LLC",
        companyURL: "http://www.bamtech.net",
        location: "remote",
        dates: "nov 2023 - nov 2024",
        bullets: [
            "headed a team of engineers building an internal HR platform - anonymous feedback delivery & analysis, time-tracking, talent management, etc",
            "supported a CMMI Level 3 certification by delivering the platform in 6 months and demoing to 250+ employees",
        ]
    },
    {
        title: "software engineer",
        company: "BAM Technologies LLC",
        companyURL: "http://www.bamtech.net",
        location: "remote",
        dates: "may 2022 - nov 2023",
        bullets: [
            "built an HR platform for the U.S. Air Force with scrum teams in an Agile environment on Azure DevOps",
            "spearheaded AWS integration into a .NET microservice architecture — S3 document storage and SQS/SNS pub-sub event processing"

        ]
    },
    {
        title: "student applications developer",
        company: "Kent State University",
        companyURL: "http://www.kent.edu",
        location: "kent, ohio",
        dates: "may 2022 - nov 2023",
        bullets: [
            "iterated on faculty applications, LMS integrations, and other institutional",
            "built a full-stack application for remote research-material delivery with faculty, iterating from stakeholder demos"
        ]
    },

]
