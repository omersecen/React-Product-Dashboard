# React Product Dashboard

Assignment 5 for Web Programming. A small React application created with Vite.
It displays three products, lets the user show or hide them, and updates a greeting
as the user types their name. All product data is static.

## Run the project

Use Node.js 22.12+ or Node.js 24 LTS.

```sh
cd assignment1
npm ci
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```sh
npm run build
npm run preview
```

## File organization

```text
assignment1/
  src/
    components/
      Card.jsx
      Product.jsx
      ProductList.jsx
    App.jsx
    main.jsx
    style.css
  index.html
  package.json
  package-lock.json
```

- `App.jsx` stores `name` and `showProducts` with `useState`. It contains the
  controlled input, greeting, button and conditional product list.
- `ProductList.jsx` defines the product array and uses `.map()` with product IDs
  as keys.
- `Product.jsx` receives `title` and `price` through props and displays them in a Card.
- `Card.jsx` renders its `children` inside a styled wrapper.
- `main.jsx` mounts App and imports the CSS. `style.css` contains the page styles.

## Implementation challenges

The main points to handle were keeping the input controlled and changing product
visibility through state. Both state values stay in App, so hiding the product
list does not clear the user's name. Product IDs provide stable keys rather than
using array positions. Card stays reusable by accepting children instead of
containing product-specific content.

## Checks

- `npm run build` completes successfully.
- Laptop ($1200), Phone ($800) and Tablet ($600) appear on initial load.
- Typing a name updates the greeting immediately.
- Hide Products removes the list; Show Products restores it without losing the name.
- The layout fits a 390px-wide screen without horizontal scrolling.
- No browser console errors or warnings were observed during these checks.

Only React, ReactDOM and Vite are used. `node_modules` and `dist` are ignored by Git.
