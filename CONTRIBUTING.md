# Contributing to the FedRAMP Dashboard

## Reporting Issues

Before submitting a new issue, please consider the following:

 - Search this repository for open or closed issues that may relate to your pull request.
 - General questions should go to the [Gitter channel](https://gitter.im/truetandem/fedramp-dashboard) instead of the issue tracker.

To help us get a better understanding of the issue you are submitting, please use the following
[outline](.github/ISSUE_TEMPLATE.md).

## Contributing code

### Documentation

For JavaScript the [JSDoc](http://usejsdoc.org) format will be adhered to. The technical documentation will be generated using the
Node module [jsdoc](https://github.com/jsdoc3/jsdoc). This may be installed using ```npm install -g jsdoc```.

### Coding Standards

Standardized JavaScript will be enforced using JSHint. If any rules need to be adjusted beyond the default ruleset they
will be added to the ```.jshintrc``` file after being vetted by the core team.

### Branching

Development will always be done on a feature branch originating from the master branch.

An example of the workflow:

 1. Sync with master
    ```git checkout master && git pull```
 2. Create new branch associated with user story or task title in lowercase snake format.
    ```git checkout -b user_story_title```
 3. Work your magic...
 4. Check the current repository status
    ```git status```
 5. Stage files to be committed using the appropriate commands
    ```git add --all .```
 6. Commit your staged changes and associate it with the task number
    ```git commit -m '[TG-##] commit message'```
 7. Once have finished the task and the code has been tested and reviewed merge back to the master branch
    ```git checkout master && git pull && git merge user_story_title```
 8. After any conflicts have been resolved update the GitHub repository
    ```git push origin master```

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through
the CC0 1.0 Universal public domain dedication.

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
