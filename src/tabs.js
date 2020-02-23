export default {
    state: {
        collapse: false,
        title: {
            shrink: 'ET',
            expand: "Example Template"
        },
        menu: [],
        current: null,
        tags: [
            {
                path: '/home',
                name: 'home',
                label: '系统首页',
                icon: 's-home'
            },
        ]
    },
    mutations: {
        choose(state, value) {
            if (value.name !== 'home') {
                state.current = value
                let index = state.tags.findIndex(x => x.name === value.name)
                index === -1 ? state.tags.push(value) : ''
            } else {
                state.current = null
            }
        },
        close(state, value) {
            let index = state.tags.findIndex(x => x.name === value.name)
            state.tags.splice(index, 1)
        },
        collapse(state) {
            state.collapse = !state.collapse;
        }
    },
    actions: {}
}