export function createCenteredText(text:string, totalLength:number) {
    const paddingLength = (totalLength - text.length) / 2;
    const leftPadding = "-".repeat(Math.floor(paddingLength));
    const rightPadding = "-".repeat(Math.ceil(paddingLength));
  
    return rightPadding + text + leftPadding ;
}