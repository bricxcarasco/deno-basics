const encoder = new TextEncoder();

const greetText = encoder.encode('Hello World\nMy name is Bricx');

await Deno.writeFile('greet.txt', greetText);

// command
// deno run --allow-write create-file.ts