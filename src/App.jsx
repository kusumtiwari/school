import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

import LoadingSpinner from "./components/common/LoadingSpinner";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

// menu pages
import BatchPage from "./pages/BatchPage";
import StudentPage from "./pages/StudentPage";
import SectionPage from "./pages/SectionPage";
import SemesterPage from "./pages/SemesterPage";
import FacultyPage from "./pages/FacultyPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/student",
          element: <StudentPage />,
        },
        {
          path: "/faculty",
          element: <FacultyPage />,
        },
        {
          path: "/semester",
          element: <SemesterPage />,
        },
        {
          path: "/batch",
          element: <BatchPage />,
        },
        {
          path: "/section",
          element: <SectionPage />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
