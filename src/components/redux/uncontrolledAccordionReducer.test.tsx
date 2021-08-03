import { reducer, StateTypeUnCAcc, TOGGLE_COLLAPSED } from "./uncontrolledAccordionReducer"

test("reducer should to true", () => {
    /* data (входящие данные) */
    const state: StateTypeUnCAcc = {
        collapsed: false
    }
    /* action (действия) */
    const newState = reducer(state, { type: TOGGLE_COLLAPSED })
    /* expection (ожидание) */
    expect(newState.collapsed).toBe(true)
})
test("reducer should to false", () => {
    /* data (входящие данные) */
    const state: StateTypeUnCAcc = {
        collapsed: true
    }
    /* action (действия) */
    const newState = reducer(state, { type: TOGGLE_COLLAPSED })
    /* expection (ожидание) */
    expect(newState.collapsed).toBe(false)
})

test("reducer should to FakeType", () => {
    /* data (входящие данные) */
    const state: StateTypeUnCAcc = {
        collapsed: true
    }
    /* action (действия) */
    const newState = reducer(state, { type: TOGGLE_COLLAPSED })
    /* expection (ожидание) */
    expect( () => {
        reducer(state, { type: "FAKE_TYPE" })
    } ).toThrowError();
})