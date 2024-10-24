"use server"

import { setUserLocale } from "tolgee/locale"

export async function updateLocale(formData: FormData) {
    console.log("Localling")
    const locale = formData.get("locale")

    if (locale) {
        console.log("Locale >>>", locale)
        setUserLocale(locale as string)

    }

}