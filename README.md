#file structore


my-app/
│
├── public/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── api/
│   │   ├── index.js
│   │   └── apiConfig.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── styles/
│   │       ├── global.css
│   │       ├── variables.css
│   │       └── mixins.css
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Button.css
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.css
│   │   │   └── Footer/
│   │   │       ├── Footer.jsx
│   │   │       └── Footer.css
│   │   │
│   │   ├── specific/
│   │       ├── UserProfile/
│   │       │   ├── UserProfile.jsx
│   │       │   └── UserProfile.css
│   │       └── Dashboard/
│   │           ├── Dashboard.jsx
│   │           └── Dashboard.css
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   │
│   ├── pages/
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.css
│   │   ├── LoginPage/
│   │   │   ├── LoginPage.jsx
│   │   │   └── LoginPage.css
│   │   └── ProfilePage/
│   │       ├── ProfilePage.jsx
│   │       └── ProfilePage.css
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── services/
│   │   ├── authService.js
│   │   └── userService.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── validators.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── vite-env.d.ts
│   └── setupTests.js
│
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── yarn.lock
