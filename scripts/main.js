const TEXT_ACTIVE = "text_skyyellow";
const HIDDEN = "visually-hidden";

/**
 * @param {HTMLElement} link
 */
const setTextActive = (link) => link.classList.add(TEXT_ACTIVE);

/**
 * @param {HTMLElement} link
 */
const setTextIdle = (link) => link.classList.remove(TEXT_ACTIVE);

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
  setTextActive(prevLink);

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
      setTextIdle(prevLink);
      setTextActive(targetItem);
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
   * @param {HTMLElement} tabContent
   */
  const hideTabContent = (tabContent) => tabContent.classList.add(HIDDEN);

  /**
   * @param {HTMLElement} tabContent
   */
  const showTabContent = (tabContent) => tabContent.classList.remove(HIDDEN);

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

  setTextActive(prevTab);
  showTabpanel(prevTabpanel);
}

const LoadListener = () => {
  handleNavbarBehaviour(document);
  handleSkillsBehaviour(document);
}

document.body.onload = LoadListener;
