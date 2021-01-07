import { getInput, setFailed } from "@actions/core";
import github from "@actions/github";

try {
  const template = getInput("template");
  console.log(`Hello ${template}!`);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  setFailed(error.message);
}
