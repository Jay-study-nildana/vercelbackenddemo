# Vercel Demo 

This is a stripped down minimal version of the code, which shows a simple server. 

for the original code, check out the branch, [Previously](https://github.com/Jay-study-nildana/vercelbackenddemo/tree/Previously)

# how to run

```
    npm install
    nodemon index.js
```

note: you will have to install nodemon globally. 

# things to remember

1. we are not actually using the mongo db things. 
1. endpoint 1, http://localhost:4000/hellojson
1. endpoint 2, http://localhost:4000/hello

# things to remember : vercel.json

The entire deployment magic with vercel, only happens after you add the 'vercel.json' file to your project root. it will look something like this.

```
{
    "version": 2,
    "builds": [
      {
        "src": "index.js",
        "use": "@now/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "index.js"
      }
    ]
  }
```
If you don't put this, then, deployment will nto give any errors, but, you will simply see the "source code of index.js" in your deployment.

# things to remember : successive deployments

Please remember that only the first deployment is pushed directly to the main production URL. Successive commits and push will default to the 'dev' deployment domains. So, you may have to "Promote to Production" in your vercel dashboard.

# things to remember : CORS

Now, after deployment, you try to access the api endpoint, you may get the following error. 

```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://bfsdfbackendapril4th2023.vercel.app/hellojson. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 200.
```
Then, that means, we need to enable CORS. There are many ways to do it. one way to do it is, like this.

Step 1. 

```
// import cors
const cors = require("cors");
```
Step 2.

```
app.use(cors()); 
```

# References

1. https://medium.com/projectwt/github-actions-node-js-azure-web-app-what-a-insert-expletive-nightmare-863ece42485a
1. https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-windows#you-do-not-have-permission-to-view-this-directory-or-page
1. https://github.com/actions/setup-node#checking-in-lockfiles
1. https://iamtimsmith.com/blog/creating-a-basic-server-with-express-js/
1. https://ourcodeworld.com/articles/read/261/how-to-create-an-http-server-with-express-in-node-js
1. https://stackoverflow.com/questions/61186632/deploy-simple-express-app-to-azure-app-service
1. https://github.com/Azure-Samples/nodejs-docs-hello-world

# Special Thanks to the following students.

1. Mayank : https://github.com/Mayank-Jain-1
1. Akshat : https://github.com/Akki-Rawat
1. Sukwant : https://github.com/sukhepadda/

Original Source Code: https://github.com/Mayank-Jain-1/SpoonFed.github.io

# Hire Me

I work as a full time freelance coding tutor. Hire me at [UpWork](https://www.upwork.com/fl/vijayasimhabr) or [Fiverr](https://www.fiverr.com/jay_codeguy). 

# Hobbies

I try to maintain a few hobbies.

1. Podcasting. You can listen to my daily life [podcast](https://stories.thechalakas.com/listen-to-podcast/).
1. Podcasting. You can listen to my movies [podcast](https://sandkdesignstudio.in/jays-movie-podcast/).
1. Photography Nature. You can see my photography on [Unsplash](https://unsplash.com/@jay_neeruhaaku).
1. Photography Fashion. You can see my fashion photography on [Behance](https://www.behance.net/vijayasimhabr)
1. Digital Photorealism 3D Art. You can see my work on [ArtStation](https://www.artstation.com/jay_kalenildana).
1. Daily Life Blog. [Read it here](https://medium.com/the-sanguine-tech-trainer).
1. Coding and Technology Blog. [Read it here](https://medium.com/projectwt).
1.  Daz 3D, Photography and Photoshop Blog. [Read it here](https://medium.com/random-pink-hula).

# important note 

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.

1. Jay's [Developer Profile](https://jay-study-nildana.github.io/developerprofile)
1. Jay's [Personal Site](https://stories.thechalakas.com/)
