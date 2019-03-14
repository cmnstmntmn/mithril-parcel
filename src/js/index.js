import m from "mithril";

const app = {
    view: () => {
        return m('h1', 'Mithril JS')
    }
}

m.mount(document.querySelector('.app'), app)