/**
 * @param {Document} doc
 */
const handleNavbarBehaviour = (doc) => {
  /**
   * @type {HTMLElement}
   */
  const navbar = doc.getElementById("navbar");
};

const LoadListener = () => {
  handleNavbarBehaviour(document);
}

document.body.onload = LoadListener;