import "@testing-library/jest-dom";
jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});
