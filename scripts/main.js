function goBack() {
  const referrer = document.referrer;
  const currentDomain = window.location.origin;

  if (referrer && referrer.startsWith(currentDomain)) {
    window.history.back();
  } else {
    window.location.href = "../index.html"; // Replace with the default page URL within your site
  }
}
