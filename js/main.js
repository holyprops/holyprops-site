// Holy Props — language switch, menu, project grid, contact form
(function () {
  var T = {
    el: {
      nav_home: "Αρχική", nav_work: "Κατασκευές", nav_contact: "Επικοινωνία",
      hero_title: "Props, ειδικές κατασκευές & χειροτεχνία",
      hero_lead: "Φτιάχνουμε στο χέρι ό,τι χρειάζεσαι για σκηνή, βιτρίνα, εκδήλωση ή δώρο — από την ιδέα μέχρι το τελικό κομμάτι.",
      hero_cta: "Δες τις κατασκευές", hero_cta2: "Ζήτα προσφορά",
      cats_title: "Τι φτιάχνουμε", cats_lead: "Κάθε κατασκευή είναι μοναδική και σχεδιάζεται πάνω στη δική σου ανάγκη.",
      cat_props: "Props", cat_props_t: "Αντικείμενα για θέατρο, φωτογράφιση, βίντεο και cosplay.",
      cat_special: "Ειδικές κατασκευές", cat_special_t: "Ταμπέλες, βιτρίνες, σκηνικά και ό,τι δεν βρίσκεις έτοιμο.",
      cat_craft: "Χειροτεχνία", cat_craft_t: "Χειροποίητα κουτιά, βιβλιοδεσία και μικρά δώρα με χαρακτήρα.",
      featured_title: "Πρόσφατες κατασκευές", featured_more: "Όλες οι κατασκευές",
      about_title: "Πώς δουλεύουμε",
      about_1: "Μας λες την ιδέα σου — ακόμα κι ένα σκίτσο αρκεί.",
      about_2: "Σχεδιάζουμε και σου προτείνουμε υλικά και κόστος.",
      about_3: "Κατασκευάζουμε με λέιζερ, CNC, 3D εκτύπωση και πολύ δουλειά στο χέρι.",
      about_4: "Παραλαμβάνεις κάτι μοναδικό, φτιαγμένο για σένα.",
      about_cta: "Ας μιλήσουμε",
      work_title: "Κατασκευές", work_lead: "Μια ματιά σε δουλειές μας. Πάτα σε μια κατασκευή για περισσότερα.",
      f_all: "Όλες", photo_soon: "Φωτογραφία σύντομα",
      contact_title: "Επικοινωνία", contact_lead: "Πες μας τι έχεις στο μυαλό σου και θα σου απαντήσουμε σύντομα.",
      f_name: "Όνομα", f_email: "Email", f_phone: "Τηλέφωνο (προαιρετικό)", f_type: "Τι σε ενδιαφέρει;",
      f_type_props: "Props", f_type_special: "Ειδική κατασκευή", f_type_craft: "Χειροτεχνία", f_type_other: "Κάτι άλλο",
      f_msg: "Μήνυμα", f_msg_ph: "Περίγραψε την ιδέα σου, διαστάσεις, ημερομηνία που το χρειάζεσαι…",
      f_send: "Αποστολή", f_ok: "Ευχαριστούμε! Το μήνυμά σου στάλθηκε — θα επικοινωνήσουμε σύντομα.",
      f_err: "Κάτι πήγε στραβά. Δοκίμασε ξανά ή στείλε μας email.", f_req: "Συμπλήρωσε όνομα, email και μήνυμα.",
      f_demo: "Δείγμα: η φόρμα δεν είναι ακόμα συνδεδεμένη, οπότε το μήνυμα δεν στάλθηκε.",
      info_title: "Στοιχεία", info_email: "Email", info_phone: "Τηλέφωνο", info_social: "Instagram", info_area: "Περιοχή", info_area_v: "Αθήνα",
      footer: "Χειροποίητες κατασκευές με αγάπη."
    },
    en: {
      nav_home: "Home", nav_work: "Work", nav_contact: "Contact",
      hero_title: "Props, custom builds & handmade crafts",
      hero_lead: "We hand-make whatever you need for the stage, a shop window, an event or a gift — from the idea to the finished piece.",
      hero_cta: "See our work", hero_cta2: "Get a quote",
      cats_title: "What we make", cats_lead: "Every piece is one of a kind and designed around what you need.",
      cat_props: "Props", cat_props_t: "Objects for theatre, photo shoots, video and cosplay.",
      cat_special: "Custom builds", cat_special_t: "Signs, displays, sets and anything you can't buy off the shelf.",
      cat_craft: "Handmade crafts", cat_craft_t: "Handmade boxes, bookbinding and small gifts with character.",
      featured_title: "Recent work", featured_more: "All our work",
      about_title: "How we work",
      about_1: "Tell us your idea — even a sketch is enough.",
      about_2: "We design it and suggest materials and cost.",
      about_3: "We build with laser, CNC, 3D printing and plenty of handwork.",
      about_4: "You get something unique, made for you.",
      about_cta: "Let's talk",
      work_title: "Our work", work_lead: "A look at some of our work. Tap a piece to see more.",
      f_all: "All", photo_soon: "Photo coming soon",
      contact_title: "Contact", contact_lead: "Tell us what you have in mind and we'll get back to you soon.",
      f_name: "Name", f_email: "Email", f_phone: "Phone (optional)", f_type: "What are you interested in?",
      f_type_props: "Props", f_type_special: "Custom build", f_type_craft: "Handmade craft", f_type_other: "Something else",
      f_msg: "Message", f_msg_ph: "Describe your idea, sizes, the date you need it by…",
      f_send: "Send", f_ok: "Thank you! Your message was sent — we'll be in touch soon.",
      f_err: "Something went wrong. Please try again or email us.", f_req: "Please fill in name, email and message.",
      f_demo: "Preview: the form isn't connected yet, so the message was not sent.",
      info_title: "Details", info_email: "Email", info_phone: "Phone", info_social: "Instagram", info_area: "Area", info_area_v: "Athens, Greece",
      footer: "Handmade with love."
    }
  };
  var ICON = { props: "🎭", special: "🛠️", craft: "✂️" };
  var CAT_KEY = { props: "cat_props", special: "cat_special", craft: "cat_craft" };

  var lang = "el";
  try { lang = localStorage.getItem("hp-lang") || "el"; } catch (e) {}

  function t(k) { return (T[lang] && T[lang][k]) || T.el[k] || k; }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // projects come from data/projects.json (edited with Pages CMS, see .pages.yml): title_el, title_en, text_el, text_en
  var PROJECTS = [];
  function pf(p, k) { return p[k + "_" + lang] || p[k + "_el"] || ""; }

  function media(p) {
    if (p.img) return '<img src="' + esc(p.img) + '" alt="' + esc(pf(p, "title")) + '" loading="lazy">';
    return '<div class="ph"><div><span class="ico">' + ICON[p.cat] + '</span><span>' + t("photo_soon") + "</span></div></div>";
  }

  function card(p, i) {
    return '<button class="card" data-i="' + i + '" data-cat="' + p.cat + '">' + media(p) +
      '<div class="body"><span class="tag">' + t(CAT_KEY[p.cat]) + "</span><h3>" + esc(pf(p, "title")) + "</h3><p>" + esc(pf(p, "text")) + "</p></div></button>";
  }

  var filter = "all";
  function renderGrid() {
    var g = document.getElementById("grid");
    if (!g) return;
    var limit = Number(g.getAttribute("data-limit")) || 0, html = "", n = 0;
    PROJECTS.forEach(function (p, i) {
      if (filter !== "all" && p.cat !== filter) return;
      if (limit && n >= limit) return;
      html += card(p, i); n++;
    });
    g.innerHTML = html;
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    var b = document.getElementById("lang"); if (b) b.textContent = lang === "el" ? "EN" : "ΕΛ";
    renderGrid();
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply();
    if (document.getElementById("grid")) {
      fetch("data/projects.json", { cache: "no-cache" })
        .then(function (r) { return r.json(); })
        .then(function (list) { PROJECTS = list || []; renderGrid(); })
        .catch(function () {});
    }

    var lb = document.getElementById("lang");
    if (lb) lb.addEventListener("click", function () {
      lang = lang === "el" ? "en" : "el";
      try { localStorage.setItem("hp-lang", lang); } catch (e) {}
      apply();
    });

    var mb = document.querySelector(".menu-btn"), ul = document.querySelector(".nav ul");
    if (mb) mb.addEventListener("click", function () { ul.classList.toggle("open"); mb.setAttribute("aria-expanded", ul.classList.contains("open")); });

    document.querySelectorAll(".chip").forEach(function (c) {
      c.addEventListener("click", function () {
        filter = c.getAttribute("data-f");
        document.querySelectorAll(".chip").forEach(function (x) { x.setAttribute("aria-pressed", x === c); });
        renderGrid();
      });
    });

    // project modal
    var modal = document.getElementById("modal");
    var g = document.getElementById("grid");
    if (g && modal) {
      g.addEventListener("click", function (e) {
        var c = e.target.closest(".card"); if (!c) return;
        var p = PROJECTS[Number(c.getAttribute("data-i"))];
        modal.querySelector(".content").innerHTML = media(p) +
          '<div class="body"><span class="tag">' + t(CAT_KEY[p.cat]) + "</span><h2>" + esc(pf(p, "title")) + "</h2><p>" + esc(pf(p, "text")) + "</p></div>";
        modal.classList.add("open");
      });
      modal.addEventListener("click", function (e) { if (e.target === modal || e.target.closest(".close")) modal.classList.remove("open"); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") modal.classList.remove("open"); });
    }

    // contact form: posts to the Google Apps Script web app (google-form-script.gs), which emails info@holyprops.gr
    var FORM_URL = "https://script.google.com/macros/s/AKfycbw_zMiaco57-n1i95E3YlVH3jNNXvxvrygCITkq6lCxsit90aLyHVdzg5fFVC3xtQ4/exec";
    var form = document.getElementById("contact-form");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("form-msg");
      var d = new FormData(form);
      if (!d.get("name") || !d.get("email") || !d.get("message")) { msg.className = "form-msg err"; msg.textContent = t("f_req"); return; }
      if (!FORM_URL) { msg.className = "form-msg ok"; msg.textContent = t("f_demo"); return; }
      d.append("lang", lang);
      fetch(FORM_URL, { method: "POST", body: new URLSearchParams(d) })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (!res.ok) throw new Error();
          msg.className = "form-msg ok"; msg.textContent = t("f_ok"); form.reset();
        })
        .catch(function () { msg.className = "form-msg err"; msg.textContent = t("f_err"); });
    });
  });
})();
