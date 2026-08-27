let header = document.getElementById('signatureMenu');
if (header) {
header.innerHTML = `
  <h2>
    <a href="../Pages/index.html"><span class="textWhite">Alexander Soprych</span></a> 
    <a href="../Pages/index.html"><span class="textBlack">Alexander Soprych</span></a>
  </h2>
  <div>
    <h2 class="navMenu">
      <a href="../Pages/index.html"><span class="textWhite">Projects</span></a>
      <a href="../Pages/index.html"><span class="textBlack">Projects</span></a>
    </h2>
    <h2 class="navMenu">
      <a href="../Pages/About_Me.html"><span class="textWhite">About</span></a>
      <a href="../Pages/About_Me.html"><span class="textBlack">About</span></a>
    </h2>
  </div>
`;
}

let footer = document.getElementById('footer');
footer.innerHTML = `
  <p class="footerText">Alexander Soprych © 2026</p>
  <p class="footerText">This is a portfolio, not an advertiser's data siphon. NO cookies!</p>
`;