# Zurgbot Gatsby Starter

### Here's What You Get
* [Gatsby](https://www.gatsbyjs.org/)
* [Sass](https://sass-lang.com/) (SCSS Flavored) CSS, Buzz Lightyear Style
* [Bulma](https://bulma.io) CSS Framework
* [React Helmet](https://github.com/nfl/react-helmet) `<head>` Management
* [React Icons](https://react-icons.github.io/react-icons/) SVG Icon Components (Including [Font Awesome](https://fontawesome.com) and others)
* [Eslint](https://eslint.org/) for JS linting
* [Prettier](https://prettier.io/) for JS formatting
* [StyleLint](https://stylelint.io) for Scss linting and formatting
* [Jest](https://jestjs.io) for a test framework
* [Enzyme](https://airbnb.io/enzyme/) for testing with React
* [Husky](https://github.com/typicode/husky) for git hooks, particularlly precommit management
* [Lint Staged](https://github.com/okonet/lint-staged) to run commands only on staged files
* [Bump](https://github.com/fabiospampinato/bump) for version management

## Getting Started

### Requirements
* [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)
* [Yarn](https://yarnpkg.com/en/)

### Quick Start
Run the following in your favorite terminal:
```
gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-zurg
```

### Starting from Scratch
* Set up Yarn: https://yarnpkg.com/lang/en/docs/install/
* Install the Gatsby CLI globally:
```
yarn global add gatsby-cli
```
* Inside the directory of your choice, scaffold a new Gatsby site:
```
gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-zurg
```
For example, if I want my installation in `~/Code/new-gatsby-site`, I would navigate to `~/Code` and run:
```
gatsby new new-gatsby-site https://github.com/colbyfayock/gatsby-starter-zurg
```
* Navigate to your new directory and run:
```
yarn develop
```
* You should now be running a new Gatsby site locally! 🎉

## More Details

### Why Did I Include X Package?

#### Sass
CSS-in-JS is all the rage right now, but stylesheets have a lot of advantages unless you're building an application the size of Facebook (exaggeration). When using stylesheets, Sass provides a lot of power to make working with it dynamic with well thought out ways of managing imports to focus style development.

#### Bulma
Bulma has a lot of good things going for it, like it's developer friendly nature and it's customization options. I particularly like it's use of flexbox for columns (though others have similar qualities).

#### React Helmet
Working with the `<head>` is hard, and Helmet makes this easy.

#### React Icons
This package makes working with icons fun again, with little hassle, a wide variety of icons, and importantly, it renders the components as an SVG node which is great for an app. Bonus: it includes Font Awesome, which has a lot of great icons.

#### Eslint
Eslint is a great framework for JS linting and is the backbone of most linting applications.

#### Prettier
Prettier does a bit better of a job managing formatting, so it's set up to run on top of the Eslint config rather than maintaining 2.

#### StyleLint
StyleLint gives us the ability to provide similar linting and formatting that we would get with Eslint and Prettier for our Scss.

#### Jest
Jest is pretty easy to set up and use. It's also pretty fast which is a nice bonus.

#### Enzyme
Enzyme makes testing React components simpler with it's APIs around rendering out the components.

#### Husky
Husky provides a good easily manageable way to set up git hooks. Particularly here, we run linting before a commit is able to be complete.

#### Lint Staged
Rather than run linting on every single file every single commit, we can use lint staged to only run on the files that are... well... staged on git.

### Bump
Bump provides a nice simple interface for working with versioning your app. Running `bump` along with the desired options gives you automation for git tagging, changelogs, npm package version increment, and more.
