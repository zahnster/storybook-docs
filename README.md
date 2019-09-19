# SLDS Storybook Docs

[![CircleCI](https://circleci.com/gh/zahnster/storybook-docs.svg?style=svg)](https://circleci.com/gh/zahnster/storybook-docs)

## Overview

This is a prototype project conceptualizing how Storybook could be integrated into the SLDS development workflow and how we can enhance our testing and CI with CircleCI and a Storybook-based VRT solution.

This project utilizes Storybook 5.2 in order to test out several new Storybook advancements:

- [Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df)
- [Storybook Docs](https://github.com/storybookjs/storybook/blob/next/addons/docs/README.md)

## Installation and setup

Kick things off by cloning the repo and running `npm install`

### Setting up Storybook

Storybook can be started with `npm run storybook`

### Building the Docs

We utilize webpack to compile and compress the mdx files that comprise our docs. We pack this content for consumption by other projects. To run the build, run `npm run pack`. Files are built into `.dist`.

## General Notes

### File Structure and Organization

The Components in this spike are sourced from the Lightning Design System, and adhere to its structures regarding component hierarchy. Components live in `ui/components`, each a series of files within a folder named by the singular, TitleCase name of the component it describes.

Within each folder there are subfolders describing each component variant. Every component has, at minimum, a "Base" variant, which describes and documents its behavior and usage. It may also have examples and states that showcase different aspects of the component.

Since this project adheres to Storybook, file convention within each folder is in a `*.stories.js` format:

- `base.stories.js` - describes the base component story for the component variant
- `examples.stories.js` - describes example stories for the component variant
- `states.stories.js` - describes state stories for the component variant

For the purposes of this spike, we are utilizing the `@salesforce-ux/design-system` npm repo for the SLDS Stylesheet and assets, and thus we are not hosting or compiling any SLDS source Sass within this project.
