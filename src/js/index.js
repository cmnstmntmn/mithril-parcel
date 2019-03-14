import m from "mithril";
import marker from '../img/marker.svg';

const app = {
    view: () => {
        return [
            m('h1', 'Mithril JS'),
            m('img.db', {
                width: 24,
                alt: 'marker',
                src: marker
              })
        ]
    }
}

m.mount(document.querySelector('.app'), app)