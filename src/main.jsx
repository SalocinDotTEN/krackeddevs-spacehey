import "./styles.css";

const builders = [
  { name: "jinbei", file: "member-jinbei.png" },
  { name: "itsLucas02", file: "member-itslucas02.png" },
  { name: "strdst7", file: "member-strdst7.png" },
  { name: "4kmal", file: "member-4kmal.png" },
  { name: "enonforetsam", file: "member-enonforetsam.png" },
  { name: "AdamKD", file: "member-adamkd.png" },
];

const activity = [
  { type: "NEW PROJECT", title: "AIM Index", author: "strdst7", detail: "React Bits component showcase · Next.js 16", image: "member-strdst7.png", href: "#showcase" },
  { type: "NEW PROJECT", title: "yugen flow (water ripple + petal blossom)", author: "nurrrmann", detail: "An interactive water ripple with a petal blossom.", image: "member-4kmal.png", href: "#showcase" },
  { type: "NEW PROJECT", title: "OdoTick", author: "Jaironlanda", detail: "A cost tracker for petrol and electric cars.", image: "member-adamkd.png", href: "#showcase" },
  { type: "JOURNAL", title: "KD Raid 04: Melissa comes for the Core", author: "@krackeddevs", detail: "The whole server fights it live, in one ring. Join under the community post.", image: "member-jinbei.png", href: "#community" },
];

let isLoggedIn = false;
let query = "";
const root = document.querySelector("#root");

function sectionBar(title, tone = "blue", aside = "") {
  return `<div class="section-bar ${tone}"><strong>${title}</strong>${aside ? `<span>${aside}</span>` : ""}</div>`;
}

function header() {
  return `
    <header class="site-head">
      <a class="brand" href="#top" aria-label="KrackedDevs home"><span class="brand-mark">KD</span><span class="brand-copy"><b>krackeddevs</b><small>a space for builders</small></span></a>
      <form class="search" id="search-form"><label for="site-search">Search the community:</label><input id="site-search" value="${query.replaceAll('"', "&quot;")}" placeholder="projects, people, guilds"><button type="submit">Search</button></form>
      <div class="head-links">${isLoggedIn ? `<span>Hi, <b>salocin-dot-ten</b></span><button class="text-link" data-logout>Log out</button>` : `<a href="#member-login">Help</a><span>|</span><a href="#member-login">Log In</a><span>|</span><a href="#member-login">Sign Up</a>`}</div>
    </header>
    <nav class="site-nav" aria-label="Main navigation">
      <a href="#top">Home</a><i>|</i><a href="#community">Community</a><i>|</i><a href="#builders">Builders</a><i>|</i><a href="#events">Events</a><i>|</i><a href="#showcase">Showcase</a><i>|</i><a href="#bounties">Bounties</a><i>|</i><a href="#school">School</a><i>|</i><a href="#labs">Labs</a>
    </nav>`;
}

function builderStrip() {
  return `<section class="module builder-module" id="builders">${sectionBar("Cool New Builders", "gold", "meet the crew")}<div class="builder-strip">${builders.map((builder) => `<a class="builder-mini" href="#community"><span class="mini-name">${builder.name}</span><img src="/assets/${builder.file}" alt="${builder.name} KrackedDevs builder card"></a>`).join("")}</div></section>`;
}

function activityList(items = filteredActivity()) {
  if (!items.length) return `<p class="empty-results">No community posts match that search yet.</p>`;
  return items.map((item) => `
    <article class="activity-item">
      <img src="/assets/${item.image}" alt="">
      <div class="activity-copy"><span class="eyebrow">${item.type}</span><a class="activity-title" href="${item.href}">${item.title}</a><p>${item.detail}</p><small>by <a href="#builders">${item.author}</a> · recently</small></div>
      <a class="view-link" href="${item.href}">view »</a>
    </article>`).join("");
}

function filteredActivity() {
  const needle = query.trim().toLowerCase();
  return needle ? activity.filter((item) => `${item.title} ${item.author} ${item.detail} ${item.type}`.toLowerCase().includes(needle)) : activity;
}

function welcomeModule() {
  return `<section class="welcome-module" id="welcome"><div class="welcome-image"><img src="/assets/kd-banner.png" alt="Green pixel KrackedDevs mark on a dark digital field"></div><div class="welcome-copy"><p class="eyebrow">WELCOME TO KD</p><h1>A self-sustaining builder ecosystem</h1><p>Connecting builders across Malaysia through community, gamification, and real projects — from your first commit to shipping in production.</p><div class="welcome-actions"><a class="button-link" href="#school">Learn more »</a><button class="plain-link" data-login>Enter the community »</button></div></div></section>`;
}

function loginPanel() {
  return `<section class="module login-module" id="member-login">${sectionBar("Member Login")}<form class="login-form" id="login-form"><label for="email">E-Mail:</label><input id="email" type="text" placeholder="you@example.com"><label for="password">Password:</label><input id="password" type="password" placeholder="••••••••"><label class="remember"><input type="checkbox"> Remember my E-mail</label><button class="login-button" type="submit">LOG IN</button><button class="demo-link" type="button" data-login>Enter as a guest »</button></form><p class="prototype-note">Prototype only — login is simulated and no details are sent.</p></section>`;
}

function sideLinks(title = "Explore KrackedDevs") {
  return `<section class="module side-links" id="labs">${sectionBar(title, "gold")}<a href="#builders">Builders <small>meet your people</small></a><a href="#events">Events <small>build together</small></a><a href="#showcase">Showcase <small>community projects</small></a><a href="#bounties">Bounty board <small>build for rewards</small></a><a href="#school">The AI Builder School <small>learn by doing</small></a></section>`;
}

