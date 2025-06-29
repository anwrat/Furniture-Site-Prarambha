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
<br>

## API for design table

Requires a json format like { name, image, decors_used, description }

1. `/api/designs/` : Create a design
2. `/api/designs/update/:id` : Update a design by id
3. `/api/designs/delete/:id` : Delete a design by id


