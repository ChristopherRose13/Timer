let args = process.argv.slice(2);
if (args.length === 0) {
  process.stdout.write('\x07');
}

let timer;
for (const timerString of args) {
  timer = Number(timerString);
  if (timer >= 0 && !isNaN(timer)) {
    timer *= 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  }

}