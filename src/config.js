// config.js
module.exports = {
    github: {
        username: 'ghulamrasuldev', // Your GitHub org/user name. (Required)
        sortBy: 'updated', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: ['laravel-ecommerce','mad_final','my-website'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'ghulamrasuldev',
        twitter: 'ghulamrasuldev',
        facebook: 'ghulamrasuldev',
        dribbble: '',
        behance: '',
        medium: '@ghulamrasuldev',
        devto: '',
        website: 'http://www.ghulamrasuldev.com/',
        phone: '+923154970584',
        email: 'ghulam.rasool.uni@gmail.com'
    },
    skills: [
        'Kotlin',
        'Flutter',
        'Android',
        'Android Development',
        'MySQL',
        'Firebase',
        'Git',
        '2D Animation',
        'Adobe After Effects',
        'Adobe Illustrator',
        'Adobe Photoshop'
    ],
    experiences: [
        { 
            company: 'Kotlin Android Development',
            position: 'Full Stack Developer',
            from: 'April 2021',
            to: 'Present'
        },
        { 
            company: 'Flutter Application Development',
            position: 'Full Stack Developer',
            from: 'August 2020',
            to: 'April 2021'
        }
    ],
    education: [
        { 
            institution: 'COMSATS University Islamabad, Lahore Campus',
            degree: 'Bachelor of Computer Science',
            from: '2018',
            to: 'Present'
        },
        { 
            institution: 'Superior College Raiwind',
            degree: 'Higher Secondary Certificate (HSC)',
            from: '2016',
            to: '2018',
        },
        { 
            institution: 'Govt High School Raiwind',
            degree: 'Secondary School Certificate (SSC)',
            from: '2014',
            to: '2016'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'medium', // medium | dev.to
        username: '@ghulamrasuldev',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-SDMFKFM3R7' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  e.g 2617601 Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
