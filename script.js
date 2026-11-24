const roles = ["Aspiring Software Engineer", "Creative Web Developer", "AI & Technology Enthusiast", "Interactive Web Developer"];
const roleElement = document.getElementById("typed-role");
let roleIndex = 0;
let characterIndex = roles[0].length;
let deleting = false;
function typeRole() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const current = roles[roleIndex];
  roleElement.textContent = current.slice(0, characterIndex);
  let delay = deleting ? 42 : 85;
  if (!deleting && characterIndex === current.length) { deleting = true; delay = 1800; }
  else if (deleting && characterIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 350; }
  else { characterIndex += deleting ? -1 : 1; }
  setTimeout(typeRole, delay);
}
setTimeout(typeRole, 1600);
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: .1 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
} else { document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); }


(()=>{const root=document.getElementById("contact");if(!root)return;const options=[...root.querySelectorAll(".connect-option")],result=root.querySelector("#connect-result"),title=root.querySelector("#connect-result-title"),description=root.querySelector("#connect-result-description"),email=root.querySelector("#connect-email");const purposes={collaboration:{title:"Let's build something together",description:"Tell me about your project and what you have in mind.",subject:"Project Collaboration — Dinujaya Abeysinghe",body:"Hi Dinujaya,\n\nI'd like to discuss a project collaboration.\n\n"},opportunity:{title:"Let's talk opportunities",description:"I'd be happy to hear about your team or opportunity.",subject:"Career / Internship Opportunity — Dinujaya Abeysinghe",body:"Hi Dinujaya,\n\nI'm reaching out about a career or internship opportunity.\n\n"},hello:{title:"Great to meet you!",description:"Send a message — I'm always happy to connect.",subject:"Hello Dinujaya — Let's Connect",body:"Hi Dinujaya,\n\nI wanted to reach out and say hello.\n\n"}};options.forEach(button=>button.addEventListener("click",()=>{const selected=purposes[button.dataset.purpose];options.forEach(option=>{const active=option===button;option.classList.toggle("selected",active);option.setAttribute("aria-pressed",String(active))});title.textContent=selected.title;description.textContent=selected.description;email.href="mailto:dinujayathisum2005@gmail.com?subject="+encodeURIComponent(selected.subject)+"&body="+encodeURIComponent(selected.body);result.hidden=false;result.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"nearest"})}))})();

(()=>{
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
const fine=window.matchMedia('(pointer:fine) and (hover:hover)');
const selectors='.skill-card,.project-card,.about-main,.info-card,.quote-card,.journey-card,.connect-option,.connect-result,.btn,.header-contact-icon,.nav-contact';
const targets=[...document.querySelectorAll(selectors)];
targets.forEach(el=>el.classList.add('cursor-reactive'));
if(!fine.matches||reduced.matches)return;
document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const target=e.target.closest('.cursor-reactive');if(target){const r=target.getBoundingClientRect();target.style.setProperty('--pointer-x',`${e.clientX-r.left}px`);target.style.setProperty('--pointer-y',`${e.clientY-r.top}px`)}},{passive:true});
})();


(()=>{
const intro=document.getElementById('portfolioIntro');
if(!intro)return;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let finished=false;
const finish=()=>{if(finished)return;finished=true;intro.classList.add('intro-finished');intro.setAttribute('aria-hidden','true');setTimeout(()=>intro.remove(),700)};
document.getElementById('introSkip')?.addEventListener('click',finish);
try{if(sessionStorage.getItem('dinujayaIntroSeen')==='1'||reduced){finish();return}sessionStorage.setItem('dinujayaIntroSeen','1')}catch(e){}
setTimeout(finish,3000);
})();

const backToTop = document.querySelector(".back-top");
if (backToTop) {
  backToTop.addEventListener("click", event => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
}
