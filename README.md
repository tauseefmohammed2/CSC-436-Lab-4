# CSC 436 Web Applications - Lab 4

## New Features using Mock API:
- User Authentication: Users can register, log in, and log out.
- Todo Management: Users can create, toggle completion, and delete todos.
- Real Time UI Updates: The app updates in real time as users interact with todos in the todo list and there is no need to refresh the page.


## How the Mock API Works

### Authentication
- The react app now uses a mock REST API endpoint (/login) to authenticate users.

### Todo Operations
- Create Todos: Todos are added through the /todos endpoint using a POST request.
- Read Todos: Todos are fetched when the app loads using a GET request to /todos.
- Update Tsods: Todos are marked as complete or incomplete using a PUT request to /todos/:id.
- Delete Todos: Todos are removed using a DELETE request to /todos/:id.

### State Management
- The app uses useReducer hook for state management which keeps track of user authentication and todo items.