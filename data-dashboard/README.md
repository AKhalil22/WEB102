# Web Development Project 6 - *Stock Sentiment Dashboard*

Submitted by: **Ammar Khalil**

This web app: **This web app allows users to search for stock ticker symbols, view recent company news articles, and see an average insider sentiment score (MSPR). Users can also filter articles by different date ranges to explore trends and recent activity.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [X] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [X] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [ ] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [X] The site allows users to toggle between different data visualizations (useEffect to update bar chart volume)
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  
The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='src/assets/DataDashDemo.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- **Component Abstraction**
  - Moved logic from `App.jsx` to `Dashboard.jsx` to support routing.
  - Required lifting state and passing props for shared access.

- **Asynchronous Data Handling**
  - Managed timing issues when calculating values (e.g., sentiment average) that depended on API calls.
  - Used `useEffect` to respond to data updates and prevent accessing undefined/null data.

- **Dynamic Chart Rendering**
  - Transformed raw API data using timestamps and grouped articles by formatted dates.
  - Used hash maps and array transformations to prepare chart data.

- **Conditional Rendering & Safeguards**
  - Ensured charts only rendered after data was loaded.
  - Returned fallback values like `"N/A"` when API responses were empty.
  - Prevented `.map` or rendering errors on first load by validating data types.

- **Chart Customization**
  - Customized `XAxis` labels using date formatting.
  - Handled label overlap by rotating ticks and adjusting spacing.

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