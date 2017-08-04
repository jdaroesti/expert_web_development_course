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
    1. Engines (webkit, gecko, blink, spartan) / (nitro, spiderMonkey, v8, chakra)
    1. Critical rendering path
        1. DOM
        1. CSSOM
        1. Render tree
        1. Layout
        1. Paint
        1. Composite
    1. Platform
        1. DOM manipulation
        2. Events
        3. Networking
        4. Web APIs
    1. OS bindings
1. Web components
    1. Template tag
        1. Previous client side templating techniques
        1. How to use an HTML template?
    1. Shadow DOM
        1. What is shadow DOM?
        1. Composition and slots
        1. Styling
        1. Manipulating slots with JS
        1. Event model
        1. Handling focus
    1. Custom elements
        1. Defining a new element
        1. Extending other elements
        1. Custom elements reactions
        1. Properties and attributes
        1. Element upgrades
        1. Styling
        1. Unknown elements vs. undefined elements
    1. HTML imports
        1. Basics
        1. Execution order
        1. Dependency management (de duping)
    1. Webcomponents.js
    1. Browser support
1. Polymer
    1. Under the hoods
        1. Polymer 2.0
        1. Mixins, Elements and utils
        1. UI and application elements
    1. Custom elements
        1. Custom elements concepts
        1. Define an element
        1. Declare properties
    1. Shadow DOM and styling
        1. Shadow DOM concepts
        1. DOM templating
        1. Style shadow DOM
        1. Custom CSS properties
    1. Events
        1. Handle and fire events
        1. Gesture events
    1. Data system
        1. Data system concepts
        1. Work with object and array data
        1. Observers and computed properties
        1. Data binding
        1. Helper elements
    1. Polymer CLI
        1. Installation
        1. Commands
    1. Web component tester
        1. Mocha
        1. Chai
        1. Test fixture
    1. Polymer.json
        1. Entrypoint
        1. Shell
        1. Fragments
        1. Other configurations
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
    1. Feature detection (Modernizr)
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

