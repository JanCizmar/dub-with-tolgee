import Toolbar from "@/ui/layout/toolbar/toolbar";
import { Background } from "@dub/ui";
import Providers from "app/providers";
import {getStaticData} from "../../../tolgee/shared.ts";
import {TolgeeNextProvider} from "../../../tolgee/client.tsx";
import {ReactNode} from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function AuthLayout({
  children,
  params: { locale },
}: Props) {
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
