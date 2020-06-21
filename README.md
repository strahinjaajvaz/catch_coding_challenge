# Catch of the day coding challenge

## Overview

This challenge was to render products from an api using Typescript/Javascript + React with a state management tool of my choice.

## Install

Make sure you have node install.

1. Clone this repo
2. Install both the client and server dependencies using `yarn` or `npm i` in their respective directory.
3. `yarn start` or `npm start` to run the application

## Design decisions

The architecure was rather simple. We needed to have a component to fetch the data and then the rest of the app was soley manipulating the view based on the users selection. The state management that I chose was `redux` as thats the library I have the most familiarity with.

## Issues

I'd run into issues with `cors` on chrome when I made the fetch call. I got around this by making a small `express` server to handle fetching the data and passing it, essentially acting as a proxy.
