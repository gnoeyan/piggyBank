class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  // ✅ 상태를 구독하는 함수 (컴포넌트에서 사용)
  subscribe(listener) {
    this.listeners.push(listener);
  }

  // ✅ 상태 변경 함수 (Vuex의 mutation 역할)
  commit(mutation, payload) {
    if (typeof this.mutations[mutation] === "function") {
      this.state = this.mutations[mutation](this.state, payload);
      this.notify();
    } else {
      console.error(`Mutation "${mutation}"이 존재하지 않습니다.`);
    }
  }

  // ✅ 상태 변경을 알리는 함수 (모든 구독자 업데이트)
  notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  // ✅ mutation 추가 (Vuex의 mutations 역할)
  mutations = {
    increment(state, payload) {
      return { ...state, count: state.count + payload };
    },
    decrement(state, payload) {
      return { ...state, count: state.count - payload };
    },
  };
}

// ✅ 초기 상태 정의
const store = new Store({
  count: 0,
});

export default store;
