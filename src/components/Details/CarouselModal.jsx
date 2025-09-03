
// CarouselModal.tsx
import { useNavigate, useRouteLoaderData } from "react-router";
import { createPortal } from "react-dom";
import Carousel from "./Carousel"; // your existing Carousel component

export default function CarouselModal() {
  const navigate = useNavigate();
  // Reuse the parent's loader data:
  const product = useRouteLoaderData("details");

  const close = () => navigate(".."); // back to /details/:id

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "grid",
        placeItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(95vw, 1000px)",
          maxHeight: "90vh",
          background: "#fff",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        <Carousel product={product} />
        <button onClick={close} style={{ position: "absolute", top: 12, right: 12 }}>
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
}
// Note: Ensure that your Carousel component can accept a 'product' prop
// and uses it instead of calling useLoaderData itself.