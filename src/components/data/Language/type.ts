export enum ELanguage {
    VIETNAM = "Vietnamese",
    USA = "United States",
}
export enum EPathLanguage {
    VIETNAM = "/icons/language/iconVietNam.svg",
    USA = "/icons/language/america.png",
}
export interface ILanguage {
    id?: string | number;
    name: string;
    src: string;
}
