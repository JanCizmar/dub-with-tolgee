"use client"
import { updateLocale } from "app/api/update-locale/action";
import { PageContent } from "@/ui/layout/page-content";
import WorkspaceLinksClient from "./page-client";
import { useTranslate } from '@tolgee/react';

export default function WorkspaceLinks() {
   const { t } = useTranslate();
  
  return (
    <PageContent title="Links">
      <div className="w-full flex flex-col px-10">
        <p>Select Language</p>
        <form action={updateLocale}>
          <select className="rounded-sm" name="locale" id="locale">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="ar">Arabic</option>
            <option value="zh">Chinese</option>
          </select>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-blue-50">Submit</button>
        </form>
        <p>{t('hello')}</p>
  
      </div>

      <WorkspaceLinksClient />

    </PageContent>
  );
}
