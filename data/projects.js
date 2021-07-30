const projects = [
    {
        name: 'To Do List',
        description: 'A full stack to-do list built with Express and Node.js with all the CRUD operations. The use of MongoDB as the database ensures proper storage of your todos. You can create, read, update and delete any todo as per your choice.',
        // subtitle: 'Project Subtitle',
        pic: '/toDoList.png',
        tech: ['Express', 'Node.js', 'MongoDB'],
        links: [
            {
                label: 'Website',
                icon: 'link',
                url: 'https://to-do-list-rahul5430.herokuapp.com/',
            },
            {
                label: 'Github',
                icon: 'github',
                url: 'https://github.com/Rahul5430/to-do-list',
            },
        ],
    },
    {
        name: 'Keeper App',
        description: 'A note taking app built with React with all the CRUD operations. You can create, read, update and delete any note as per your choice.',
        // subtitle: 'Project Subtitle',
        pic: '/keeperApp.png',
        tech: ['React', 'Material UI'],
        links: [
            {
                label: 'Website',
                icon: 'link',
                url: 'https://rahul5430.github.io/keeper-app//',
            },
            {
                label: 'Github',
                icon: 'github',
                url: 'https://github.com/Rahul5430/keeper-app',
            },
        ],
    },
    {
        name: 'Weather App',
        description: 'This Weather App has local and international weather forecasts from the most accurate weather forecasting technology featuring up-to-the-minute weather reports. The tech stack consists of Express & Node.js along with Open Weather Map API.',
        // subtitle: 'Project Subtitle',
        pic: '/weatherApp.png',
        tech: ['Express', 'Node.js', 'OpenWeatherMap API'],
        links: [
            {
                label: 'Website',
                icon: 'link',
                url: 'https://weather-app-rahul5430.herokuapp.com/',
            },
            {
                label: 'Github',
                icon: 'github',
                url: 'https://github.com/Rahul5430/weather-app',
            },
        ],
    },
];

export const extraProjects = [
    {
        name: '',
        description: '',
        pic: '',
        tech: ['', ''],
        links: [
            {
                label: 'Website',
                icon: 'link',
                url: '',
            },
            {
                label: 'Github',
                icon: 'github',
                url: '',
            },
        ],
    },
];

export default projects;