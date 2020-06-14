import React from 'react';
import i18next from 'i18next';
import en from "../components/admin/localisation/en.json";
i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: en
    },
  dt: {
      translation: {
        "key": "chbackh chbakh"
      }
    }
  }
}, () => {
  console.log("doneee");

});
 
const Home = () => { 
  return (
    <div>
      {i18next.t("key")}
    </div>
  );
};

export default Home;

