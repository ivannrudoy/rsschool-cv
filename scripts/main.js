const TEXT_ACTIVE = "text_skyyellow";

/**
 * @param {HTMLElement} link
 */
const setLinkActive = (link) => link.classList.add(TEXT_ACTIVE);

/**
 * @param {HTMLElement} link
 */
const setLinkidle = (link) => link.classList.remove(TEXT_ACTIVE);


/**
 * @param {Document} doc
 */
const handleNavbarBehaviour = (doc) => {
  /**
   * @type {HTMLElement}
   */
  const navbar = doc.getElementById("navbar");

  /**
   * @type {HTMLElement}
   */
  let prevLink = navbar.getElementsByTagName("A")[0];
  setLinkActive(prevLink);
};

const LoadListener = () => {
  handleNavbarBehaviour(document);
}

document.body.onload = LoadListener;
