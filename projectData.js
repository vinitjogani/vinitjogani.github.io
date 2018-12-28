var projectData = [
    {
        title: "Affective Computing",
        org: "data science team",
        lang: "Python",
        technologies: "Python, OpenCV, Tensorflow/Keras",
        image: "affective.png",
        description: `
        I am currently working in a group within the Data Science Team at the University of Toronto for detecting human emotions within pictures and videos. We trained a CNN on the training dataset, and used OpenCV's Haar Cascade Classifier for detecting faces.
        <br><br>

        We are working on cool applications of this model. For example, we are working on building an app where you can click a selfie and it plays a song based on the emotions in that selfie. A useful application of this can be detecting mental health illnesses from social media, if combined with sentiment analysis.
        <br><br>

        It is still a work in progress, and we continue to improve the model accuracy as well as its applications. The model was trained on Google Colab.
        `
    },
    {
        title: "Drone Marker Detection",
        org: "aerospace team",
        lang: "Python",
        technologies: "Python, OpenCV",
        image: "drone.png",
        description: `
        The UofT Aerospace Team is an interdisciplinary university design team that builds rockets, drones and satellites. The UAV division is responsible for building drones and competing in various competitions, including AUVSI. One of the key tasks in the competition is to detect and geolocate markers on the field. I built techniques to filter out irrelevant images and extract salient features in the relevant images.
        <br><br>
        
        Through image manipulation involving edge and line detection, color transformation, and more, the system reduced the search by about 90% while reducing false negatives for maintaining fault tolerance. This was previously done manually, which was not only inefficient, but also inaccurate at times because it is easy to miss a 50x50 pixel marker in 5120x5120 pixel images being streamed in real-time.
        <br><br>

        As we continue to gather more data from competitions, I look forward to using CNNs to detect the markers with increased accuracy, while also classifying the content (color and letter) that needs to be submitted to the server during the competition.
        `
    },
    {
        title: "Haven: Social Platform",
        org: "independent project",
        lang: "Python",
        image: 'haven.png',
        technologies: "Python, Flask, JavaScript, Vue, Firebase, Clarifai, Google Cloud Platform, MonkeyLearn, NLTK",
        description: `
        Imagine a social media platform that resonates positivity. Think about the potential misuse of social media platforms that exist out there: including cyber-bullying. These have a great deal of psychological damage, especially on middle-school students.
        <br><br>

        Haven is a social media platform I built over a weekend at Yale's YHack 2018. It aims to provide a safe social platform for students in middle school by creating a safety switch using sentiment analaysis and image recognition techniques. In particular, the platform only allows positive things to be posted. We used sentiment and profanity detection to block negative content. We used image recognition to block all inappropriate content. We also transcribed uploaded audio to text, checked for profanity and automatically censored swear words.
        <br><br>

        Moreover, the platform also offers school administrators to get a higher level overview of the mental status of their students. We intend the system to be used as the endorsed and isolated platform in a school setting, where students who frequently try to go over the negativity thresholds can be helped by their counsellors.
        `,
        links: {
            'Video demo': 'https://www.youtube.com/watch?v=XFEDHDVWAS0&t=5s',
            'Presentation': 'https://docs.google.com/presentation/d/1P0pHvUGOnDMHyr9nuK7sNeX0eSr6iNu80uUu-dvsTS8/edit?usp=sharing'
        }
    },
    {
        title: "The Catalyst (DEE)",
        lang: "Figma",
        org: "school project",
        technologies: "Figma UI",
        image: 'dee.png',
        description: `
        The Catalyst was a design project we worked on as a part of an HCI course, whose core features were letting users discover interesting events in their neighborhood, engage with other people at those events through icebreakers and games and extend their relationship after the event by keeping in touch and going to future events together.
        <br><br>

        While it wasn't actual implementation, we worked on a clickable high-fidelity prototype to conduct usability tests. Throughout the process, we involved various stakeholders and experts, following the user-centered design process to enhance the social fabric. In particular, we conducted background research, formative studies, paper prototype testing, heuristic evaluations, think alouds and usability tests.
        `,
        links: {
            'Prototype': 'https://www.figma.com/proto/WuB4hAHwHc9M12Rj1tdBKBtX?node-id=0%3A1&viewport=982%2C418%2C0.5&scaling=scale-down'
        }
    },
    {
        title: "Tensorslow",
        org: "independent project",
        lang: "C#",
        technologies: "C#",
        image: 'tensorslow.png',
        description: `
        Tensorslow is a miniature implementation of Tensorflow which I made to learn about and experiment with automatic differentiation. As of now, it has a Gradient Descent Optimizer and support for variables and matrices. The code makes use of interfaces and object-orientation, so extending it is straightforward.
        <br><br>

        However, C# doesn't support vectorization out of the box, so the performance is still incredibly slow to be used for any production use. Yet, it is functional, and can be fast enough for fitting a simple linear model for example.
        `,
        links: {
            'Source code': 'http://github.com/vinitjogani/tensorslow'
        }
    },
    {
        title: "Dino Jump",
        org: "school project",
        lang: "Verilog",
        image: 'dino.jpg',
        technologies: "Verilog, ModelSim, DE1-SOC",
        description: `
        Dino Jump is an implementation of the Chrome no-internet page's game in Verilog to run on an FPGA board as part of a Microprocessors course I took. I worked on this with a friend and built it using a control unit and a datapath that worked together responding to inputs. It helped us better appreciate the intricacies and complexities of how everthing works under the hood.
        <br><br>

        There were randomly generated blocks, whose position and delay was determined using a Linear Feedback Shift-Register. The user could jump, move and duck. The blocks sped up as your score increased, and there was also a high-score counter. The key challenge in this project was the animation of sprites. Most interestingly, we implemented acceleration and deceleration of the dino during the jump phase, which was surprisingly complicated.
        `,
        links: {
            'Source code': 'https://github.com/vinitjogani/dino-jump'
        }
    },
    {
        title: "IntelliPrice",
        org: "lemon technologies",
        lang: "Python",
        image: 'intelliprice.png',
        technologies: "Python, Scikit-Learn, Matplotlib, Pandas, Plotly",
        description: `
        Diamonds are an infinitely differentiated commodity with too many salient features. This often creates discrepancies in their pricing at large diamond manufacturers since there is no real rule for determining the price of a diamond. I worked on an R&D project to train a machine learning model to better price diamonds.
        <br><br>

        There were various challenges. The data was not nearly enough with respect to the number of features, to train a high-parameter model like a neural network. The input data itself was highly volatile, and training a stable model on that was tricky. Also, only diamonds in the local neighborhood of the target diamond seemed to really affect its price as any higher level trend in the features was masked by the variations in other features.
        <br><br>

        At the end, however, I was able to fit a model that decreased the volatility from 40% in the original data to 5%. Moreover, we were able to use this as a "best-fit" model to compute outliers and spot potential mistakes in the pricing of specific or certain groups of diamonds. I also made a Plotly GUI to visualize pricing predictions averaged over multiple models each of which worked better in specific situations.
        <br><br>
        
        In this process, I greatly admired the R Shiny library for making these GUIs, so I developed a similar library Diny for Python that wrapped around Plotly/Dash.
        `,
        links: {
            'Diny': 'https://github.com/vinitjogani/diny'
        }
    },
    {
        title: "Diamond Week Portal",
        org: "lemon technologies",
        lang: "Php",
        image: 'bdw.png',
        technologies: "PHP, WordPress, MySQL, Bootstrap",
        description: `
        The Bharat Diamond Week is a semiannual diamond expo with visitors from all over the world. We built a sustainable solution for registering users, accepting payments and managing events so that new events could be added and maintained by the event administrators easily. The portal also had blog and information about past events.
        <br><br>

        Before the system was put into place, registrants would need to fill in long forms for every edition of the event that they wanted to attend. The event administrators could also select whose registration they wanted to accept, and email notifications were sent to the visitors throughout the process.
        `
    },
    {
        title: "PSR Database",
        org: "innovation hub",
        lang: "AppScript",
        image: 'ihub.png',
        technologies: "Google Apps Script",
        description: `
        I volunteered in the Information Design Team at the Innovation Hub at the University of Toronto to create a database of all the Programs, Services and Resources offered by the UofT Student Life because no such database existed. However, the key purpose of this project was to do this in a methodical manner to learn about user's needs so that we have just the right fields, with appropriate naming and types. This involved user research, interviews, brainstorming sessions with key stakeholders, etc. so that we made sure we were considering everyone's perspectives.
        <br><br>

        In the end, I built a minimum viable product in Google Apps Script connected to Google Sheets. The schema was also defined in a sheet on the same file based on which the form was dynamically populated. Then, there was a screen to visualize the different parameters for a bird's eye view of the PSR initiatives submitted. This would foster interaction between departments to avoid duplicates, and would also provide a unified way for the UofT Concierge (a pilot project also by the Innovation Hub) to serve information to students.
        `
    },
    {
        title: "Prideas",
        org: "independent project",
        lang: "Android",
        image: 'prideas.png',
        technologies: "Kotlin, Firebase",
        description: `
        Prideas was an Android app for developers to share their ideas and get feedback on them from other developers, before they spent effort building and developing the idea. Users can save ideas, and view each other's profiles. The main challenge I was trying to address was how you really like and idea, and think it'd be a really awesome app, but either something like that exists or it's not useful enough or people would just not want to use it. Prideas was a way to foresee this by shooting around ideas (e.g. for side projects) before taking them up (rate the problem), while working on them (rate the solution), and even after finishing the product (rate the product).
        <br><br>

        It never really took off (the irony), but it was my first app on the play store and I intended to gain experience in native app development. I realized how much I loved Firebase and not having to worry about setting up a backend with all the boilerplate.
        `
    },
    {
        title: "Restman",
        org: "school project",
        lang: "Java",
        image: 'restman.png',
        technologies: "Java, JavaFX, MVC, OOP",
        description: `
        Restman was a graphical restaurant management system with support for multiple users with different roles (servers, cooks and managers). We handled the inventory management, order management, including rejects and remake requests from customers, statistical dashboard to say sales by product, time (week/month), and more.
        <br><br>
        
        The key focus of the project was to make it as extendable as possible, having made it as a part of a Software Design course. We adhered to the SOLID principles to produce a good object-oriented design. We implemented various design patterns to achieve this, including most significantly a model-view-controller-service architecture to modularize the different parts of the code. Persistence was achieved by serializing the required objects into a data file.
        `,
        links: {
            'Source code': 'https://github.com/vinitjogani/restman'
        }
    },
    {
        title: "LastFM GraphQL Wrapper",
        org: "independent project",
        lang: "JavaScript",
        image: 'gql.png',
        technologies: "JavaScript, GraphQL, Express, ES6",
        description: `
        This project was an exploration into GraphQL as I wanted to see for myself what all the hype was about. At the time, I was working on a music app for Android, and I was using the LastFM API for looking up songs, albums and artists. However, due to the limitations of REST and the structure of the LastFM API, I found that I had to make several calls to extract all the information I needed to display.
        <br><br>

        From my experience, I found that GraphQL was perfect for this use case. There's situations where the REST API is simple enough and GraphQL would be overkill. However, when APIs get complex because the underlying structure of data is complex, GraphQL can help build performant and organized applications.
        `,
        links: {
            'Source code': 'https://github.com/vinitjogani/lastfm-graphql-wrapper'
        }
    },
    {
        title: "Procure",
        lang: "C#",
        org: "school project",
        image: 'procure.png',
        technologies: "C#, ASP.NET Razor Pages",
        description: `
        Procure was a web procurement tool which reversed the workflow of a marketplace like Amazon. Instead of buyers finding products posted by sellers, suppliers could sort through procurement requests by companies. Then, the suppliers would place a bid so that the buyer gets the most competitive prices. There were also features of ratings and reviews, which gave users more insight into who they were doing business with.
        <br><br>

        The purpose of this project was that this went through a complete software development life cycle, with initial interviews, planning, design documents and then finally the implementation i.e. the process was given more emphasis than the product itself. Keeping the stakeholders in the loop throughout the process was part of the key learnings we were taught in this high-school course about situating Information Technology in a Global Society.
        `
    },
    {
        title: "The Fizz Way",
        image: "fizz.jpg",
        lang: "JavaScript",
        org: "service project",
        technologies: "JavaScript, Angular v1, Google Apps Script",
        description: `
        The Fizz Way was an effort to make high-school physics more accessible. Physics was presented to us as a really dry subject, but as someone really enthusiastic about it, I decided with a friend to develop an online portal using Angular that allows users to learn topics with cartoons, tests, read-alouds and forums!
        <br><br>

        To make it as hassle-free as possible, the questions were stored in local storage instead of a sign-in list, and automatically entered into a spreadsheet of questions using Google Apps Script. This was preceded by a similar venture called Codecakes which aimed to teach students from all over the world to code.
        `,
        links: {
            'Live demo': 'http://thefizzway.github.io',
            'Source code': 'https://github.com/thefizzway/thefizzway.github.io',
            'Codecakes': 'https://www.youtube.com/channel/UC1YbDT5UH-DLAGZ0t6dd2KA'
        }
    },
    {
        title: "Metadon: Card Game",
        org: "independent project",
        lang: "JavaScript",
        image: 'metadon.png',
        technologies: "JavaScript, MeteorJS, MongoDB",
        description: `
        Metadon is a realtime 3-player card game that I built to prolong an enjoyed family pasttime when I headed off to University. It can be played from anywhere around the world over the internet, uses Mongo as the backend for storing game data, and uses Meteor to provide all these APIs and more. Users can sign in to their account and send each other game requests while they wait to play the game.
        `,
        links: {
            'Source code': 'http://github.com/vinitjogani/metadon',
            'Live demo': 'http://metadon.herokuapp.com',
        }
    },
    {
        title: "Firebrick",
        lang: "C#",
        image: 'firebrick.png',
        org: "independent project",
        technologies: "C#, Firebase, Angular v1",
        description: `
        Firebrick was a surveillance application with a client application and a web dashboard. The client was made in Windows Forms that collected keystrokes, screenshots, and app usage data. 
        <br><br>

        All the information was synced to the database and displayed in real-time on an Angular web dashboard using Firebase (realtime database and storage). This included some visualizations (e.g. donut chart for app usage) and filtering options (by date/time and user). 
        <br><br>

        It had many configuration options, including setting screenshot interval, upload interval, and individual features could be used in isolation. For example, employees' usage of different apps, including idle time, could be monitored without screenshots and keystrokes.
        `
    },
    {
        title: "FireGuess",
        org: "independent project",
        lang: "Android",
        image: 'fireguess.png',
        technologies: "JavaScript, jQuery, Cordova, PhoneGap, Google Translate",
        description: `
        Fireguess was my first Android app where users were shown the name of a random song from the Billboard Top 50 translated to Hindi, and they were to guess the real name of the song. It was an entertaining and funny game built in pure JavaScript using calls to the Google Translate API.
        `,
        links: {
            'Source code': 'https://github.com/vinitjogani/fireguess'
        }
    }
]; 