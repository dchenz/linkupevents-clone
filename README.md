# LinkUp (Clone)

## Overview

A new, improved version of the LinkUp user interface.

[Check out the real LinkUp website!](https://linkupevents.com.au/)

> Started at the end of 2019 by UNSW students, Linkup is a dedicated event tracker created in response to the lack of visibility of society events. Our goal is to centralise events so that it's easier to find and navigate society events around campus. To create a place to find new events or societies that you may otherwise not know about, as well as a way to interact with the community through the wide variety of events.

## How to build

```sh
git clone git@github.com:dchenz/linkupevents-clone.git
cd linkupevents-clone
yarn install
yarn build
```

## Notes

This project is a frontend-only React app. It sources data from the existing LinkUp backend and APIs, which are not maintained by me. As a result, this project may stop working at any time if the backend is updated with breaking changes. It is currently a standalone app that is separate from the real LinkUp codebase.