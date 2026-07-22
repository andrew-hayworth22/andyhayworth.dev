export interface Education {
    title: string;
    subtitle: string;
    dates: string;
    location: string;
    bullets: string[];
}

export const educations: Education[] = [
    {
        title: 'M.S. computer science',
        subtitle: 'computational data science',
        dates: 'aug 2023 - present',
        location: 'Kent State University · Kent, OH',
        bullets: [
            'coursework: advanced database system design, advanced operating systems, data mining techniques, artificial intelligence.'
        ]
    },
    {
        title: 'B.S. computer science',
        subtitle: 'game programming',
        dates: 'aug 2019 - may 2022',
        location: 'Kent State University · Kent, OH',
        bullets: [
            'coursework: data structures, algorithms, design patterns, and software engineering',
            'secretary & lead programmer for the Animation and Game Design Club'
        ]
    }
];
