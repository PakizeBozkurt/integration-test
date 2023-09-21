import { describe, it } from "vitest";
import { extractPostData } from "./posts";

describe("extractPostData()", () => {
  it("should extract title and content from the provided from data", () => {
    const testTitle = "Test title";
    const testContent = "Test content";
    const testFromData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };

    const data = extractPostData(testFromData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);

  });
});
