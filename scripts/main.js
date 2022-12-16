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
  let activeId = 0;

    /**
   * @type {HTMLElement}
   */
  const navbar = doc.getElementById("navbar");

  /**
   * @type {HTMLElement}
   */
  let prevLink = navbar.getElementsByTagName("A")[0];
  setLinkActive(prevLink);

  const clickListener = (event) => {
    /**
     * @type {HTMLElement}
     */
    const targetItem = event.target;

    if (targetItem.tagName === "UL" || targetItem.tagName === "NAV") return;

    const prevId = activeId;
    activeId = targetItem.dataset.id;
    if (activeId !== prevId) {
      setLinkidle(prevLink);
      setLinkActive(targetItem);
      prevLink = targetItem;
    }
  };

  navbar.addEventListener("click", clickListener);
};

const LoadListener = () => {
  handleNavbarBehaviour(document);
}

document.body.onload = LoadListener;
