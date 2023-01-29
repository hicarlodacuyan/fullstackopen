const parseArguments = (args: Array<string>): Array<number> => {
  return [...args.slice(2).map(arg => Number(arg))];
}

export default parseArguments