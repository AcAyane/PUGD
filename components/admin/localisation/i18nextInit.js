import i18next from 'i18next';
import en from './en.json'
import fr from './fr.json'
i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: en
        },
        fr: {
            translation: fr
        }
    }
}, () => {

});

export default i18next