# Episode-2-Igniting our app-
## Theory

Qn1.? What is NPM?
-  NPM is anything but does not stands for Node Package Manager.
- NPM manages Package.
- NPM takes care of the versions of any library.
- NPM is responsible for installing,deleting and updating Javascript packages on your machine.
- NPM registry stores the package and we can simple use it by the following command .
##      npm install package-name

Qn2. What is Parcel/Webpack? Why do we need it?
- HTML,CSS and JS needs to be bundled together before we send it to production, so we need bundler for that.
- Webpack is a module bundler which is used to minify multiple files in a JavaScript project and increase the overall efficiency.
-Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser. 
- Modules are reusable chunks of code built from your app’s JavaScript, node_modules, images, and the CSS styles which are packaged to be easily used in your website. 
- Webpack separates the code based on how it is used in your app, and with this modular breakdown of responsibilities, it becomes much easier to manage, debug, verify, and test your code.
- Different types of bundler are Parcel, Webpack, etc.
- Create-react-app uses webpack behind the scenes.

Qn3. What is .parcel-cache? 
- Basically, Parcel stores the cached data in this file called .parcel-cache.
- Stored in binary form.
- stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.
  
Qn4. What is npx?
- npx is used to execute the Javascript packages.
- command is-
 ##  npx run/start package-name

Qn5. What is difference between dependencies and devDependencies?
- Dependencies are those dependencies which is required by your application  for production.
- DevDependencies are those dependencies which is required by your application  for local development and testing.
 
Qn6. What is Tree Shaking?
- Tree Shaking is also known as dead code elimination.
- It is removal of the unused code in production build.
- We can analyze our code and remove which is no longer needed.

Qn7. What is Hot Module Replacement?
- It is the automatic refreshing our page if we make any changes to the code and save them.

Qn8. List down 5 super powers of Parcel?Explain any 3.
- 5 superpowers are:
  1. creates Dev build.
  2. HMR.
  3. Minification of files-Minification reduces the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations.
  4. Bundling means combining or bundling files into a single file.
  5. Caching- stores data which leads to   faster builds.


Qn9. What is .gitignore file?What should be add and not add into it?
- Any file that we want to ignore and can be regenerated is added in .gitignore.
- The files that we can regenerate must not be added into .gitignore file 
 ## eg. node_modules
- the files that we cannot regenerate must not be added into .gitignore file
 ## eg. package.json

Qn10.  What is the difference between package.json and package-lock.json?
- Package.json contains the configuration for npm.
In this, the version is stored with ~(tilde) or ^(caret).

- Package-lock.json keeps a track of older versions that is being used.
It is lockfile that holds information on the dependencies or packages installed for a node.js project, including their exact version numbers.

Qn11.Why we can't modify package-lock.json ?
- It is generated file and cannot be edited manually by us.
- It's main aim is to track entire tree of dependencies and exact exact version of each dependency.

Qn12. What is node_modules?Should we push that on git?
- Node_modules is the exact place where the packages are stored.
- It is regenerated and contains large size of data so, it's better not to push it on git.

Qn13. WHat is the dist folder?
- dist folder contains dev build which will give  1 html, 1 js and 1 css files.
- These 3 files will be compressed, minified & are production ready code.

     ## building for dev: npx parcel index.html

Qn14. What is browsers list?
- In Browserslist, we specify the versions in which we want our web-application  to run smoothly.
- It might or might not run on other browsers but it will definitely run on specified browsers.
- ##  browserslist:[
   ##       "last 2 Chrome version"]
