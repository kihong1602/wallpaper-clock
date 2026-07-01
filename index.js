function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const month = now.getMonth();
  const day = now.getDate();
  const dayOfWeek = now.getDay();
  const year = now.getFullYear();
  const period = hours >= 12 ? '"PM"' : '"AM"';
  const hours12 = hours % 12 === 0 ? 12 : hours % 12;

  // Convert month number to month name
  const monthNames = [
    "\"January\"", "\"February\"", "\"March\"",
    "\"April\"", "\"May\"", "\"June\"",
    "\"July\"", "\"August\"", "\"September\"",
    "\"October\"", "\"November\"", "\"December\""
  ];

  const dayOfWeeks = ["\"Sunday\"", "\"Monday\"", "\"Tuesday\"", "\"Wednesday\"", "\"Thursday\"", "\"Friday\"",
    "\"Saturday\""];

  // Wrap a value in a Kotlin String literal, zero-padded to 2 digits
  const quoted2 = (n) => "\"" + n.toString().padStart(2, '0') + "\"";

  // Display the time parts in the corresponding span elements
  document.getElementById('year').textContent = year.toString();
  document.getElementById('month').textContent = monthNames[month];
  document.getElementById('day').textContent = quoted2(day);
  document.getElementById('dayOfWeek').textContent = dayOfWeeks[dayOfWeek];
  document.getElementById('period').textContent = period;
  document.getElementById('hour').textContent = quoted2(hours12);
  document.getElementById('minute').textContent = quoted2(minutes);
  document.getElementById('second').textContent = quoted2(seconds);

}

// Render immediately, then update every second
updateTime();
setInterval(updateTime, 1000);
