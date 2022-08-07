import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_vi from "./translations/vi/Common.json";
import common_en from "./translations/en/Common.json";
import enum_vi from './translations/vi/Enumeration.json';
import enum_en from './translations/en/Enumeration.json';
import uom_vi from './translations/vi/Uom.json';
import uom_en from './translations/en/Uom.json';
import status_vi from './translations/vi/StatusItem.json';
import status_en from './translations/en/StatusItem.json';
import contact_mech_purpose_en from './translations/en/ContactMechPurpose.json';
import contact_mech_purpose_vi from './translations/vi/ContactMechPurpose.json';
import user_group_en from './translations/en/UserGroup.json';
import user_group_vi from './translations/vi/UserGroup.json';

i18n
    // .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        defaultNS: "label",
        lng: "vi",
        fallbackLng: "vi",
        resources: {
            en: {
                common: common_en,
                enum : enum_en,
                uom : uom_en,
                status: status_en,
                contact_mech_purpose: contact_mech_purpose_en,
                userGroup: user_group_en
            },
            vi: {
                common: common_vi,
                enum : enum_vi,
                uom : uom_vi,
                status: status_vi,
                contact_mech_purpose: contact_mech_purpose_vi,
                userGroup: user_group_vi
            },
        },
        interpolation: {
            escapeValue: false,
        },
        debug: false,
        detection: {
            order: ["path", "navigator"],
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
