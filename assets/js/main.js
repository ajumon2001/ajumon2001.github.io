function toggleMenu(){
  const el = document.getElementById("navMobile");
  const isOpen = el.style.display === "block";
  el.style.display = isOpen ? "none" : "block";
}

document.getElementById("year").textContent = new Date().getFullYear();

