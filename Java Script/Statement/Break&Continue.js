
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skips 3
  if (i === 5) break;   // stops loop at 5
  console.log(i);
}
// Output: 1, 2, 4
