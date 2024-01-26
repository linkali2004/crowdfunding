//importing all the required libraries
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import UserRegistrations  from "./components/UserRegistrations";
import { config } from "./config";
import { WagmiProvider } from 'wagmi'
import * as React from "react";
import {UserContextProvider} from "./context/UserContext";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./App.css";
import Charity from './components/Charity';
import Disaster from './components/Disaster';
import Events from './components/Events';


function App() {
  //Wagmi react query client for wagmi specific blockchain task
  const queryClient = new QueryClient()

  //Apollo client for resolving graphql queries in react
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  //react router for single page application creation
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <MainPage></MainPage>
        },
        {
          path:"/charity",
          element:<Charity></Charity>
        },
        {
          path:"/disaster",
          element:<Disaster></Disaster>
        },
        {
          path:"/events",
          element:<Events></Events>
        }
      ]
    },
        {
          path:"/login",
          element:<UserRegistrations></UserRegistrations>
        }
  ])
  return (
    <UserContextProvider>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <RouterProvider router={router}></RouterProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </ApolloProvider>
    </UserContextProvider>
  )
}

export default App
