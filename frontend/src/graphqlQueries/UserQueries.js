import { gql } from "@apollo/client";

export const SIGNUP_USER = gql(`
                mutation($usrInput:UserInput){
                    createUser(userInput:$usrInput){
                    Username
                    Email
                    }
                }
`)


export const  SIGNIN_USER = gql(`
query($usrInput:String!){
    findUser(username:$usrInput){
      Username
      _id
    }
  }
`)