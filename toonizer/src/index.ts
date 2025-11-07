import { encode, decode } from "@toon-format/toon";
import { readFileSync, writeFileSync } from "fs";

const data = JSON.parse(readFileSync("input/example.json", "utf-8"));

const toon = encode(data);
console.log("TOON Format:\n", toon);

// To decode back to JSON if needed
// const parsed = decode(toon);
// console.log("Decoded JSON:\n", parsed);
writeFileSync("output/decoded_example.txt", toon, "utf-8");
console.log("TOON data written to output/decoded_example.txt");