function loggedOut() {
  return `${builderStrip()}<div class="columns logged-out-columns"><main class="primary-column">${welcomeModule()}<section class="module" id="community">${sectionBar("Recent Community Activity", "blue", "58 posts so far")}<div class="activity-list" data-activity>${activityList()}</div><a class="module-footer" href="#community">Open KD Square »</a></section><section class="module principles" id="school">${sectionBar("Learn. Build. Ship.", "gold")}<div class="principle-grid"><a href="#school"><b>Learn</b><span>Free Monday classes at The AI Builder School.</span></a><a href="#labs"><b>Build</b><span>Join guilds, take on bounties, grow a portfolio.</span></a><a href="#showcase"><b>Ship</b><span>Get your work seen and earn real rewards.</span></a></div></section></main><aside class="side-column">${loginPanel()}${sideLinks()}<section class="module" id="events">${sectionBar("Coming Up")}<div class="side-event"><b>Vibe Coding 101</b><span>Build real apps without writing code</span><a href="#events">View event »</a></div><div class="side-event"><b>K.D Borneo · Week 2</b><span>Vibe-code × dual-agent</span><a href="#events">View event »</a></div></section></aside></div><footer class="site-footer">KrackedDevs · A space for builders · <a href="#top">Back to top ↑</a></footer>`;
}

function profileBox() {
  return `<section class="module profile-box">${sectionBar("Your KD Profile", "gold")}<div class="profile-inner"><img src="/assets/salocin-avatar.png" alt="Salocin profile picture"><div><b>salocin-dot-ten</b><span>KrackedDevs operative</span><small>Building with the community</small></div></div><p class="profile-blurb">A community of builders learning, building and shipping together.</p><a class="module-footer" href="#builders">View your profile »</a></section>`;
}

function eventCard(day, date, title, detail) {
  return `<div class="side-event"><span class="date-tile">${day}<br><b>${date}</b></span><div><b>${title}</b><span>${detail}</span><a href="#events">View event »</a></div></div>`;
}

function loggedIn() {
  return `<div class="logged-in-banner" id="welcome"><div><span class="eyebrow">WELCOME BACK</span><h1>Hey, salocin-dot-ten!</h1><p>Your people are building. See what’s new around KD.</p></div><img src="/assets/salocin-avatar.png" alt="Salocin profile picture"></div>${builderStrip()}<div class="columns logged-in-columns"><aside class="side-column">${profileBox()}<section class="module side-links" id="labs">${sectionBar("Quick Links")}<a href="#community">KD Square <small>questions, articles, journals</small></a><a href="#events">Events <small>what’s happening this week</small></a><a href="#showcase">Showcase <small>community projects</small></a><a href="#bounties">Bounty Board <small>open creative challenges</small></a><a id="school" href="#school">AI Builder School <small>learn by doing</small></a></section><section class="module" id="events">${sectionBar("Coming Up", "gold")}${eventCard("MON", "05", "Vibe Coding 101", "Build real apps without writing code")}${eventCard("FRI", "09", "K.D Borneo · Week 2", "Vibe-code × dual-agent")}</section></aside><main class="primary-column"><section class="module" id="community">${sectionBar("KD Bulletin Board", "gold", "write something »")}<p class="section-intro">Questions, articles and journals from the builders you follow.</p><div class="activity-list" data-activity>${activityList()}</div><a class="module-footer" href="#community">See all community posts »</a></section><section class="module" id="showcase">${sectionBar("Community Project Showcase", "blue", "view showcase »")}<div class="project-list"><a href="#showcase"><img src="/assets/member-strdst7.png" alt=""><span><b>AIM Index</b><small>React Bits component showcase · by strdst7</small></span></a><a href="#showcase"><img src="/assets/member-4kmal.png" alt=""><span><b>yugen flow</b><small>Water ripple + petal blossom · by nurrrmann</small></span></a><a href="#showcase"><img src="/assets/member-adamkd.png" alt=""><span><b>OdoTick</b><small>One cost tracker for petrol and electric cars</small></span></a></div></section><section class="module bounty-module" id="bounties">${sectionBar("Open Bounty", "gold", "bounty board »")}<div class="bounty-row"><div><span class="eyebrow">ONGOING · COMMUNITY CHALLENGE</span><b>Redesign KD Community Landing Page</b><small>Imagine a new landing-page experience for the KrackedDev community.</small></div><strong>150 USD<br><small>AI credits</small></strong></div></section></main></div><footer class="site-footer">You’re logged in as salocin-dot-ten · <button class="text-link" data-logout>Log out of prototype</button> · <a href="#top">Back to top ↑</a></footer>`;
}

function render() {
  root.innerHTML = `<div class="app-shell" id="top">${header()}<div class="page-wrap">${isLoggedIn ? loggedIn() : loggedOut()}</div><div class="mode-switch"><span>${isLoggedIn ? "Logged in prototype" : "Logged out prototype"}</span><button data-toggle>${isLoggedIn ? "Preview public home" : "Preview member home"}</button></div></div>`;
}

document.addEventListener("submit", (event) => {
  if (event.target.id === "search-form") event.preventDefault();
  if (event.target.id === "login-form") {
    event.preventDefault();
    isLoggedIn = true;
    query = "";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id !== "site-search") return;
  query = event.target.value;
  document.querySelectorAll("[data-activity]").forEach((list) => { list.innerHTML = activityList(); });
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-login]")) {
    isLoggedIn = true;
    query = "";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (event.target.closest("[data-logout]")) {
    isLoggedIn = false;
    query = "";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (event.target.closest("[data-toggle]")) {
    isLoggedIn = !isLoggedIn;
    query = "";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

render();
