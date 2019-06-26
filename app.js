
const express = require('express');
const bodyParser = require('body-parser');
const admin = require("firebase-admin");
const graphqlHttp = require('express-graphql');
const serviceAccount = require("./serviceAccountKey.json");

const graphqlSchema = require('./graphql/schema/index');
const graphqlResolver = require('./graphql/resolvers/index');

const app = express();


// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://reactbackground.firebaseio.com"
// });

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}));

app.listen(3000);