# Web Development Project 5 - *Stock Sentiment Dashboard*

Submitted by: **Ammar Khalil**

This web app: **This web app allows users to search for stock ticker symbols, view recent company news articles, and see an average insider sentiment score (MSPR). Users can also filter articles by different date ranges to explore trends and recent activity.**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [X] **`useEffect` React hook and `async`/`await` are used**
- [X] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *Number of articles (filtered)*
    - *Insider sentiment average*
    - *Explanation of MSPR range (contextual stat)*
- [X] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [X] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [X] Multiple filters can be applied simultaneously (Ticker & Date)
- [] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='src/assets/StockVideoDemo.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- Choosing the right API was challenging with so many options. I chose Finnhub for its financial focus over general news APIs due to greater integration with the theme.
- Handling and formatting dates (e.g., converting timestamps, building dynamic ranges) was tricky.
- Managing `useEffect` for asynchronous API calls required careful planning to avoid re-renders and bugs.
- Validating ticker symbols and handling edge cases (like empty or invalid inputs) added extra complexity.

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