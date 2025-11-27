export interface MenuItem {
    menuItem: string;
    id: string;
}

export interface Translations {
    menu?: MenuItem[];
    [key: string]: string | MenuItem[] | undefined;
}

export interface MenuTranslationProps {
    translations: Translations;
    locale?: string;
}