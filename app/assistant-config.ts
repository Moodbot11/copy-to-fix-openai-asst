export let assistantId = "asst_0p6pfVYPV1g4UJBFdGGNMSaJ"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
