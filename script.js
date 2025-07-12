    let name = prompt("Ismingizni kiriting:");
    let age = prompt("Yoshingizni kiriting:");
    let job = prompt("Kasbingizni kiriting:");
    let format = prompt("Matnni qanday chiqaraylik?\n1 - BARCHA HARFLAR KATTA\n2 - barcha harflar kichik");

    if (format === "1") {
      text = text.toUpperCase();
    } else if (format === "2") {
      text = text.toLowerCase();
    } else {
      alert("Noto'g'ri tanlov! Matn o'zgartirilmaydi.");
    }

    document.getElementById("nameOutput").innerHTML = "Ism: " + name;
    document.getElementById("ageOutput").innerHTML = "Yosh: " + age;
    document.getElementById("jobOutput").innerHTML = "Kasb: " + job;