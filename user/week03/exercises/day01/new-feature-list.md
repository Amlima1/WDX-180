# Step-by-step list for a new feature

- command1: `git branch`
- action1: this command is like the git status to know how many branches are there

- command2: `git branch name feature1`
- action2: This command creates a new branch named "feature1"

- command3: `git checkout feature1`
- action3: this command switches to feature1 branch so that you can work on it without affecting the main or origin or source or master branch

- command4: `git status`
- action4: this command helps you to check all the changes you made in feature ready to add

- command5: `git add.`
- action5: this command stages all the changes you made for the feature1

- command6: `git status`
- action6: this helps you to ensure that the changes are correctly staged. and to check the status of the repo

- command7: `git commit -m "commit message"`
- action7: this helps you to commit with a meaningful message the changes made for feature1

- command8: `git status`
- action8: this command helps you to check again the status to make sure there is no uncommitted changes

- command9: `git push main feature1`
- action9: this command push feature1 branch to the main repo

- command10: `pull request on Github`
- action10: at this stage, you create a pull request on your Github repo to merge feature1 into the main branch by providing details about the changes.

- command11: `git merge feature1`
- action11: this merges feature1 into the main branch after the pull request approval while being on the main branch. you cannot run this command if you are not on the main branch.

- command12: `git branch -d feature1`
- action12: this command deletes feature in the local repo if not needed



