import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import  Title from "./Title";


test('タイトルが正しく表示される', ()=>{
  render(<Title text="hello world"/>)

  const heading = screen.getByText("hello world")
  

  expect(heading).toBeInTheDocument();
  expect(heading.tagName).toBe("H1")
});