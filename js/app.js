let nav_s_btn = document.querySelector(".nav_button");
let project_nav_s = document.getElementById("projects_s");
let screen_width = window.innerWidth;
let resume_s = document.getElementById("resume_s");
let resume_l = document.getElementById("resume_l");

nav_s_btn.addEventListener("click", navBarChangeState);
window.addEventListener("resize", closeNav);
project_nav_s.addEventListener("click", closeNav);
resume_s.addEventListener("click", resumeErr);
resume_l.addEventListener("click", resumeErr);

function navBarChangeState() {
  let nav_clip = document.querySelector(".nav_s");
  let line1 = document.querySelector(".line:first-child");
  let line2 = document.querySelector(".line:last-child");
  let clip_status = nav_clip.getAttribute("data-active");

  if (clip_status === "false") {
    nav_clip.setAttribute("data-active", "true");
    line1.style.visibility = "hidden";
    line2.style.visibility = "hidden";
  } else {
    nav_clip.setAttribute("data-active", "false");
    line1.style.visibility = "visible";
    line2.style.visibility = "visible";
  }
}

function closeNav() {
  let line1 = document.getElementById("line1");
  let line2 = document.getElementById("line2");
  let nav_clip = document.querySelector(".nav_s");

  if (screen_width > 768) {
    line1.style.visibility = "hidden";
    line2.style.visibility = "hidden";
  } else {
    nav_clip.setAttribute("data-active", "false");
    line1.style.visibility = "visible";
    line2.style.visibility = "visible";
  }
}

function resumeErr() {
  let nav_s_cont = document.querySelector(".nav_s");
  let nav_s = document.querySelector(".nav_menu_s");
  let nav_l_cont = document.querySelector(".large_screen");
  let nav_l = document.querySelector(".nav_menu_l");

  let err = document.createElement("div");
  let err_p = document.createElement("p");
  err_p.textContent = "This feature will be available soon";
  err.appendChild(err_p);

  if (screen_width < 767) {
    nav_s.after(err);
    err.setAttribute("class", "err_s");
    setTimeout(() => {
      err.removeChild(err_p);
      nav_s_cont.removeChild(err);
    }, 2400);
  } else {
    nav_l.after(err);
    err.setAttribute("class", "err_l");
    setTimeout(() => {
      err.removeChild(err_p);
      nav_l_cont.removeChild(err);
    }, 2400);
  }
}
