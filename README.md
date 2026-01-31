# Rick and Morty Characters

React SPA to search characters of the Rick and Morty franchise.

## Instalation guide

The following dependencies are needed to execute this project:

- Node.js v24.13.0

After cloning this repository to your local storage, compile and launch the project with the following commands:

```bash
npm install
npm run dev
```

After that, the application will be available in http://localhost:5173/.

**NOTE**: The port 5173 must be available to launch the project.

## Technical description

The project is a SPA implemented with React 19.2.0 and Node.js 24.13.0. The components are built as functional with React Hooks. Some dependencies have been added to add new useful features:

| DEPENDENCY | REASON |
|---------------|----------|
| Redux | Global state management. |
| Font Awesome | Beautiful svg icons. |

The project is structures in the following folders:

| FOLDER | CONTENT |
|---------------|----------|
| api | API REST calls. |
| components | Domain components with application logic to build pages. |
| components/utils | Non-domain components. |
| pages | Components for whole pages. |
| redux | Redux code (store and slices). |
| section | Section of each page (header, main, footer). |

The components are implemented with SOLID principles in mind. The utils component are domin agnostic and can be used in any project. The sections can be used to create multiple pages too.

The favourites and selected character functionality are implemented as global states with Redux. Each of them has specific actions to change the state from anywhere in the application. If new pages are added in the application, the character modal and favourites features can still be used.

## Improvements

The application is fully operational and meets all the functional requirements, but there are several improvements to expand and polish the current functionality.

### Functional improvements

- Add "group by" functionality to list the character in different lists. For example group by location, by status, etc.
- Add the location filter. It couldn't be added to the project because of the API structure.
- Add episode info to the characters. List all characters that appear in an episode or list all episodes where a specific character appears.
- Instead of a modal, create an own page to the character details.
- Add details pages for location and episodes.
- Custom error message to notify the user when an API call returns an error.
- Imporve the UI/UX of the application.

### Technical improvements

- Right now the application is a SPA, so all content is in the same page. It might be benefitial to add React Router to enable page navigation with web history integration.
- Implement unit tests for the components with Jest and React Testing Library to ensure the correct functionality of the application.
- If more entities are added to the application, like location or episodes, create subfolder for each of the entities components.
- Add memoitation to expensive renders and cache to the API calls to improve application performance.
- Use a CSS framework like Tailwind or Sass to standarized and ease the style implementation.
-Encapsulates the style of each component using CSS modules.