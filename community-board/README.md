# Web Development Project 1 - *New York Counties*

Submitted by: **Ammar Khalil**

This web app: **An interactive tool for exploring population, income, and education data for counties in the NY metro region.**

Time spent: **5.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [X] Header/title describing the theme is displayed
- [X] **At least 10 unique events or resources are displayed in a responsive card format**
  - [X] There are at least 10 cards displayed 
  - [X] The cards should be displayed in an organized format (ex. a grid, or in one line)
  - [X] Each card should include some information about the event or resource


The following **optional** features are implemented:

- [X] Buttons or links to a related resources are on each card component
  - [X] All cards have buttons or links in addition to text
  - [X] The site is responsive for both desktop and mobile formats
  - [X] Web app is shown in a mobile format

The following **additional** features are implemented:

* [X] Card filter functionality

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='src/assets/VideoDemo.gif' title='Video Walkthrough' width=100% alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created using macOS screen recording and Canva.
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Challenges/Learning Curves:
- Mapping county data from the JSON file to individual cards using `.map()` required careful handling; using county names improved clarity.
- Ensuring consistent image styling across cards was tricky due to different image dimensions, but CSS techniques like `clamp()` helped keep headings and layouts uniform.
- Implementing sorting was the most complex part: I used React’s `useState` to track the selected option and implemented a custom switch statement to sort and re-render the county cards based on the chosen criteria.

## License

    Copyright 2025 AKhalil22

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.