import { RouterProvider as ReactRouterProvider } from "react-router";

import { router } from "@/app/providers/router-provider/config/router"

export const RouterProvider = () => <ReactRouterProvider router={router} />