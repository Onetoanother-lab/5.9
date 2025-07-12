    let nam = prompt("Ismingizni kiriting:");
    let age = prompt("Yoshingizni kiriting:");
    let job = prompt("Kasbingizni kiriting:");
    let text = prompt("Turar Joyni yozing:");

    let format = prompt("Qanday holatda chiqsin ?\n1 - Kotta harflar\n2 - Kichkina harflar");

    if (format === "1") {
      nam = nam.toUpperCase();
      age = age.toUpperCase();      
      job = job.toUpperCase();
      text = text.toUpperCase();
    } else if (format === "2") {
      nam = nam.toLowerCase();
      age = age.toLowerCase();
      job = job.toLowerCase();
      text = text.toLowerCase();
    } else {
      alert("Noto'g'ri tanlov! Oddiy holatda chiqariladi.");
    }

    document.getElementById("nameOutput").innerHTML = "Ism: " + nam;
    document.getElementById("ageOutput").innerHTML = "Yosh: " + age;
    document.getElementById("jobOutput").innerHTML = "Kasb: " + job;
    document.getElementById("textOutput").innerHTML = "Yozuv: " + text;
