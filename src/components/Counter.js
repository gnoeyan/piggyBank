import store from "../store/store.js";

const Counter = {
  render: () => {
    return `
      <div>
        <h2>Count: <span id="count">${store.state.count}</span></h2>
        <button class="button" id="increment">+1</button>
        <button id="decrement">-1</button>
      </div>
    `;
  },

  afterRender: () => {
    document.getElementById("increment").addEventListener("click", () => {
      store.commit("increment", 1);
    });

    document.getElementById("decrement").addEventListener("click", () => {
      store.commit("decrement", 1);
    });

    // ✅ 상태가 변경될 때 UI 업데이트
    store.subscribe((state) => {
      document.getElementById("count").textContent = state.count;
    });
  },
};

export default Counter;
