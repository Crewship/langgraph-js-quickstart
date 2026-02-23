import { Annotation, END, START, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";

const StateAnnotation = Annotation.Root({
  topic: Annotation<string>,
  research: Annotation<string>,
  report: Annotation<string>,
});

type State = typeof StateAnnotation.State;

const llm = new ChatOpenAI({ model: "gpt-4o-mini" });

async function researchNode(state: State) {
  const response = await llm.invoke(
    `Research this topic and give me 5 key bullet points: ${state.topic}`
  );
  return { research: response.content as string };
}

async function reportNode(state: State) {
  const response = await llm.invoke(
    `Write a short markdown report based on this research:\n${state.research}`
  );
  return { report: response.content as string };
}

export const graph = new StateGraph(StateAnnotation)
  .addNode("researcher", researchNode)
  .addNode("reporter", reportNode)
  .addEdge(START, "researcher")
  .addEdge("researcher", "reporter")
  .addEdge("reporter", END)
  .compile();
