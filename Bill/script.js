/**
 * Prolaksh Energy Solutions Pvt. Ltd. - Tax Invoice JavaScript
 * Handles client-side actions, image fallback handlers, and PDF print trigger.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Image Error Fallback Listeners
  const invoiceImages = document.querySelectorAll(".invoice-sheet img");
  
  invoiceImages.forEach(img => {
    // Check if image is already broken on load
    if (img.complete && img.naturalWidth === 0) {
      handleImageError(img);
    }
    
    // Add dynamic error event listener
    img.addEventListener("error", () => {
      handleImageError(img);
    });
  });

  // 2. Setup Export Button Action
  const exportBtn = document.getElementById("btn-export-pdf");
  if (exportBtn) {
    exportBtn.addEventListener("click", (e) => {
      e.preventDefault();
      exportInvoiceToPDF();
    });
  }
});

/**
 * Fallback handler to replace missing images with stylish CSS placeholders
 * @param {HTMLImageElement} img 
 */
function handleImageError(img) {
  // Hide the broken image element
  img.style.display = "none";
  img.classList.add("d-none");
  
  // Look for the sibling fallback placeholder div
  const fallback = img.nextElementSibling;
  if (fallback && fallback.classList.contains("placeholder-fallback")) {
    fallback.style.setProperty("display", "flex", "important");
    fallback.classList.remove("d-none");
  }
}

/**
 * Triggers the native browser print dialogue configured via CSS @media print
 * for clean, perfect A4 tax invoice print or save to PDF.
 */
function exportInvoiceToPDF() {
  window.print();
}
