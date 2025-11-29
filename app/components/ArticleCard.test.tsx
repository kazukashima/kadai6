import {render, screen} from "@testing-library/react"
import { ArticleCard } from "./ArticleCard"

describe("ArticleCard",()=>{
  it("タイトルが表示される",()=>{
    render(<ArticleCard
    title="テストタイトル"
    date="2024-01-01"
    url="/test"
    thumbnail=""/>);
    expect(screen.getByText("テストタイトル")).toBeInTheDocument();
  });



});