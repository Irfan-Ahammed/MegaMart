import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/productSlice";
import Home from "../pages/Home";

// Create a mock Redux store
const mockStore = configureStore({
  reducer: {
    products: productReducer,
  },
});

describe("-App-", () => {
  it("Checking if Navbar Exist inside the component", () => {
    render(
      <Provider store={mockStore}>
        <Home />
      </Provider>
    );

    const categories = screen.getByRole("heading", {
      name: "Shop by Categories",
    });

    expect(categories).toBeInTheDocument();
  });
});
