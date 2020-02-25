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
        ],
        color: {}
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
        },
        click(state, value) {
            let index = state.tags.findIndex(x => x.name === value.name)
            state.tags[index].color = 'white'
            state.tags.forEach(x => {
                if (x.name !== value.name) {
                    x.color = '#f3f6f8'
                }
            })
        }
    },
    actions: {}
}