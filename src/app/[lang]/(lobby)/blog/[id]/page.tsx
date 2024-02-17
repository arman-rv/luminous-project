import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/pages/details-page/comps";
import {
  CommentSection,
  PostBody,
} from "@/components/pages/details-page/comps/content-body";
import { CategoriesSideCard } from "@/components/pages/details-page/comps/side-bar-items";
import { LinkSideCard } from "@/components/pages/details-page/comps/side-bar-items/client";
import { PostSuggestionSideCard } from "@/components/pages/details-page/comps/side-bar-items/side-card-post-suggestions";
import {
  ContentBody,
  DetailsSection,
  SideBar,
} from "@/components/pages/details-page/wrappers";

import {
  categoriesDict,
  latestPostsSideCardDict,
} from "@/dict/dev/details.dict";

import { getNewsById } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

const BlogIDPage = async ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: number };
}) => {
  const data = await getNewsById(id);

  if (!data) notFound();

  return (
    <main className="container">
      <Breadcrumbs
        lang={lang}
        segments={[
          {
            title: { fa: "اخبار", en: "News" }[lang],
            href: `/${lang}/blog`,
          },
          {
            title: data.detailsNewsDto.title,
            href: `/${lang}/lobby/blog/${data.detailsNewsDto.id}`,
          },
        ]}
      />
      <DetailsSection>
        <ContentBody>
          <PostBody lang={lang} data={data} />
          <CommentSection
            lang={lang}
            typeOf="news"
            commentCount={data.detailsNewsDto.commentsCount}
            newsId={data.detailsNewsDto.id}
          />
        </ContentBody>
        <SideBar>
          <LinkSideCard lang={lang} link={`/b/${data.detailsNewsDto.id}`} />
          <PostSuggestionSideCard
            lang={lang}
            links={latestPostsSideCardDict.links}
          />
          <CategoriesSideCard lang={lang} categories={categoriesDict.links} />
        </SideBar>
      </DetailsSection>
    </main>
  );
};

export default BlogIDPage;
