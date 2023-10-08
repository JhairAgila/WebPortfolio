import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { HeaderSocial } from "../components/header/HeaderSocial";
import userEvent from "@testing-library/user-event";

describe("Header social test", () => {
  beforeEach(() => {
    render(<HeaderSocial />);
  });

  it("Header social link", async () => {
    const originalOpen = window.open;
    window.open = jest.fn();

    const linkedin = screen.getByTestId("linkedin");
    const gitHubPersonal = screen.getByTestId("githubPersonal");
    const githubInstitutional = screen.getByTestId("githubInstitutional");

    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(gitHubPersonal).toHaveAttribute("target", "_blank");
    expect(githubInstitutional).toHaveAttribute("target", "_blank");

    fireEvent.click(linkedin);

    setTimeout(() => {
      expect(window.location.href).not.toBe(
        "https://www.linkedin.com/in/jhair-agila-b8ba45237"
      );
    expect(window.open).toHaveBeenCalledWith("https://www.linkedin.com/in/jhair-agila-b8ba45237", "_blank");

    }, 1000);

    fireEvent.click(gitHubPersonal);
    setTimeout(() => {
      expect(window.location.href).not.toBe("https://github.com/JhairAgila");
      expect(window.open).toHaveBeenCalledWith("https://github.com/JhairAgila", "_blank");

    }, 1000);

    fireEvent.click(githubInstitutional);
    setTimeout(() => {
      expect(window.location.href).not.toBe(
        "https://github.com/JhairDeveloper"
      );
      expect(window.open).toHaveBeenCalledWith("https://github.com/JhairDeveloper", "_blank");

    }, 1000);
    
    // Restaura la función window.open original
    window.open = originalOpen;
  });
});
