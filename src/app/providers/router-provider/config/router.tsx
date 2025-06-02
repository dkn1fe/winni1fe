import { TestPage } from "@/app/test-page";
import { createBrowserRouter } from "react-router";


export const routes = [
    {
        path:'/',
        element:'asd',
    },
    {
        path:'/test',
        element:<TestPage/>
    }
]

export const router = createBrowserRouter(routes);