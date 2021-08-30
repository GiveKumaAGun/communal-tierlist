API Endpoints

GET /
  [TEMPORARY] Currently sends a landing page with a form for sending POST requests to /rankings/:topic

POST /rankings/:topic
  [TEMPORARY] Inserts the contents of the form into the 'sandwich' table as a row. Does not insert a new row if a form with the same input for 'user' had already been recorded

GET /rankings/:topic
  [UNIMPLEMENTED] Shows a tier list based on the average score given to a column across all recorded ratings

GET /rankings/:topic/:ratingId
  Shows the ratings belonging to the row where user.id = req.params.ratingId

PATCH /rankings/:topic/:ratingId
  Updates the ratings belonging to the row where user.id = req.params.ratingId

DELETE /rankings/:topic/:ratingId
  Removes the row where user.id = req.params.ratingId from the table with the name of req.params.topic

[TODO]
  -Move to React or Vue
  -Add input validation
  -Add authentication for users
  -Implement GET /rankings/:topic