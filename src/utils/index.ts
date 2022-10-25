async function sleep(ms: number) {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((r) => setTimeout(r, ms));
}

function getQuestionNumber(questionString: string): number {
  return Number(questionString.split('/').at(-1));
}

export { sleep, getQuestionNumber };
