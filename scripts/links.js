const data = [
  {name: "Github", link: "https://github.com/Name-shitty-github-profile"},
  {name: "Website", link: "https://website.notnoemie.repl.co"},
  {name: "Mirador", link: "https://discord.gg/crouton"},
  {name: "Source", link: "https://github.com/Name-shitty-github-profile/link-website"}
];
for (let i = 0; i < data.length; i++) {
  var da = data[i];
  document.getElementById('links').innerHTML += '<a class="link" href="' + da.link + '">' + da.name + '</a><br>';
}
