# Unilab task

The app is a web application that allows you to login and logout using local storage. Once logged in, you can view, filter, and sort student data in a table format. You can also view paginated posts.

## Features

- The app is designed to be fully responsive and works well on all devices.
- Interactive elements have keyboard navigation and clear focus states to improve accessibility.
- Users can log in and log out of the app using local storage.
- The modal is rendered using react portal to escape stacking context.
- The modal is accessible and has keyboard navigation and focus trap to improve accessibility.
- The table and posts are paginated to improve performance and usability.
- The table has view, search, filter, and sort functionality to help users find the information they need.

### search

The table includes a search bar that allows users to search for specific data by first and/or last name. As the user types in the search bar, the table updates in real-time to show only the rows that match the search query. This makes it easy for users to find the information they need without having to manually scan through the entire table.

### Filter

The table also includes filter functionality that allows users to filter the data based on specific criteria. Users can filter the data by gender and status using checkboxes. Whenever a filter checkbox is changed, the table pagination is reset to the first page and the page length is adjusted to ensure that the filtered data is displayed correctly.

### Sort

Sort functionality allows users to sort the data based on the points column. Users can click on the points column header to sort the data in ascending or descending order. The sort functionality does not alter the underlying data, but rather sorts the displayed data by points, regardless of whether filters are applied or not.

## Technologies Used

- React.js + Vite
- Zustand
- CSS modules

## Getting Started

To get started with the app, follow these steps:

1. Clone the repository, install the dependencies and run the app

   ```bash
   git clone git@github.com:davitJabushanuri/unilab-task.git my-project
   cd my-project
   npm install
   npm run dev
   ```

2. Open the app in your browser at `http://localhost:5173`