* Archibald, Jake. ES modules in browsers. https://jakearchibald.com/2017/es-modules-in-browsers/
* Archibald, Jake. The offline cookbook. https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
* Archibald, Jake. The service worker lifecyle. https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/lifecycle
* Biedelman, Eric. What is shadow DOM?. https://developers.google.com/web/fundamentals/getting-started/primers/shadowdom
* Biedelman, Eric. Custom elements v1. https://developers.google.com/web/fundamentals/getting-started/primers/customelements
* Biedelman, Eric. HTML imports. https://www.html5rocks.com/en/tutorials/webcomponents/imports/
* Biedelman, Eric. Html's new template tag. https://www.html5rocks.com/en/tutorials/webcomponents/template/
* Brubeck, Matt. https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html
* Burns, Peter. Encapsulated routing with elements. https://www.polymer-project.org/blog/routing
* Burns, Peter. Modular routing. https://www.youtube.com/watch?v=FbJQ4ghag_M
* Crockford, Douglas. The javascript trilogy. https://www.youtube.com/playlist?list=PL5586336C26BDB324
* CSS reflow demo. https://www.youtube.com/watch?v=ZTnIxIA5KGw
* CSS triggers. https://csstriggers.com/
* https://developers.google.com/web/fundamentals/performance/rail
* https://developers.google.com/web/progressive-web-apps/
* https://developers.google.com/web/tools/
* Dodson, Rob. Introduction to focus. https://developers.google.com/web/fundamentals/accessibility/focus/
* Dodson, Rob. Polymer 2.0 Under the hoods. https://www.youtube.com/watch?v=9vYJ8K6A_Kc
* Dutton, Sam. Progressive Web Apps Course. https://www.youtube.com/playlist?list=PLNYkxOF6rcIAdnzEsWkg0KpMn2WJwMBmN
* ES6 Language Specification. http://www.ecma-international.org/ecma-262/6.0/
* Garsiel, Tali. How browsers work internally? https://vimeo.com/44182484
* Gaunt, Matt. Service workers: an introduction. https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
* Gaunt, Matt. The webapp manifest. https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
* Gaunt, Matt. Intro to Gulp. https://www.youtube.com/watch?v=N42LQ2dLoA8
* Ginsberg, Wendy. Building Progressive Web Apps with Polymer. https://www.youtube.com/watch?v=fKsVXO3AztY
* Glazkov, Dimitri. What the heck is shadow DOM? https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/
* Grigorik, Ilya. Introduction to HTTP/2. https://developers.google.com/web/fundamentals/performance/http2/
* Irish, Paul. https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
* Kearney, Meggin. Introduction to ARIA. https://developers.google.com/web/fundamentals/accessibility/semantics-aria/
* Kearney, Meggin. Introduction to semantics. https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/
* Kearney, Meggin. The accessibility tree. https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree
* Kitamura, Eiji. Introduction to HTML imports. https://www.webcomponents.org/community/articles/introduction-to-html-imports
* Kitamura, Eiji. Introduction to the template element. https://www.webcomponents.org/community/articles/introduction-to-template-element
* Kitamura, Eiji. Introduction to Shadow DOM. https://www.webcomponents.org/community/articles/introduction-to-shadow-dom
* Kitamura, Eiji. Introduction to Custom Elements. https://www.webcomponents.org/community/articles/introduction-to-custom-elements
* Kosaka, Mariko. https://medium.com/@kosamari/how-to-be-a-compiler-make-a-compiler-with-javascript-4a8a13d473b4
* Maynard, Travis. Getting started with Gulp. Packt publishing. 2015.
* Medley, Joseph. Web push notificaitons: timely, relevant, precise. https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/
* Moore, John. Getting organized with NPM and Bower. https://www.packtpub.com/books/content/getting-organized-npm-and-bower
* Mozilla Developer Network. https://developer.mozilla.org
* MVCSS. http://mvcss.io/
* Norton, Gray. Data flow in Polymer Elements and Apps. https://www.youtube.com/watch?v=pAW4YDLtPVs&t=1390s
* Osamani, Addy. The PRPL pattern. https://developers.google.com/web/fundamentals/performance/prpl-pattern/
* Osamani, Addy. The app shell model. https://developers.google.com/web/fundamentals/architecture/app-shell
* Osamani, Addy. Instant Loading with the App Shell Model. https://www.youtube.com/watch?v=QhUzmR8eZAo
* Page, Wilson. http://wilsonpage.co.uk/preventing-layout-thrashing/
* Pontelin, Teemu. State of Web Components and Polymer 2.0. https://www.youtube.com/watch?v=aZyt5K0HYVg
* Posnick, Jake. Service worker registration. https://developers.google.com/web/fundamentals/instant-and-offline/service-worker/registration
* Polymer Project. https://www.polymer-project.org
* Polymer Project. https://github.com/Polymer/polymer
* Polymer Project. The PRPL pattern. https://www.polymer-project.org/2.0/toolbox/prpl
* Polymer Project. Routing. https://www.polymer-project.org/2.0/toolbox/routing
* Polymer Project. Layout. https://www.polymer-project.org/2.0/toolbox/app-layout
* Russel, Alex. Progressive Web Apps. https://www.youtube.com/watch?v=x7cfLDFVyHo
* Seddon, Ryan. So how do the browser actually renders a website? https://www.youtube.com/watch?v=SmE4OwHztCc
* Simpson, Kyle. You don’t know JS series. O’Reilly Media. 2015.
* Sturm, Gerwin. https://codingwithgerwin.blogspot.mx/2017/03/polymer-in-production.html
* Web APIs list. https://developer.mozilla.org/en-US/docs/Web/API
* Web components catalog. https://www.webcomponents.org/
* Webcomponents polyfills. https://www.webcomponents.org/polyfills/
* webcomponents.js polyfills. https://github.com/webcomponents/webcomponentsjs
* Walto, Philip. Web components and the future of modular CSS. https://philipwalton.github.io/talks/2015-10-26/
* Wiltzius, Tom. https://www.html5rocks.com/en/tutorials/speed/layers/
* Zachas, Nicholas. Understanding ECMAscript 6. No starch press. 2016.
