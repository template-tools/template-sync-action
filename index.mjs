import { getInput, setFailed } from "@actions/core";
import github from "@actions/github";
import { Context } from "@template-tools/template-sync";
import GithubProvider from "github-repository-provider";


async function execute(payload)
{
  const options = {};
  const provider = GithubProvider.initialize(undefined, process.env);

  console.log(provider);
  const context = await Context.from(
    provider,
    payload.repository.html_url,
    options
  );

  for await (const pr of context.execute()) {
    console.log(pr);
  }
}

try {
  const template = getInput("template");
  console.log(`Hello ${template}`);
  //const payload = JSON.stringify(github.context.payload, undefined, 2);
  //console.log(`The event payload: ${payload}`);

  execute(github.context.payload);

} catch (error) {
  setFailed(error.message);
}
