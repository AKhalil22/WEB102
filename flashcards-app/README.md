# Web Development Project 2 - *BNY Behavioral Interview Flashcards*

Submitted by: **Ammar Khalil**

This web app: **A React flashcard app designed to help students prepare for behavioral interviews. Specifically tailored to BNY Mellon’s cultural pillars and interview questions.**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:


- [X] **The app displays the title of the card set, a short description, and the total number of cards**
  - [X] Title of card set is displayed 
  - [X] A short description of the card set is displayed 
  - [X] A list of card pairs is created
  - [X] The total number of cards in the set is displayed 
  - [X] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [X] **A single card at a time is displayed**
  - [X] Only one half of the information pair is displayed at a time
- [X] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [X] Clicking on a card flips it over, showing the back with corresponding information 
  - [X] Clicking on a flipped card again flips it back, showing the front
- [X] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [X] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [X] LeetCode Style Tagging
* [X] Multilevel Categorization
* [X] Company Specfic Questions
* [X] Card Flip Effect

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='src/assets/VideoDemo.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- Main challenges were initializing state variables and handling user interactions.
- Implementing a carousel effect for card navigation required modulus logic for seamless wrap-around.
- Applying the `useEffect` hook was key, especially for filtering cards by category and difficulty.
- Explored CSS Grid and Flexbox for styling, ultimately preferring Flexbox for its simplicity.
- This project deepened my understanding of React state, hooks, and modern CSS layouts.

- [] Add built in timer

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