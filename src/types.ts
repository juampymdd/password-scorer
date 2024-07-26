export interface PasswordScore {
    score: number;
    feedback: string[];
    description: string;
}

export interface PasswordScoreLanguage {
    emptyPassword: string;
    minLength: string;
    lowercase: string;
    number: string;
    uppercase: string;
    symbol: string;
    descriptions: Record<number, string>;
}