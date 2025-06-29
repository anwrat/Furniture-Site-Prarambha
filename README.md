# Furniture-Site-Prarambha
Site for interior design


# For Backend

## For creating the designs table

```sql
CREATE TABLE designs ( 
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  image TEXT,
  decors_used TEXT,
  description TEXT
);
```

## For creating the decors table

```sql
CREATE TABLE decor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  image TEXT,
  price DECIMAL(10, 2)
);
```
<br>

## API for design table

Requires a json format like { name, image, decors_used, description }

1. `/api/designs/` : Create a design
2. `/api/designs/update/:id` : Update a design by id
3. `/api/designs/delete/:id` : Delete a design by id
4. `/api/designs/fetchall` : Get all designss in database
5. `/api/designs/search/:name` : Find designs by name
<br>

## API for decor table

Requires a json format like { name, description, image, price }

1. `/api/decors/` : Create a decor
2. `/api/decors/update/:id` : Update a decor by id
3. `/api/decors/delete/:id` : Delete a decor by id
4. `/api/decors/fetchall` : Get all decors in database
5. `/api/decors/sort/:order` : (order=asc/desc)Get decors by ascending or descending order
6. `/api/decors/search/:name` : Find decors by name


