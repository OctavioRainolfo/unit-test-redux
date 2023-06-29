import App from "../App";
import { render, screen } from "@testing-library/react";
//https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react-redux/#what-different-kinds-of-tests-are-there

test("renders logo in app component", () => {
    render(<App />);
    const image = screen.getAllByAltText("logo");
    expect(image[0]).not.toBeInTheDocument();
});
