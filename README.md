# Catch of the day coding challenge

## Overview

This challenge was to render products from an api using Typescript/Javascript + React with a state management tool of my choice.

## Install

Make sure you have node install.

1. Clone this repo
2. `yarn` or `npm i` to install the packages
3. `yarn start` or `npm start` to run the application

## Design decisions

The architecure was rather simple. We needed to have a component to fetch the data and then the rest of the app was soley manipulating the view based on the users selection. The state management that I chose was `redux` as thats the library I have the most familiarity with.

## Issues

I'd run into issues with `cors` on chrome when I made the fetch call.
