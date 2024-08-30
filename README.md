# E-Commerce Category Selection and Pagination

## Project Description

This project is a simple e-commerce application that allows users to browse and select different product categories. Upon selecting a category, users are routed to a new page where items belonging to the selected category are displayed in a paginated format.

### Features

- **Category Selection**: Users can view and select from various product categories on the main page.
- **Routing**: Clicking on a category navigates users to a dedicated page for that category.
- **Item Display**: The selected category's items are shown as cards.
- **Pagination**: Items are paginated with a page size of 8, allowing users to navigate through multiple pages of items.

### How It Works

1. **Categories Page**:
   - The main `Body` component displays a list of product categories.
   - Categories are shown as clickable cards.
   - Each card includes category information such as name, color, and icon.

2. **Routing**:
   - When a user clicks on a category card, they are redirected to a new route specific to that category.
   - The route is formatted as `/category/:category`.

3. **Category Items Page**:
   - On the category-specific page, item cards for the selected category are displayed.
   - Items are paginated with a page size of 8.
   - Users can navigate through pages using pagination controls.

