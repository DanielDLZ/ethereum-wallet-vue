export default {
  mounted(el) {
    el.querySelector("#input").focus();
    el.addEventListener("click", (event) => {
      el.querySelector("#input").focus();
    });
  },
};
