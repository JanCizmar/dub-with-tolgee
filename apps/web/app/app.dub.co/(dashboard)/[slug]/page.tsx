"use client";
import { PageContent } from "@/ui/layout/page-content";
import { useTolgee, useTranslate } from "@tolgee/react";
import { setUserLocale } from "tolgee/locale";
import WorkspaceLinksClient from "./page-client";

export default function WorkspaceLinks() {
  const { t } = useTranslate();
  const tolgee = useTolgee(["pendingLanguage"]);
  const language = tolgee.getPendingLanguage();

  return (
    <PageContent title="Links">
      <div className="flex w-full flex-col px-10">
        <p>Select Language</p>
        <select
          defaultValue={language}
          className="rounded-sm"
          name="locale"
          id="locale"
          onChange={(e) => setUserLocale(e.currentTarget.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="ar">Arabic</option>
          <option value="zh">Chinese</option>
        </select>
        <p>{t("hello")}</p>
      </div>

      <WorkspaceLinksClient />
    </PageContent>
  );
}
