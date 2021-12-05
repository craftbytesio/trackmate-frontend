import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        greetingHome: 'Hello',
        greetingStart: 'Welcome to TrackMate!',
        loginPasswordLabel: 'Password',
        settings: 'Settings',
        dateLabel: 'Date',
        distance_mLabel: 'Distance in meter',
        distance_mColHeader: 'Distance',
        sport_typeLabel: 'Sport type',
        sport_typeColHeader: 'Type',
        sport_typesSelect: 'Select sport',
        sportTypes: [
            {name: 'Swimming', value: 'swimming'},
            {name: 'Running', value: 'running'},
            {name: 'Biking', value: 'cycling'},
        ],
        assessmentLabel: 'Assessment',
        assessmentsSelect: 'Set assessment',
        assessments: [
            {name: 'Neutral', value: 0},
            {name: 'Bad', value: 1},
            {name: 'Okay', value: 2},
            {name: 'Good', value: 3}
        ],
        addLabel: 'Add',
        addTrackTitle: 'Add a track',
        selectLanguageLabel: 'Select your language',
        columnSportType: 'Type',
        register: 'Register',
        registerButtonLabel: 'Register now',
        registerHint: 'Not registered yet? Create an account!',
        confirmationPassword: 'Password confirmation',
        successfulRegistration: 'Registration successful! You are now able to login.',
        passwordDoNotMatch: 'Passwords do not match!',
    },
    'de': {
        greetingHome: 'Hallo',
        greetingStart: 'Wilkommen bei TrackMate!',
        loginPasswordLabel: 'Passwort',
        settings: 'Einstellungen',
        dateLabel: 'Datum',
        distance_mLabel: 'Distanz in Meter',
        distance_mColHeader: 'Distanz',
        sport_typeLabel: 'Sportart',
        sport_typeColHeader: 'Art',
        sport_typesSelect: 'Sportart wählen',
        sportTypes: [
            {name: 'Schwimmen', value: 'swimming'},
            {name: 'Laufen', value: 'running'},
            {name: 'Radfahren', value: 'cycling'},
        ],
        assessmentLabel: 'Bewertung',
        assessmentsSelect: 'Bewertung setzen',
        assessments: [
            {name: 'Neutral', value: 0},
            {name: 'Schlecht', value: 1},
            {name: 'Mittel', value: 2},
            {name: 'Gut', value: 3}
        ],
        addLabel: 'Hinzufügen',
        addTrackTitle: 'Track hinzufügen',
        selectLanguageLabel: 'Sprache wählen',
        columnSportType: 'Art',
        register: 'Registrierung',
        registerButtonLabel: 'Jetzt registrieren',
        registerHint: 'Noch keinen Account? Registriere dich jetzt!',
        confirmationPassword: 'Password Bestätigung',
        successfulRegistration: 'Registrierung erfolgreich! Du kannst dich jetzt einloggen.',
        passwordDoNotMatch: 'Passwörter sind nicht gleich!',
    }
}

export default new VueI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages,
});