import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

//Makes the app even smaller
app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`)
  }
});

//Challenges: Author Administration, Delete Course, Hide empty course list, unsaved changes, client side validation, handle 404s, show #coures in header, pagination, sort course table, revert abandoned changes
