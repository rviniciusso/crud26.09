const express = require("express");
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});