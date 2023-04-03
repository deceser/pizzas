const useLocale = () => {
    const userLocale =
        navigator.languages && navigator.languages.length
            ? navigator.languages[0]
            : navigator.language;

    return userLocale;
}

export default useLocale;