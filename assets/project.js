// Progressive enhancement: the citation remains selectable without JavaScript.
const copyButton = document.getElementById('copy-citation');
const citation = document.getElementById('bibtex');
const copyStatus = document.getElementById('copy-status');

if (copyButton && citation && copyStatus && navigator.clipboard) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent);
      copyStatus.textContent = 'BibTeX copied.';
    } catch {
      copyStatus.textContent = 'Please select and copy the citation below.';
    }
  });
}
