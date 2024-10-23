import { MainNav } from "@/ui/layout/main-nav";
import { HelpButtonRSC } from "@/ui/layout/sidebar/help-button-rsc";
import Toolbar from "@/ui/layout/toolbar/toolbar";
import { constructMetadata } from "@dub/utils";
import { ReactNode } from "react";
import Providers from "../../providers";
import { getStaticData } from "../../../tolgee/shared.ts";
import {TolgeeNextProvider} from "../../../tolgee/client.tsx";
import { getUserLocale } from "../../../tolgee/locale.ts";

export const dynamic = "force-static";
export const metadata = constructMetadata();

export default async function Layout({ children }: { children: ReactNode }) {
  const locale = getUserLocale();
  const locales = await getStaticData([locale, "en"]);

  return (
    <TolgeeNextProvider locale={locale} locales={locales}>
    <Providers>
      <div className="min-h-screen w-full bg-white">
        <MainNav toolContent={<HelpButtonRSC />}>{children}</MainNav>
      </div>
      {/* <ChangelogPopup /> */}
      <Toolbar show={["onboarding"]} />
      </Providers>
    </TolgeeNextProvider>
  );
}
