import { GridItemFormatPipe } from "./grid-item-format.pipe";

describe("GridItemFormatPipe", () => {
  it("create an instance", () => {
    const pipe = new GridItemFormatPipe(null, null);
    expect(pipe).toBeTruthy();
  });
});
