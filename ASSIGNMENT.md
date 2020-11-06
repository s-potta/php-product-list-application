## Build Simple Product List Application

**Requirements:**
The app must have the following **three** hosting requirements, and **three** main software design requirements.

### Hosting Requirement
1. **Web Hosting**
   - The PHP application must be hosted on WIU's ecom/uxb server under your ecom user id
   - Example URL:  http://www.wiu.edu/users/&lt;your-ecom-id&gt;/productlist

2. **MySQL Server**
   - The PHP application must use the MySQL database on the WIU ecom/uxb server that is provided for your ecom user id

3. **Git Version Control**
   - The PHP Application must be managed in Github, or another Git service with permission. You can begin by cloning this sample Git project into your personal Github account space.

**Note:** To enable and setup your Web Server space to host your PHP application, and initialize your account's MySQL database server, go to the following URL:
- https://www.wiu.edu/guava/
- See Also: http://www.wiu.edu/university_technology/service_catalog/?view=service&id=9

### Software Design Requirement

1. **Database Design**
   - A MySQL database to store product information and “Comments” for each products
   - The schema should include:
     - title
     - description
     - product image (e.g. URL)
     - price
     - comments
   - Populate the table with a minimum of 10 example items.
   - Include a SQL script to create the database/table as well as populate it with the example items.
      - This SQL script must exist in your Git repository

2. **Backend API (PHP Script)**
   - A backend API that supports CRUD interactions as follows.
     - See also: https://www.restapitutorial.com/
   - The API should support **GET** requests for product list and single-page views.
   - It should also support **POST** requests for adding Comments for Products.
   - OPTIONAL: Comment can also be added, replaced, or removed with another **PUT**, **PATCH** or **DELETE** request. See restapitutorial.com for appropriate design.

3. **A frontend client (Fronted Page Design)**
- A frontend client written in a modern frontend JavaScript framework, **Angular** is expected, others must have prior approval
- Required views:
   - **Main Page View:** a scrollable page that lists all available products. Each item should display with the product image, item title, and price.
      - OPTIONAL: Implement infinite scroll or pagination.
   - **Single-page View:** a page with complete details for a single product.
Include product image, title, description, price and comments.
      - **Comments:** User can also add a comment to each product on this page
      - OPTIONAL: Add a back button or breadcrumbs to return back to the main
page view.
      - OPTIONAL: Add a button to remove a “Comment”,

## Deliverables:

1. The URL to your hosted application on your wiu.edu account
2. The URL to your application Git repository
