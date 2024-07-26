import { translations } from "./language";

export function passwordScorer(password: string, language = 'en') {
    const t = translations[language] || translations['en'];
    let score = 0;
    let feedback: string[] = [];

    if (password.length === 0) {
        return { score, feedback: [t.emptyPassword], description: t.descriptions[0] }; // 0 puntos si no hay caracteres
    }
    if (password.length < 8) {
        score = 20;
        feedback.push(t.minLength);
    } else {

        // Sumar 20 puntos si la longitud es mayor a 8 caracteres
        if (password.length >= 8) {
            score += 20;
        } else {
            feedback.push(t.minLength);
        }

        // Sumar 20 puntos si hay al menos un carácter en minúscula
        if (/[a-z]/.test(password)) {
            score += 20;
        } else {
            feedback.push(t.lowercase);
        }

        // Sumar 20 puntos si hay al menos un número
        if (/\d/.test(password)) {
            score += 20;
        } else {
            feedback.push(t.number);
        }

        // Sumar 20 puntos si hay al menos una mayúscula
        if (/[A-Z]/.test(password)) {
            score += 20;
        } else {
            feedback.push(t.uppercase);
        }

        // Sumar 20 puntos si hay al menos un símbolo
        if (/[\W_]/.test(password)) {
            score += 20;
        } else {
            feedback.push(t.symbol);
        }
    }
    // Asignar la descripción basada en el puntaje
    let description = t.descriptions[0];
    if (score >= 20 && score < 40) {
        description = t.descriptions[20];
    } else if (score >= 40 && score < 60) {
        description = t.descriptions[40];
    } else if (score >= 60 && score < 80) {
        description = t.descriptions[60];
    } else if (score >= 80 && score < 100) {
        description = t.descriptions[80];
    } else if (score === 100) {
        description = t.descriptions[100];
    }

    return { score: Math.min(score, 100), feedback, description };
}
