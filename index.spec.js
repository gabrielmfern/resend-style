import { spawnSync } from "node:child_process";
import path from "node:path";
import { expect, test } from "vitest";

test("apply linting in this repository", () => {
  const process = spawnSync(
    "node",
    [path.resolve(import.meta.dirname, "./index.js"), "apply"],
    {
      stdio: "inherit",
    },
  );
  expect(process.error).toBeUndefined(undefined);
});

test("check linting in this repository", () => {
  const process = spawnSync(
    "node",
    [path.resolve(import.meta.dirname, "./index.js"), "check"],
    {
      stdio: "inherit",
    },
  );
  expect(process.error).toBeUndefined(undefined);
});
