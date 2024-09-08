import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  test("should be rendered properly", () => {
    const button = render(<Button>Click here</Button>);
    const buttonElement = button.getByText("Click here");
    expect(buttonElement).toBeDefined();
  });
});
