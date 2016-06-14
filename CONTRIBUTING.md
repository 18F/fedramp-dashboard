# Contributing to the FedRAMP Dashboard

## Reporting Issues

When filing an issue, make sure to answer these five questions:

 1. What browser and version are you using?
 2. What operating system?
 3. What did you do?
 4. What did you expect to see?
 5. What did you see instead?

General questions should go to the [Gitter channel](https://gitter.im/truetandem/fedramp-dashboard) instead of the issue tracker.

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

### Tooling

#### Linters

For Ninjas (Vim) just install ```syntastic``` and everything should be handled.
For Pirates (Emacs) just install ```flycheck``` and everything should be handled.

For command-line alternatives there are the following:

 - For JavaScript, [JSHint](http://jshint.com) which may be installed with ```npm install -g jshint```
 - For HTML, [html-lint](https://github.com/curtisj44/HTML-Lint) which may be installed with ```npm install -g html-lint```

#### SASS

```
Placeholder
```

#### Testing

The testing framework will be written in [Jasmine](http://jasmine.github.io). Various runners may be used:

 - The in-browser runner
 - [Karma](https://karma-runner.github.io) is a command-line test runner

For code coverage we can leverage the following:

 - For in-browser coverage analysis we use [BlanketJS](http://blanketjs.org)
 - [Karma Coverage](https://github.com/karma-runner/karma-coverage) is a plug-in which may be used in tandem with the Karma test runner

## Public domain

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through
the CC0 1.0 Universal public domain dedication.

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.