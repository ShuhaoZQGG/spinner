const spinner = function () {
  let symbols = ['|', '/', '-', '\\', '|', '/', '-', '|','/', '-', '\\', '|'];
  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => {process.stdout.write(`\r${symbols[i]}`)}, 100 + i * 200);
  }
  setTimeout(() => {process.stdout.write('\n   '); }, 100 + 200 * (symbols.length+1));
}

spinner();