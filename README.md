# Expert web development course

A course I gave for advanced web developers in Mexico City. The course has a
focus on development with the web components standard, and understanding the browser as a modern development platform in par with iOS and Android. #useThePlatform

The course took place on August 2017.

# Syllabus

1. Ecmascript
    1. Basics
        1. Values and Types
        1. Operators
        1. Variables
        1. Comments
        1. Comparisons. Falsy and Truthy statements.
        1. Control statements
             1. Conditionals
             1. Loops
             1. Switch
        1. Strict mode
        1. Functions
        1. this identifier
        1. Prototypes
        1. Polyfilling and transpiling
    1. Scope and closures
        1. What is a scope?
        1. Lexical scope
        1. Function scope vs. block scope
        1. Hoisting
        1. Scope closure
    1. This and object prototypes
        1. What is this?
        1. How this is assigned
        1. Binding exceptions
        1. Lexical this
        1. ES Objects
            1. Property descriptors
            1. Getters and setters
        1. Prototypes
        1. Prototypical inheritance
        1. Behavior delegation
    1. ES6 Block bindings
    1. Strings and regular expressions
    1. ES6 functions
        1. Default parameters
        1. Arrow functions
    1. ES6 Object functionality
    1. Destructuring
        1. Object destructuring
        1. Array destructuring
    1. Sets and maps
        1. Set and Weakset
        1. Map and Weakmap
    1. Iterators and generators
    1. ES6 Classes
    1. ES6 Arrays
    1. Promises and asynchronous programming
    1. ES6 Modules
1. Browser mechanics
    1. Critical rendering path
        1. DOM
        1. CSSOM
        1. Render tree
        1. Layout
        1. Composite
        1. Paint
    1. Engines (webkit, gecko, blink, spartan)
    1. Web APIs
1. Web components
    1. HTML imports
    1. Template tag
    1. Custom elements
        1. Defining a new element
        1. Extending other elements
        1. Custom elements reactions
        1. Properties and attributes
        1. Element upgrades
        1. Styling
        1. Unknown elements vs. undefined elements
    1. Shadow DOM
        1. What is shadow DOM?
        1. Composition and slots
        1. Styling
        1. Manipulating slots with JS
        1. Event model
        1. Handling focus
    1. Webcomponents.js
    1. Browser support
1. Polymer
    1. Custom elements
    1. Shadow DOM and styling
    1. Events
    1. Data system
    1. Polymer CLI
    1. Web component tester
    1. Polymer.json
1. Development tools (package managers and linters)
    1. Gulp
        1. Gulpfile
        1. Tasks
        1. Watch
        1. Plugins
    1. Bower
        1. bower.json specification
    1. NPM
        1. package.json specification
    1. ESLint
    1. Lighthouse
    1. Pagespeed
1. App architecture
    1. App shell
    1. App layout
        1. app-header-layout
        1. app-header
        1. app-drawer-layout
        1. app-drawer
        1. app-toolbar
        1. app-grid
    1. Routing
        1. app-route
        1. app-location
        1. iron-pages
    1. i18n
        1. app-localize-behavior
    1. PRPL
        1. Push
        1. Render
        1. Precache
        1. Lazy load
    1. Accessibility
        1. Focus and tabs
        1. Semantic markup
        1. Screen readers
        1. WAI-ARIA
        1. WCAG2
    1. MVCSS
        1. Styleguide
        1. Reset
        1. Helpers
        1. Config / Theme
        1. Base
        1. Tools
    1. Presentation, logic and data components
    1. Redux
        1. Three principles
        1. Actions
        1. Reducers
        1. Store
        1. Data flow
        1. Async actions
        1. Middleware
        1. PolymerRedux
    1. Analytics
        1. Google Analytics
        1. Custom events
        1. Custom dimensions
        1. Custom metrics
        1. Offline Analytics
    1. Performance
        1. RAIL
1. Progressive webapps
    1. HTTPS
        1. TLS
        1. Certificates
    1. HTTP/2
        1. Server push
        1. Multiplex
        1. Header compression
    1. Service workers
        1. Life cycle
        1. Offline models (runtime caching)
        1. sw-precache
        1. sw-toolbox
    1. Webapp manifest
        1. Webapp manifest specification
        1. Start URL
        1. Custom icons
        1. Splash screen
        1. Launch style
        1. Theme color
    1. Push notifications
        1. How push works
        1. Subscribing a user
        1. Web push protocol
        1. Handling push events
        1. Common notification patterns
1. Backend services
    1. Registrar
    1. DNS
    1. Firebase hosting
        1. Deploy
        1. Custom domains
        1. Hosting customization
    1. Firebase real time database
        1. Structure data
        1. Read / Write
        1. Database security rules
    1. Firebase Authentication
        1. Google auth
        1. Custom auth
        1. Anonymous auth
        1. User management
    1. Firebase Storage
        1. Upload, download and delete files
        1. Storage security rules
    1. PolymerFire
        1. firebase-app
        1. firebase-auth
        1. firebase-document
        1. firebase-query
    1. Cloud functions for firebase
        1. Database triggers
        1. Auth triggers
        1. Analytics triggers
        1. Storage triggers
        1. HTTP triggers
        1. pub/sub triggers
1. Final project
    1. Trip advisor clone
    1. Instagram clone

# Slides

https://docs.google.com/presentation/d/1wgIUHwkA42C1rImZmUWdXoIZptkrP3yrnQssHA70eqU/edit?usp=sharing

# Literature

* Archibald, Jake. https://jakearchibald.com/2017/es-modules-in-browsers/
* Biedelman, Eric. What is shadow DOM?.
* https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom
* https://developers.google.com/web/fundamentals/performance/rail
* https://developers.google.com/web/progressive-web-apps/
* https://developers.google.com/web/tools/
* ES6 Language Specification. http://www.ecma-international.org/ecma-262/6.0/
* Kosaka, Mariko. https://medium.com/@kosamari/how-to-be-a-compiler-make-a-compiler-with-javascript-4a8a13d473b4
* Mozilla Developer Network. https://developer.mozilla.org
* MVCSS. http://mvcss.io/
* Polymer Project. https://www.polymer-project.org
* Simpson, Kyle. You don’t know JS series. O’Reilly Media. 2015.
* Sturm, Gerwin. https://codingwithgerwin.blogspot.mx/2017/03/polymer-in-production.html
* Web APIs list. https://developer.mozilla.org/en-US/docs/Web/API
* https://www.webcomponents.org/
* https://www.webcomponents.org/community/articles/introduction-to-html-imports
* https://www.webcomponents.org/polyfills/
* Zachas, Nicholas. Understanding ECMAscript 6. No starch press. 2016.
