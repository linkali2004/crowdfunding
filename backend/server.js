const express = require("express");
const bodyParser = require("body-parser");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const User = require("./models/User");

const app = express();

app.use(bodyParser.json());

app.use(cors())


mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(4000 , ()=>{
        console.log("Listening to port 4000")
    })
}).catch((err)=>{
    console.log(err);
})


app.use("/graphql",graphqlHTTP({
    schema:buildSchema(`
    type RootQuery
    {
       findUser(username:String!):User
    }

    input UserInput{
        Username:String!
        Email:String!
        Password:String!
    }

    type User
    {
        _id:ID!
        Username:String!
        Password:String!
        Email:String!
    }



    type RootMutation{
        createUser(userInput:UserInput):User
    }

    schema {
        query: RootQuery
        mutation: RootMutation
     }
    `),
    rootValue:{
        createUser:(args)=>{
            return User.create({
                Username:args.userInput.Username,
                Email:args.userInput.Email,
                Password:args.userInput.Password
            })
        },
        findUser:(args)=>{
          return User.findOne({Username:args.username});
        },
    },
    graphiql:true
}))