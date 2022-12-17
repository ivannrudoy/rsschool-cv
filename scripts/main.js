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
 * @param {HTMLElement} el
 */
const hideElement = (el) => el.classList.add(HIDDEN);

/**
 * @param {HTMLElement} el
 */
const showElement = (el) => el.classList.remove(HIDDEN);

/**
 * @param {Document} doc
 */
const handleUpBehaviour = (doc) => {
  /**
   * @type {HTMLButtonElement}
   */
  const up = doc.querySelector(".up");

  const scrollListener = (ev) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      showElement(up);
    } else {
      hideElement(up);
    }
  }

  doc.onscroll = scrollListener;
}

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
  showElement(prevTabContent);

  /**
   * @param {MouseEvent} ev
   */
  const tabsButtonsClickListener = (ev) => {
    if (ev.target.tagName === "DIV") return;
    /**
     * @type {HTMLElement}
     */
    const targetTab = ev.target;
    prevTabId = activeTabId;
    activeTabId = targetTab.dataset.id;
    if (activeTabId !== prevTabId) {
      setTextIdle(prevTab);
      hideElement(prevTabContent);
      setTextActive(targetTab);
      const activeTabContent = tabsContent.querySelector(`[data-id="${activeTabId}"]`)
      showElement(activeTabContent);
      prevTab = targetTab;
      prevTabContent = activeTabContent;
    }
  };
  tabsButtons.addEventListener("click", tabsButtonsClickListener);
}

const LoadListener = () => {
  hljs.highlightAll();
  handleUpBehaviour(document);
  handleNavbarBehaviour(document);
  handleSkillsBehaviour(document);
}

document.body.onload = LoadListener;
