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

## npm Install Instructions
Inside your code editor, open up a new terminal. You should already be in the main aceit directory. For the backend, run: `cd backend`. For the frontend, run: `cd frontend`. Once you are in the correct directory, run: `npm install`.

## Git Version Control
To get the most up-to-date code from the main repository, run:
- `git pull`

To push modified code onto a new branch, run these in the terminal of your code editor:
- `git branch` → checks current branch
- `git branch name-of-your-branch` → creates a new branch
- `git checkout name-of-your-branch` → switches to new branch
- `git add [file directory]` → to stage changes
   - For example, if you made changes to App.tsx, you would run:
      - `git add frontend/src/App.tsx`
- `git status` → checks what was staged
- `git commit -m "add your message here"` 
- `git push --set-upstream origin name-of-your-branch` → pushes changes to the new branch. 

Once you have merged changes, pushed to main, and deleted the branch on GitHub, run the following in the terminal of your code editor:
- `git branch -d name-of-your-branch` → Deletes branch. Basically, one you delete the branch on GitHub, you also have to delete that branch in your code editor too. If there is a simpler process where we can achieve this in one step, this will be updated.

## Finishing Up
- When you are done coding for the day, run the following command: `docker compose --profile dev down --volumes`.
