bookmark app project by Joey Romo

website: https://thinkful-ei-gecko.github.io/Joey-Bookmark-App/

Due Date and Grading
You have until the end of day Wednesday (8PM ET) to complete your project and submit it for evaluation. To receive a passing grade, the project must:

Fulfill every non-extension user story below
Fulfill every non-extension technical requirement below
For successful submission, you MUST:

Push your final version to the gh-pages branch of your repo. Your repo should be inside the cohort's organization and named [yourname]-bookmarks-app.
Add the live GH Pages link to the header of your repo.
Submit the repo URL at the bottom of this page.
User Stories
As a user:

I can add bookmarks to my bookmark list. Bookmarks contain:

title
url link
description
rating (1-5)
I can see a list of my bookmarks when I first open the app

All bookmarks in the list default to a "condensed" view showing only title and rating
I can click on a bookmark to display the "detailed" view

Detailed view expands to additionally display description and a "Visit Site" link
I can remove bookmarks from my bookmark list

I receive appropriate feedback when I cannot submit a bookmark

Check all validations in the API documentation (e.g. title and url field required)
I can select from a dropdown a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection

Technical Requirements
Use fetch for AJAX calls and jQuery for DOM manipulation

Use namespacing to adhere to good architecture practices

Minimal global variables
Create modules in separate files to organize your code
Logically group your functions (e.g. API methods, store methods...)
Keep your Data out of the DOM

No direct DOM manipulation in your event handlers!
Follow the React-ful design pattern - change your state, re-render your component
Use semantic HTML

Use responsive design

Visually and functionally solid in viewports for mobile and desktop
Follow a11y best practices

Refer back to the lessons on accessibility, forms