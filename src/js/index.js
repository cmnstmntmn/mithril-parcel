import m from "mithril";
import icons from "./../img/*.svg";


const app = {
    view: () => {
        return [
            m('h1', 'Mithril JS'),
            m('pre', JSON.stringify(icons, null, 2)),
            m('img.db', {
                width: 24,
                alt: 'marker',
                src: icons.marker
              })
        ]
    }
}

m.mount(document.querySelector('.app'), app)