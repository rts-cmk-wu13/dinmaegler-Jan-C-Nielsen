
import { Outlet } from "react-router";
import Details from "../../pages/Details";

export default function DetailsShell() {
  return (
    <div style={{ position: "relative" }}>
      <Details />
      {/* Nested routes (like the Carousel overlay) appear here */}
      <Outlet />
    </div>
  );
}
