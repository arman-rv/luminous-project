import { notFound } from "next/navigation";

import { Breadcrumbs, CourseInfo } from "@/components/pages/details-page/comps";
import {
  CommentSection,
  CourseDetailsGrid,
  CourseLessons,
  PostBody,
} from "@/components/pages/details-page/comps/content-body";
import {
  CourseInfoSideCard,
  TeacherSideCard,
} from "@/components/pages/details-page/comps/side-bar-items";
import { LinkSideCard } from "@/components/pages/details-page/comps/side-bar-items/client";
import {
  ContentBody,
  DetailsSection,
  SideBar,
} from "@/components/pages/details-page/wrappers";

import { getCourseById } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

const CoursesIDPage = async ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) => {
  const data = await getCourseById(id);

  if (!data) notFound();

  return (
    <main className="container">
      <Breadcrumbs
        lang={lang}
        segments={[
          {
            title: { fa: "دوره‌ها", en: "Courses" }[lang],
            href: `/${lang}/courses`,
          },
          {
            title: data.title,
            href: `/${lang}/courses/${data.courseId}`,
          },
        ]}
      />
      <CourseInfo lang={lang} data={data} />
      <DetailsSection>
        <ContentBody>
          <CourseDetailsGrid lang={lang} data={data} />
          {/* <CourseLessons /> */}
          {/* <PostBody /> */}
          <CommentSection
            lang={lang}
            typeOf="course"
            courseId={id}
            commentCount={data.commentCount}
          />
        </ContentBody>
        <SideBar variant="sticky">
          <CourseInfoSideCard lang={lang} data={data} />
          <TeacherSideCard lang={lang} teacherId={data.teacherId} />
          <LinkSideCard lang={lang} link={`/c/${data.courseId}`} />
        </SideBar>
      </DetailsSection>
    </main>
  );
};

export default CoursesIDPage;
