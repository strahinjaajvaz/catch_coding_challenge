# Catch of the day coding challenge

## Overview

This challenge was to render products from an api using Typescript/Javascript + React with a state management tool of my choice.

## Install

Make sure you have node install.

1. Clone this repo
2. Install both the client and server dependencies using `yarn` or `npm i` in their respective directory.
3. `yarn start` or `npm start` to run the application

## Design decisions

The architecure was rather simple. We needed to have a component to fetch the data and then the rest of the app was soley manipulating the view based on the users selection. The state management that I chose was `redux` as thats the library I have the most familiarity with. If this was a full scale application, then I'd render a error or products not found page. Since the `sortBy` options are in the header, it wouldn't make sense to render only the icon and some error text.

## Issues

I ran into issues with `cors`. I got around this by making a small `express` server to handle fetching the data and passing it, essentially acting as a proxy.

## Assumptions

I'm aware that `display: grid` isn't 100% compatible with IE11. For my code to be 100% compatible with IE11 I can use a library like Bootstrap for a grid, but I didn't want to use any external css for this challenge.
