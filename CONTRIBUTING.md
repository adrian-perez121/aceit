# Contribution Guidelines

The development environment for this project is designed to run with the use
of docker. 

## Getting Started
1. **Setting Up Docker:** First you have to start the docker development environment using `docker compose --profile dev up --build -d`.
    - This creates two containers (one for the frontend and one for the backend). 
    - Two volumes are also created and mounted with the local code. 
    Hence, if you make any changes, these changes will be passed into the container
    - If you like to view the logs occurring in each container, you can run `docker logs -f backend_dev` and
      `docker logs -f frontend_dev` in different terminals.
2. **Check your existing issues:** Before you get to work on something new, please make sure that you don't have any existing
issues open.
3. **Creating an issue:** This your unit of work
   + Issues can be created for a variety of things.
     + A New Feature
     + Fixing a Bug
     + Improving/Fixing Typos in documentation
## PR (Pull Request) Guidelines
1. **Issue Reference**
    + All PRs should reference a Github issue
2. **Branching**
   + No one can directly push to main.
   + To push to main you must create a branch
   + Branch names should include your first name + / + the feature you are working on. Ex `adrian/add-user-login`
3. **Commit Messages**
   + Commit messages should short but descriptive and reflective of the changes being made in the code.

## Code Formatting
+  To make sure your code is formatted correctly run `npm run format`. This command works in both the backend and 
frontend directories
+ To check if there are any problems with your code run `npm run lint`. This command will work with both the backend 
and frontend directories
