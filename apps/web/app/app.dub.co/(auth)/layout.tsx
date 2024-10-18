import Toolbar from "@/ui/layout/toolbar/toolbar";
import { Background } from "@dub/ui";
import Providers from "app/providers";
import {getStaticData} from "../../../tolgee/shared.ts";
import {TolgeeNextProvider} from "../../../tolgee/client.tsx";
import {ReactNode} from "react";
import {getUserLocale} from "../../../tolgee/locale.ts";

type Props = {
  children: ReactNode;
};

export default async function AuthLayout({
  children,
}: Props) {
  const locale = getUserLocale();

  console.log({locale});

  const locales = await getStaticData([locale, "en"]);

  return (
    <html lang={locale}>
      <body>
        <TolgeeNextProvider locale={locale} locales={locales}>
          <Providers>
            <Toolbar />
            <Background />
            {children}
          </Providers>
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
