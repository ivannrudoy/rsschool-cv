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
    event.preventDefault();

    /**
     * @type {HTMLElement}
     */
    const targetItem = event.target;

    if (targetItem.tagName === "UL" || targetItem.tagName === "NAV") return;

    const viewToScrollInto = doc.querySelector(targetItem.getAttribute('href'));
    viewToScrollInto.scrollIntoView({ behavior: "smooth" });

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

/**
 * @param {Document} doc
 */
const handleSkillsBehaviour = (doc) => {
  /**
   * @type {HTMLElement}
   */
  const tabs = doc.querySelector(".tabs");

  /**
   * @type {HTMLElement}
   */
  const tabsButtons = tabs.querySelector(".tabs__buttons");

  /**
   * @type {HTMLElement}
   */
  const tabsContent = tabs.querySelector(".tabs__content");

  /**
   * @type {HTMLElement}
   */
  let prevTab = tabsButtons.children[0];

  /**
   * @type {HTMLElement}
   */
  let prevTabContent = tabsContent.children[0];

  let prevTabId = 0;
  let activeTabId = 0;
}

const LoadListener = () => {
  handleNavbarBehaviour(document);
  handleSkillsBehaviour(document);
}

document.body.onload = LoadListener;
