function grid(n) {
  if (n < 0) return null;
  let str = "abcdefghijklmnopqrstuvwxyz".repeat(n);
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(
      str
        .slice(i, n + i)
        .split("")
        .join(" ")
    );
  }
  return res.join("\n");
}
