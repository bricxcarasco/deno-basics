let file = await Deno.open('greet.txt');
await Deno.copy(file, Deno.stdout);
file.close();

// command
// deno run --allow-read read-file.ts