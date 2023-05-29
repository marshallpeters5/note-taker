const express = require('express');
const app = express();

app.use(express.json());

// Serve static files from the public folder, cool I know //
app.use(express.static('public'));

// Routes and stuff //
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server! //
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Your server is live, listening on port http://localhost:${PORT}`);
});
