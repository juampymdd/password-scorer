import { PasswordScoreLanguage } from "./types";

export const translations: Record<string, PasswordScoreLanguage> = {
    en: {
        emptyPassword: "The password is empty.",
        minLength: "Must be more than 8 characters.",
        lowercase: "Must contain at least one lowercase letter.",
        number: "Must contain at least one number.",
        uppercase: "Must contain at least one uppercase letter.",
        symbol: "Must contain at least one symbol (e.g., !, @, #, $, %, ^, &, *).",
        descriptions: {
            0: "very weak",
            20: "weak",
            40: "good",
            60: "very good",
            80: "excellent",
            100: "perfect"
        }
    },
    es: {
        emptyPassword: "La contraseña está vacía.",
        minLength: "Debe tener más de 8 caracteres.",
        lowercase: "Debe contener al menos una letra minúscula.",
        number: "Debe contener al menos un número.",
        uppercase: "Debe contener al menos una letra mayúscula.",
        symbol: "Debe contener al menos un símbolo (ej. !, @, #, $, %, ^, &, *).",
        descriptions: {
            0: "muy débil",
            20: "débil",
            40: "buena",
            60: "muy buena",
            80: "excelente",
            100: "perfecta"
        }
    },
    de: {
        emptyPassword: "Das Passwort ist leer.",
        minLength: "Muss mehr als 8 Zeichen haben.",
        lowercase: "Muss mindestens einen Kleinbuchstaben enthalten.",
        number: "Muss mindestens eine Zahl enthalten.",
        uppercase: "Muss mindestens einen Großbuchstaben enthalten.",
        symbol: "Muss mindestens ein Symbol enthalten (z.B. !, @, #, $, %, ^, &, *).",
        descriptions: {
            0: "sehr schwach",
            20: "schwach",
            40: "gut",
            60: "sehr gut",
            80: "ausgezeichnet",
            100: "perfekt"
        }
    },
    zh: {
        emptyPassword: "密码为空。",
        minLength: "必须超过8个字符。",
        lowercase: "必须包含至少一个小写字母。",
        number: "必须包含至少一个数字。",
        uppercase: "必须包含至少一个大写字母。",
        symbol: "必须包含至少一个符号（例如，！、@、#、$、%、^、&、*）。",
        descriptions: {
            0: "非常弱",
            20: "弱",
            40: "好",
            60: "非常好",
            80: "优秀",
            100: "完美"
        }
    },
    ja: {
        emptyPassword: "パスワードが空です。",
        minLength: "8文字以上でなければなりません。",
        lowercase: "少なくとも1つの小文字を含める必要があります。",
        number: "少なくとも1つの数字を含める必要があります。",
        uppercase: "少なくとも1つの大文字を含める必要があります。",
        symbol: "少なくとも1つの記号を含める必要があります（例：！、@、#、$、%、^、&、*）。",
        descriptions: {
            0: "非常に弱い",
            20: "弱い",
            40: "良い",
            60: "非常に良い",
            80: "優れている",
            100: "完璧"
        }
    },
    zh_TW: {
        emptyPassword: "密碼為空。",
        minLength: "必須超過8個字符。",
        lowercase: "必須包含至少一個小寫字母。",
        number: "必須包含至少一個數字。",
        uppercase: "必須包含至少一個大寫字母。",
        symbol: "必須包含至少一個符號（例如，！、@、#、$、%、^、&、*）。",
        descriptions: {
            0: "非常弱",
            20: "弱",
            40: "好",
            60: "非常好",
            80: "優秀",
            100: "完美"
        }
    },
    pt: {
        emptyPassword: "A senha está vazia.",
        minLength: "Deve ter mais de 8 caracteres.",
        lowercase: "Deve conter pelo menos uma letra minúscula.",
        number: "Deve conter pelo menos um número.",
        uppercase: "Deve conter pelo menos uma letra maiúscula.",
        symbol: "Deve conter pelo menos um símbolo (ex. !, @, #, $, %, ^, &, *).",
        descriptions: {
            0: "muito fraca",
            20: "fraca",
            40: "boa",
            60: "muito boa",
            80: "excelente",
            100: "perfeita"
        }
    },
    fr: {
        emptyPassword: "Le mot de passe est vide.",
        minLength: "Doit comporter plus de 8 caractères.",
        lowercase: "Doit contenir au moins une lettre minuscule.",
        number: "Doit contenir au moins un nombre.",
        uppercase: "Doit contenir au moins une lettre majuscule.",
        symbol: "Doit contenir au moins un symbole (ex. !, @, #, $, %, ^, &, *).",
        descriptions: {
            0: "très faible",
            20: "faible",
            40: "bon",
            60: "très bon",
            80: "excellent",
            100: "parfait"
        }
    }
    // Puedes agregar más idiomas aquí
};