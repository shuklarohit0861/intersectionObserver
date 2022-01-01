const list = document.querySelector("#list");

const options = {
  root: null,
  threshold: 0.25,
};

const lastNode = list.lastElementChild;
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((value) => {
    console.log(value.isIntersecting);
    console.log(value.target);
    if (value.isIntersecting) {
      addNewNode();
      observer.unobserve(value.target);
    }
  });
}, options);

observer.observe(lastNode);

function addNewNode() {
  const li = document.createElement("li");

  li.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
    quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
    omnis sapiente neque cumque consequuntur reiciendis deserunt. Dolorem
    vero exercitationem consequuntur, eligendi cupiditate debitis facilis
    quibusdam magni. Eveniet.`;

  list.appendChild(li);
  observer.observe(li);
}
