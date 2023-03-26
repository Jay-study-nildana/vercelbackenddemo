# Node JS Hello World

Node JS Hello World.

note: project borrowed from, https://github.com/Jay-study-nildana/NodeJSForStudents/tree/main/NodeJSHelloWorld

# web.config IMPORTANT

after each deployment, the web.config file is overwritten by github actions. So, the app will stop working. So, until I find a better solution, TODO, you need to update this specific line using Kudu Console.

PRESENT, after deployment.

```
    <action type="Rewrite" url="index.js"/>
```
AFTER (your changes), as the final files are in the dist folder.
```
    <action type="Rewrite" url="dist/index.js"/>
```

# things to remember

1. you would learn much more about the deployment complexities if you compare the above linked 'localhost' only project with this project, which has been modified for localhost and also deployment.
1. like, file by file, really, and apperciate the differences
1. read my blog post below, which explains what a nightmare it was to make it work.

# References

1. https://medium.com/projectwt/github-actions-node-js-azure-web-app-what-a-insert-expletive-nightmare-863ece42485a
1. https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-windows#you-do-not-have-permission-to-view-this-directory-or-page
1. https://github.com/actions/setup-node#checking-in-lockfiles
1. https://iamtimsmith.com/blog/creating-a-basic-server-with-express-js/
1. https://ourcodeworld.com/articles/read/261/how-to-create-an-http-server-with-express-in-node-js
1. https://stackoverflow.com/questions/61186632/deploy-simple-express-app-to-azure-app-service
1. https://github.com/Azure-Samples/nodejs-docs-hello-world

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