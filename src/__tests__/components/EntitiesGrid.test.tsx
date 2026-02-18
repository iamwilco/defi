import { render, screen } from "@testing-library/react";
import { EntitiesGrid } from "@/components/entities/EntitiesGrid";
import { entities } from "@/lib/mockData";

describe("EntitiesGrid", () => {
  it("renders entity filter controls", () => {
    render(<EntitiesGrid entities={entities} />);

    expect(screen.getByLabelText("Search coalition entities")).toBeInTheDocument();
    expect(screen.getByLabelText("Filter entities by role")).toBeInTheDocument();
  });
});
